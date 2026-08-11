import { createFileBackedModel, mockUsers } from '../mockDb.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PATIENTS_FILE = path.join(__dirname, '..', 'data', 'patients.json')

const savePatientsToFile = (patients) => {
  fs.writeFileSync(PATIENTS_FILE, JSON.stringify(patients, null, 2), 'utf-8')
}

const userModel = createFileBackedModel(mockUsers, savePatientsToFile)

export default userModel
