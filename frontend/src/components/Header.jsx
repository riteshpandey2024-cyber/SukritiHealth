import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Book Appointment With Trusted Doctors</h2>
        <p>
          Simply browse through our extensive list of trusted doctors,<br/>
          schedule your appointment hassle-free.
        </p>
        <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}>
          Book appointment
        </button>
      </div>
    </div>
  )
}

export default Header
