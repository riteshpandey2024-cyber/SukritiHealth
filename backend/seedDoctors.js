import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import 'dotenv/config'

// Connect to MongoDB
await mongoose.connect(`${process.env.MONGODB_URI}/sukritihealth`)
console.log('✅ Connected to MongoDB')

// Define doctor schema inline (same as doctorModel)
const doctorSchema = new mongoose.Schema({
  name:         { type: String, required: true },
  email:        { type: String, required: true, unique: true },
  password:     { type: String, required: true },
  image:        { type: String, required: true },
  speciality:   { type: String, required: true },
  degree:       { type: String, required: true },
  experience:   { type: String, required: true },
  about:        { type: String, required: true },
  available:    { type: Boolean, default: true },
  fees:         { type: Number, required: true },
  address:      { type: Object, required: true },
  date:         { type: Number, required: true },
  slots_booked: { type: Object, default: {} },
}, { minimize: false })

const Doctor = mongoose.models.doctor || mongoose.model('doctor', doctorSchema)

const defaultPassword = await bcrypt.hash('SukritiHealth@2026', 10)

const doctors = [
  {
    name: 'Dr. Richard James',
    email: 'richard@sukritihealth.com',
    password: defaultPassword,
    image: 'https://ui-avatars.com/api/?name=Richard+James&background=EEF2FF&color=5F6FFF&size=200',
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Richard James has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 15,
    available: true,
    address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' },
    date: Date.now(),
    slots_booked: {},
  },
  {
    name: 'Dr. Emily Larson',
    email: 'emily@sukritihealth.com',
    password: defaultPassword,
    image: 'https://ui-avatars.com/api/?name=Emily+Larson&background=FECDD3&color=F472B6&size=200',
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Emily Larson has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 18,
    available: true,
    address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' },
    date: Date.now(),
    slots_booked: {},
  },
  {
    name: 'Dr. Sarah Patel',
    email: 'sarah@sukritihealth.com',
    password: defaultPassword,
    image: 'https://ui-avatars.com/api/?name=Sarah+Patel&background=EEF2FF&color=A78BFA&size=200',
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Year',
    about: 'Dr. Sarah Patel has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 12,
    available: true,
    address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' },
    date: Date.now(),
    slots_booked: {},
  },
  {
    name: 'Dr. Christopher Lee',
    email: 'christopher@sukritihealth.com',
    password: defaultPassword,
    image: 'https://ui-avatars.com/api/?name=Christopher+Lee&background=EEF2FF&color=60A5FA&size=200',
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about: 'Dr. Christopher Lee has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 14,
    available: true,
    address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' },
    date: Date.now(),
    slots_booked: {},
  },
  {
    name: 'Dr. Jennifer Garcia',
    email: 'jennifer@sukritihealth.com',
    password: defaultPassword,
    image: 'https://ui-avatars.com/api/?name=Jennifer+Garcia&background=FECDD3&color=818CF8&size=200',
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Jennifer Garcia has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 20,
    available: true,
    address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' },
    date: Date.now(),
    slots_booked: {},
  },
  {
    name: 'Dr. Andrew Williams',
    email: 'andrew@sukritihealth.com',
    password: defaultPassword,
    image: 'https://ui-avatars.com/api/?name=Andrew+Williams&background=EEF2FF&color=34D399&size=200',
    speciality: 'Gastroenterologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Andrew Williams has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 16,
    available: true,
    address: { line1: '67th Cross, Richmond', line2: 'Circle, Ring Road, London' },
    date: Date.now(),
    slots_booked: {},
  },
  {
    name: 'Dr. Christopher Davis',
    email: 'davis@sukritihealth.com',
    password: defaultPassword,
    image: 'https://ui-avatars.com/api/?name=Christopher+Davis&background=EEF2FF&color=5F6FFF&size=200',
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Christopher Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 13,
    available: true,
    address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' },
    date: Date.now(),
    slots_booked: {},
  },
  {
    name: 'Dr. Timothy White',
    email: 'timothy@sukritihealth.com',
    password: defaultPassword,
    image: 'https://ui-avatars.com/api/?name=Timothy+White&background=EEF2FF&color=F472B6&size=200',
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Timothy White has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 19,
    available: true,
    address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' },
    date: Date.now(),
    slots_booked: {},
  },
  {
    name: 'Dr. Ava Mitchell',
    email: 'ava@sukritihealth.com',
    password: defaultPassword,
    image: 'https://ui-avatars.com/api/?name=Ava+Mitchell&background=FECDD3&color=A78BFA&size=200',
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Year',
    about: 'Dr. Ava Mitchell has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 10,
    available: true,
    address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' },
    date: Date.now(),
    slots_booked: {},
  },
  {
    name: 'Dr. Jeffrey King',
    email: 'jeffrey@sukritihealth.com',
    password: defaultPassword,
    image: 'https://ui-avatars.com/api/?name=Jeffrey+King&background=EEF2FF&color=60A5FA&size=200',
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about: 'Dr. Jeffrey King has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 17,
    available: true,
    address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' },
    date: Date.now(),
    slots_booked: {},
  },
]

// Clear existing doctors and insert fresh
await Doctor.deleteMany({})
console.log('🗑️  Cleared existing doctors')

const inserted = await Doctor.insertMany(doctors)
console.log(`✅ Seeded ${inserted.length} doctors into MongoDB`)

// Print their IDs for reference
inserted.forEach(doc => {
  console.log(`   ${doc.name} → ${doc._id}`)
})

await mongoose.disconnect()
console.log('✅ Done! Disconnect from MongoDB')
process.exit(0)
