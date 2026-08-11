import { createFileBackedModel, mockAppointments, saveAppointmentsToFile } from '../mockDb.js'

const appointmentModel = createFileBackedModel(mockAppointments, saveAppointmentsToFile, 'app_')

export default appointmentModel

