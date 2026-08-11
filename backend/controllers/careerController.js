import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DATA_FILE = path.join(__dirname, '..', 'data', 'careerApplications.json')

// Helper to read applications from JSON file
const readApplications = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

// Helper to write applications to JSON file
const writeApplications = (applications) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(applications, null, 2), 'utf-8')
}

// API to submit a career application
const submitApplication = async (req, res) => {
  try {
    const { name, email, phone, experience, message, role } = req.body

    if (!name || !email || !phone || !role) {
      return res.json({ success: false, message: 'Missing required fields' })
    }

    const application = {
      _id: 'app_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
      name,
      email,
      phone,
      experience: experience || 'Not specified',
      message: message || '',
      role,
      appliedAt: new Date().toISOString(),
      status: 'Pending',
    }

    const applications = readApplications()
    applications.push(application)
    writeApplications(applications)

    console.log(`📄 New career application: ${name} for ${role}`)

    res.json({ success: true, message: 'Application submitted successfully!' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to get all career applications (admin only)
const getAllApplications = async (req, res) => {
  try {
    const applications = readApplications()
    res.json({ success: true, applications })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export { submitApplication, getAllApplications }
