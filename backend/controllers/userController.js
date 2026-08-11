import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'
import doctorModel from '../models/doctorModel.js'
import appointmentModel from '../models/appointmentModel.js'
import { v2 as cloudinary } from 'cloudinary'
import razorpay from 'razorpay'

// API to register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.json({ success: false, message: 'Missing Details' })
    }

    // Validating email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: 'Please enter a valid email' })
    }

    // Validating strong password
    if (password.length < 8) {
      return res.json({ success: false, message: 'Please enter a strong password' })
    }

    // Hashing user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const userData = {
      name,
      email,
      password: hashedPassword,
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=EEF2FF&color=5F6FFF`,
      address: { line1: '', line2: '' },
      gender: 'Not Selected',
      dob: '',
      phone: '',
    }

    const newUser = new userModel(userData)
    const user = await newUser.save()

    const token = jwt.sign({ id: user._id }, process.env.JWT_USER_SECRET)

    res.json({ success: true, token })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })

    if (!user) {
      return res.json({ success: false, message: 'User does not exist' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_USER_SECRET)
      res.json({ success: true, token })
    } else {
      res.json({ success: false, message: 'Invalid credentials' })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to get user profile data
const getProfile = async (req, res) => {
  try {
    const { userId } = req.body
    const userData = await userModel.findById(userId).select('-password')

    res.json({ success: true, userData })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to update user profile
const updateProfile = async (req, res) => {
  try {
    const { userId, name, phone, address, dob, gender } = req.body
    const imageFile = req.file

    if (!name || !phone || !dob || !gender) {
      return res.json({ success: false, message: 'Data Missing' })
    }

    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    })

    if (imageFile) {
      if (process.env.CLOUDINARY_API_KEY) {
        // Upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
          resource_type: 'image',
        })
        const imageURL = imageUpload.secure_url
        await userModel.findByIdAndUpdate(userId, { image: imageURL })
      } else {
        // Mock DB fallback: read file to base64
        const fs = await import('fs')
        const fileData = fs.readFileSync(imageFile.path)
        const base64Image = `data:${imageFile.mimetype};base64,${fileData.toString('base64')}`
        await userModel.findByIdAndUpdate(userId, { image: base64Image })
      }
    }

    res.json({ success: true, message: 'Profile Updated' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to book appointment
const bookAppointment = async (req, res) => {
  try {
    const { userId, docId, slotDate, slotTime } = req.body

    const docData = await doctorModel.findById(docId).select('-password')

    if (!docData.available) {
      return res.json({ success: false, message: 'Doctor Not Available' })
    }

    let slots_booked = docData.slots_booked

    // Checking for slot availability
    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res.json({ success: false, message: 'Slot Not Available' })
      } else {
        slots_booked[slotDate].push(slotTime)
      }
    } else {
      slots_booked[slotDate] = []
      slots_booked[slotDate].push(slotTime)
    }

    const userData = await userModel.findById(userId).select('-password')

    delete docData.slots_booked

    const appointmentData = {
      userId,
      docId,
      userData,
      docData,
      amount: docData.fees,
      slotTime,
      slotDate,
      date: Date.now(),
    }

    const newAppointment = new appointmentModel(appointmentData)
    await newAppointment.save()

    // Save new slots data in doctor data
    await doctorModel.findByIdAndUpdate(docId, { slots_booked })

    res.json({ success: true, message: 'Appointment Booked' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to get user appointments
const listAppointment = async (req, res) => {
  try {
    const { userId } = req.body
    const appointments = await appointmentModel.find({ userId })

    res.json({ success: true, appointments })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to cancel appointment
const cancelAppointment = async (req, res) => {
  try {
    const { userId, appointmentId } = req.body
    const appointmentData = await appointmentModel.findById(appointmentId)

    // Verify appointment user
    if (appointmentData.userId !== userId) {
      return res.json({ success: false, message: 'Unauthorized action' })
    }

    await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })

    // Releasing doctor slot
    const { docId, slotDate, slotTime } = appointmentData
    const doctorData = await doctorModel.findById(docId)
    let slots_booked = doctorData.slots_booked

    slots_booked[slotDate] = slots_booked[slotDate].filter((e) => e !== slotTime)

    await doctorModel.findByIdAndUpdate(docId, { slots_booked })

    res.json({ success: true, message: 'Appointment Cancelled' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to make payment using Razorpay
const paymentRazorpay = async (req, res) => {
  try {
    const { appointmentId } = req.body
    const appointmentData = await appointmentModel.findById(appointmentId)

    if (!appointmentData || appointmentData.cancelled) {
      return res.json({ success: false, message: 'Appointment Cancelled or not found' })
    }

    // Creating options for Razorpay payment
    const options = {
      amount: appointmentData.amount * 100,
      currency: process.env.CURRENCY || 'USD',
      receipt: appointmentId,
    }

    // Creation of an order
    const razorpayInstance = new razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    })

    const order = await razorpayInstance.orders.create(options)

    res.json({ success: true, order })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to verify payment of Razorpay
const verifyRazorpay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body

    const razorpayInstance = new razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    })

    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)

    if (orderInfo.status === 'paid') {
      await appointmentModel.findByIdAndUpdate(orderInfo.receipt, { payment: true })
      res.json({ success: true, message: 'Payment Successful' })
    } else {
      res.json({ success: false, message: 'Payment Failed' })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to get public stats (no auth needed)
const getStats = async (req, res) => {
  try {
    const patients = await userModel.countDocuments()
    const doctors = await doctorModel.countDocuments()
    const appointments = await appointmentModel.countDocuments()

    res.json({
      success: true,
      stats: { patients, doctors, appointments },
    })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  bookAppointment,
  listAppointment,
  cancelAppointment,
  paymentRazorpay,
  verifyRazorpay,
  getStats,
}
