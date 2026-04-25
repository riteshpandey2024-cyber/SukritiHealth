import { useContext } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const { dToken } = useContext(DoctorContext)

  return dToken && (
    <div className="min-h-screen bg-white border-r border-border">
      <ul className="text-text-muted mt-5">
        <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-primary-light border-r-4 border-primary text-primary' : ''}`} to="/doctor-dashboard">
          <svg className="w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
          <p className="hidden md:block">Dashboard</p>
        </NavLink>
        <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-primary-light border-r-4 border-primary text-primary' : ''}`} to="/doctor-appointments">
          <svg className="w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/></svg>
          <p className="hidden md:block">Appointments</p>
        </NavLink>
        <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-primary-light border-r-4 border-primary text-primary' : ''}`} to="/doctor-profile">
          <svg className="w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>
          <p className="hidden md:block">Profile</p>
        </NavLink>
      </ul>
    </div>
  )
}

export default Sidebar
