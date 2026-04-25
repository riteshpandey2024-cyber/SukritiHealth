import { useContext } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { dToken, setDToken } = useContext(DoctorContext)
  const navigate = useNavigate()

  const logout = () => {
    if (dToken) {
      setDToken('')
      localStorage.removeItem('dToken')
      navigate('/')
    }
  }

  return (
    <div className="flex items-center justify-between px-4 sm:px-10 py-3 border-b border-border bg-white">
      <div className="flex items-center gap-2 text-xs">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="6" fill="#5F6FFF" />
            <path d="M14 6L14 22M8 14L20 14" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="text-xl font-bold text-text-dark">SukritiHealth</span>
        </div>
        <span className="border px-2.5 py-0.5 rounded-full border-primary text-primary text-xs">Doctor</span>
      </div>
      <button onClick={logout} className="bg-primary text-white text-sm px-10 py-2 rounded-full hover:bg-primary-hover transition-colors cursor-pointer">Logout</button>
    </div>
  )
}

export default Navbar
