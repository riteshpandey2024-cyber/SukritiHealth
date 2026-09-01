import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Careers from './pages/Careers'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Admin imports
import { AdminContext } from './context/AdminContext'
import AdminNavbar from './components/AdminNavbar'
import AdminSidebar from './components/AdminSidebar'
import AdminDashboard from './pages/admin/AdminDashboard'
import AllAppointments from './pages/admin/AllAppointments'
import AddDoctor from './pages/admin/AddDoctor'
import DoctorsList from './pages/admin/DoctorsList'
import PatientsList from './pages/admin/PatientsList'

// Doctor imports
import { DoctorContext } from './context/DoctorContext'
import DoctorNavbar from './components/DoctorNavbar'
import DoctorSidebar from './components/DoctorSidebar'
import DoctorDashboard from './pages/doctor/DoctorDashboard'
import DoctorAppointments from './pages/doctor/DoctorAppointments'
import DoctorProfile from './pages/doctor/DoctorProfile'

// Admin Layout wrapper
const AdminLayout = () => {
  const { aToken } = useContext(AdminContext)

  if (!aToken) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="bg-surface">
      <AdminNavbar />
      <div className="flex items-start">
        <AdminSidebar />
        <div className="flex-1">
          <Routes>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="appointments" element={<AllAppointments />} />
            <Route path="add-doctor" element={<AddDoctor />} />
            <Route path="doctors-list" element={<DoctorsList />} />
            <Route path="patients-list" element={<PatientsList />} />
            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

// Doctor Layout wrapper
const DoctorLayout = () => {
  const { dToken } = useContext(DoctorContext)

  if (!dToken) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="bg-surface">
      <DoctorNavbar />
      <div className="flex items-start">
        <DoctorSidebar />
        <div className="flex-1">
          <Routes>
            <Route path="dashboard" element={<DoctorDashboard />} />
            <Route path="appointments" element={<DoctorAppointments />} />
            <Route path="profile" element={<DoctorProfile />} />
            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Admin routes - separate layout (no public navbar/footer) */}
        <Route path="/admin/*" element={<AdminLayout />} />

        {/* Doctor routes - separate layout (no public navbar/footer) */}
        <Route path="/doctor/*" element={<DoctorLayout />} />

        {/* Public / Patient routes - with navbar and footer */}
        <Route
          path="*"
          element={
            <div className="mx-4 sm:mx-[10%]">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/doctors/:speciality" element={<Doctors />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/my-appointments" element={<MyAppointments />} />
                <Route path="/appointment/:docId" element={<Appointment />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              </Routes>
              <Footer />
            </div>
          }
        />
      </Routes>
    </>
  )
}

export default App
