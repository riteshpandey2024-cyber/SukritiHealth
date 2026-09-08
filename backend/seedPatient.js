import mongoose from "mongoose"
import bcrypt from "bcrypt"
import "dotenv/config"

await mongoose.connect(`${process.env.MONGODB_URI}/sukritihealth`)
console.log("✅ Connected to MongoDB")

const userSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image:    { type: String, default: "" },
  address:  { type: Object, default: { line1: "", line2: "" } },
  gender:   { type: String, default: "Not Selected" },
  dob:      { type: String, default: "" },
  phone:    { type: String, default: "" },
}, { minimize: false })

const User = mongoose.models.user || mongoose.model("user", userSchema)

const hashedPassword = await bcrypt.hash(process.env.DEFAULT_PATIENT_PASSWORD, 10)

const result = await User.updateOne(
  { email: process.env.DEFAULT_PATIENT_EMAIL },
  { $setOnInsert: {
      name:     process.env.DEFAULT_PATIENT_NAME,
      email:    process.env.DEFAULT_PATIENT_EMAIL,
      password: hashedPassword,
      image:    "https://ui-avatars.com/api/?name=Ritesh+Pandey&background=EEF2FF&color=5F6FFF&size=200",
      address:  { line1: "MG Road, Bangalore", line2: "Karnataka, India" },
      gender:   "Male",
      dob:      "2003-08-15",
      phone:    "9876543210",
  }},
  { upsert: true }
)

if (result.upsertedCount > 0) {
  console.log("✅ Default patient created!")
} else {
  console.log("⚠️  Patient already exists - skipped")
}

console.log('══════════════════════════════════════')
console.log('👤  PATIENT LOGIN CREDENTIALS')
console.log('══════════════════════════════════════')
console.log('    URL      : http://localhost:5173')
console.log(`    Email    : ${process.env.DEFAULT_PATIENT_EMAIL}`)
console.log(`    Password : ${process.env.DEFAULT_PATIENT_PASSWORD}`)
console.log('══════════════════════════════════════')

await mongoose.disconnect()
process.exit(0)
