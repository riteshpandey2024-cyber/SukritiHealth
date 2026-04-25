import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const Appointment = () => {
  const { docId } = useParams()
  const navigate = useNavigate()
  const { doctors, currencySymbol, backendUrl, token, getDoctorsData } =
    useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])

    // Getting current date
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      // Getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // Setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      // Setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        )
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })

        let day = currentDate.getDate()
        let month = currentDate.getMonth() + 1
        let year = currentDate.getFullYear()

        const slotDate = day + '_' + month + '_' + year
        const slotTime = formattedTime

        const isSlotAvailable =
          docInfo?.slots_booked?.[slotDate]?.includes(slotTime) !== true

        if (isSlotAvailable) {
          // Add slot to array
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          })
        }

        // Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots((prev) => [...prev, timeSlots])
    }
  }

  const bookAppointment = async () => {
    if (!token) {
      toast.warn('Login to book appointment')
      return
    }

    try {
      const date = docSlots[slotIndex][0].datetime
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()

      const slotDate = day + '_' + month + '_' + year

      const { data } = await axios.post(
        backendUrl + '/api/user/book-appointment',
        { docId, slotDate, slotTime },
        { headers: { token } }
      )

      if (data.success) {
        toast.success(data.message)
        getDoctorsData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots()
    }
  }, [docInfo])

  // Get related doctors
  const relatedDoctors = doctors.filter(
    (doc) => docInfo && doc.speciality === docInfo.speciality && doc._id !== docId
  )

  return docInfo ? (
    <div>
      {/* Doctor Details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>

        <div className="flex-1 border border-border rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          {/* Doc Info */}
          <p className="flex items-center gap-2 text-2xl font-medium text-text-dark">
            {docInfo.name}
            <svg
              className="w-5 text-primary"
              viewBox="0 0 20 20"
              fill="#5F6FFF"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-text-muted">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </button>
          </div>

          {/* Doctor About */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-text-dark mt-3">
              About
              <svg
                className="w-4 text-text-muted"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
            <p className="text-sm text-text-muted max-w-[700px] mt-1">
              {docInfo.about}
            </p>
          </div>
          <p className="text-text-dark font-medium mt-4">
            Appointment fee:{' '}
            <span className="text-text-dark">
              {currencySymbol}
              {docInfo.fees}
            </span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-text-dark">
        <p>Booking slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-auto mt-4">
          {docSlots.length > 0 &&
            docSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index
                    ? 'bg-primary text-white'
                    : 'border border-border'
                }`}
                key={index}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-3 mt-4">
          {docSlots.length > 0 &&
            docSlots[slotIndex]?.map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-light text-center py-2 rounded-full cursor-pointer ${
                  item.time === slotTime
                    ? 'bg-primary text-white'
                    : 'text-text-muted border border-border'
                }`}
                key={index}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>

        <button
          onClick={bookAppointment}
          className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6 hover:bg-primary-hover transition-colors cursor-pointer"
        >
          Book an appointment
        </button>
      </div>

      {/* Related Doctors + Doctor Profile Section */}
      <div className="my-16">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-text-dark">
          <h1 className="text-3xl font-medium">Related Doctors</h1>
          <p className="sm:w-1/3 text-center text-sm text-text-muted">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>

        {/* Layout: Doctor Cards Left + Profile Blocks Right */}
        <div className="flex flex-col lg:flex-row gap-6 mt-8">
          {/* Left: Related Doctor Cards */}
          <div className="lg:w-1/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 h-full">
              {relatedDoctors.slice(0, 3).map((item, index) => (
                <div
                  onClick={() => {
                    navigate(`/appointment/${item._id}`)
                    scrollTo(0, 0)
                  }}
                  className="border border-border rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-5px] transition-all duration-500 flex flex-col h-full"
                  key={index}
                >
                  <div className="bg-primary-light flex-1 flex items-end justify-center pt-6">
                    <img className="w-3/4 max-h-60 object-contain" src={item.image} alt={item.name} />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-success">
                      <span className="w-2 h-2 bg-success rounded-full"></span>
                      <p>Available</p>
                    </div>
                    <p className="text-text-dark text-lg font-medium">{item.name}</p>
                    <p className="text-text-muted text-sm">{item.speciality}</p>
                  </div>
                </div>
              ))}
              {relatedDoctors.length === 0 && (
                <p className="text-text-muted text-sm text-center py-10">No related doctors found.</p>
              )}
            </div>
          </div>

          {/* Right: Education & Achievements */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            {/* Education & Background */}
            <div className="border border-border rounded-xl p-6 bg-white">
              <h3 className="text-lg font-semibold text-text-dark flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.547l1.606.688a3 3 0 002.788 0l1.606-.688v3.547a9.026 9.026 0 00-2.3 1.638 1 1 0 01-1.4 0z" />
                </svg>
                Education Background
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-text-muted font-medium min-w-[100px]">Degree:</span>
                  <span className="text-text-dark">{docInfo.degree}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-text-muted font-medium min-w-[100px]">College:</span>
                  <span className="text-text-dark">{docInfo.college || 'Not specified'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-text-muted font-medium min-w-[100px]">Graduated:</span>
                  <span className="text-text-dark">{docInfo.graduationYear || 'N/A'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-text-muted font-medium min-w-[100px]">Specialist:</span>
                  <span className="text-text-dark">{docInfo.specialistField || docInfo.speciality}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-text-muted font-medium min-w-[100px]">Experience:</span>
                  <span className="text-text-dark">{docInfo.experience}</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="border border-border rounded-xl p-6 bg-white">
              <h3 className="text-lg font-semibold text-text-dark flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Achievements &amp; Recognition
              </h3>
              <div className="flex flex-col sm:flex-row gap-6">
                {docInfo.achievements && docInfo.achievements.length > 0 ? (
                  <ul className="space-y-3 text-sm flex-1">
                    {docInfo.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-text-dark">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-text-muted flex-1">No achievements listed.</p>
                )}

                {/* Quick Stats */}
                <div className="flex sm:flex-col gap-3 sm:w-36">
                  <div className="bg-primary-light rounded-lg p-3 text-center flex-1">
                    <p className="text-lg font-bold text-primary">{docInfo.experience}</p>
                    <p className="text-xs text-text-muted">Experience</p>
                  </div>
                  <div className="bg-primary-light rounded-lg p-3 text-center flex-1">
                    <p className="text-lg font-bold text-primary">{currencySymbol}{docInfo.fees}</p>
                    <p className="text-xs text-text-muted">Consultation Fee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default Appointment
