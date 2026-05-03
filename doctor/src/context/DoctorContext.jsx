import { createContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  // Check for token in URL (Auto-login from main site)
  const urlParams = new URLSearchParams(window.location.search)
  const tokenFromUrl = urlParams.get('token')
  if (tokenFromUrl) {
    localStorage.setItem('dToken', tokenFromUrl)
    // Remove token from URL for clean look
    window.history.replaceState({}, document.title, window.location.pathname)
  }

  const [dToken, setDToken] = useState(tokenFromUrl || localStorage.getItem('dToken') || '')
  const [appointments, setAppointments] = useState([])
  const [dashData, setDashData] = useState(false)
  const [profileData, setProfileData] = useState(false)

  const getAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/doctor/appointments', { headers: { dtoken: dToken } })
      if (data.success) {
        setAppointments(data.appointments.reverse())
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const completeAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/doctor/complete-appointment', { appointmentId }, { headers: { dtoken: dToken } })
      if (data.success) {
        toast.success(data.message)
        getAppointments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/doctor/cancel-appointment', { appointmentId }, { headers: { dtoken: dToken } })
      if (data.success) {
        toast.success(data.message)
        getAppointments()
        getDashData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const acceptAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/doctor/accept-appointment', { appointmentId }, { headers: { dtoken: dToken } })
      if (data.success) {
        toast.success(data.message)
        getAppointments()
        getDashData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getDashData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/doctor/dashboard', { headers: { dtoken: dToken } })
      if (data.success) {
        setDashData(data.dashData)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/doctor/profile', { headers: { dtoken: dToken } })
      if (data.success) {
        setProfileData(data.profileData)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const changeAvailability = async () => {
    try {
      const { data } = await axios.post(backendUrl + '/api/doctor/change-availability', {}, { headers: { dtoken: dToken } })
      if (data.success) {
        toast.success(data.message)
        getProfileData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const value = {
    dToken, setDToken, backendUrl,
    appointments, setAppointments, getAppointments,
    completeAppointment, cancelAppointment, acceptAppointment,
    dashData, setDashData, getDashData,
    profileData, setProfileData, getProfileData, changeAvailability,
  }

  return <DoctorContext.Provider value={value}>{props.children}</DoctorContext.Provider>
}

export default DoctorContextProvider
