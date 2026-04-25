import mongoose from 'mongoose'

const connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log('Database Connected')
  })

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/sukritihealth`)
  } catch (error) {
    console.log('Database connection failed:', error.message)
  }
}

export default connectDB
