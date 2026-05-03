import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const { token, setToken, userData } = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-border">
      {/* Logo */}
      <div
        onClick={() => navigate('/')}
        className="flex items-center gap-2 cursor-pointer"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="28" height="28" rx="6" fill="#5F6FFF" />
          <path
            d="M14 6L14 22M8 14L20 14"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-xl font-bold text-text-dark">SukritiHealth</span>
      </div>

      {/* Nav links - Desktop */}
      <ul className="hidden md:flex items-center gap-8 font-medium">
        <NavLink to="/">
          <li className="py-1 hover:text-primary transition-colors">HOME</li>
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1 hover:text-primary transition-colors">
            ALL DOCTORS
          </li>
        </NavLink>
        <NavLink to="/services">
          <li className="py-1 hover:text-primary transition-colors">
            SERVICES
          </li>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 hover:text-primary transition-colors">ABOUT</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 hover:text-primary transition-colors">
            CONTACT
          </li>
        </NavLink>
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={userData.image}
                alt="profile"
              />
              <svg
                className={`w-3 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="#6B7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {showDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-border py-2 min-w-[180px] z-50">
                <p
                  onClick={() => {
                    navigate('/my-profile')
                    setShowDropdown(false)
                  }}
                  className="px-4 py-2 hover:bg-surface cursor-pointer transition-colors"
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate('/my-appointments')
                    setShowDropdown(false)
                  }}
                  className="px-4 py-2 hover:bg-surface cursor-pointer transition-colors"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => {
                    logout()
                    setShowDropdown(false)
                  }}
                  className="px-4 py-2 hover:bg-surface cursor-pointer transition-colors text-danger"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-8 py-3 rounded-full font-medium hidden md:block hover:bg-primary-hover transition-all cursor-pointer"
          >
            Create account
          </button>
        )}

        {/* Mobile menu icon */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="#1F2937"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <div className="flex items-center gap-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <rect width="28" height="28" rx="6" fill="#5F6FFF" />
                <path
                  d="M14 6L14 22M8 14L20 14"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xl font-bold">SukritiHealth</span>
            </div>
            <button onClick={() => setShowMenu(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="#1F2937"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-center gap-4 mt-10 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              HOME
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              ALL DOCTORS
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/services">
              SERVICES
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              ABOUT
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              CONTACT
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
