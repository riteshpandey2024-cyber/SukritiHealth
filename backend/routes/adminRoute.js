import express from 'express'
import {
  loginAdmin,
  addDoctor,
  allDoctors,
  appointmentsAdmin,
  appointmentCancel,
  adminDashboard,
  allPatients,
} from '../controllers/adminController.js'
import authAdmin from '../middleware/authAdmin.js'
import upload from '../middleware/multer.js'
import { changeAvailability } from '../controllers/doctorController.js'

const adminRouter = express.Router()

adminRouter.post('/login', loginAdmin)
adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor)
adminRouter.post('/all-doctors', authAdmin, allDoctors)
adminRouter.post('/change-availability', authAdmin, changeAvailability)
adminRouter.get('/appointments', authAdmin, appointmentsAdmin)
adminRouter.post('/cancel-appointment', authAdmin, appointmentCancel)
adminRouter.get('/dashboard', authAdmin, adminDashboard)
adminRouter.get('/all-patients', authAdmin, allPatients)

export default adminRouter
