import express from 'express'
import {
  loginDoctor,
  appointmentsDoctor,
  appointmentComplete,
  appointmentCancel,
  doctorList,
  changeAvailability,
  doctorProfile,
  updateDoctorProfile,
  doctorDashboard,
  appointmentAccept,
} from '../controllers/doctorController.js'
import authDoctor from '../middleware/authDoctor.js'

const doctorRouter = express.Router()

doctorRouter.post('/login', loginDoctor)
doctorRouter.get('/appointments', authDoctor, appointmentsDoctor)
doctorRouter.post('/complete-appointment', authDoctor, appointmentComplete)
doctorRouter.post('/cancel-appointment', authDoctor, appointmentCancel)
doctorRouter.post('/accept-appointment', authDoctor, appointmentAccept)
doctorRouter.get('/list', doctorList)
doctorRouter.post('/change-availability', authDoctor, changeAvailability)
doctorRouter.get('/profile', authDoctor, doctorProfile)
doctorRouter.post('/update-profile', authDoctor, updateDoctorProfile)
doctorRouter.get('/dashboard', authDoctor, doctorDashboard)

export default doctorRouter
