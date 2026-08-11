import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AdminContext } from './context/AdminContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AllAppointments from './pages/AllAppointments'
import AddDoctor from './pages/AddDoctor'
import DoctorsList from './pages/DoctorsList'
import PatientsList from './pages/PatientsList'

const App = () => {
  const { aToken } = useContext(AdminContext)

  return aToken ? (
    <div className="bg-surface">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/all-appointments" element={<AllAppointments />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/patients-list" element={<PatientsList />} />
          <Route path="/doctor-list" element={<DoctorsList />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App
