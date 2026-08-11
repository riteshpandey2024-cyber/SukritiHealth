import express from 'express'
import { submitApplication, getAllApplications } from '../controllers/careerController.js'
import authAdmin from '../middleware/authAdmin.js'

const careerRouter = express.Router()

// Public — anyone can submit an application
careerRouter.post('/apply', submitApplication)

// Admin-only — view all applications
careerRouter.get('/applications', authAdmin, getAllApplications)

export default careerRouter
