import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const handleNav = (path) => {
    navigate(path)
    scrollTo(0, 0)
  }

  return (
    <footer className="md:mx-10 mt-40">
      {/* Main Footer Grid */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 mb-10 text-sm">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="6" fill="#5F6FFF" />
              <path d="M14 6L14 22M8 14L20 14" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="text-xl font-bold text-text-dark">SukritiHealth</span>
          </div>
          <p className="text-text-muted leading-6">
            SukritiHealth is a trusted multi-speciality healthcare platform
            connecting patients with experienced doctors across 10+ departments.
            We offer seamless online appointment booking, personalized care, and
            24/7 medical support — making quality healthcare accessible to everyone.
            Book expert consultations, access secure digital health records, and
            take charge of your well-being today.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-bold mb-4 text-text-dark">Company</p>
          <ul className="flex flex-col gap-2.5 text-text-muted">
            <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => handleNav('/')}>Home</li>
            <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => handleNav('/about')}>About us</li>
            <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => handleNav('/contact')}>Contact us</li>
            <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => handleNav('/careers')}>Careers</li>
            <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => handleNav('/privacy-policy')}>Privacy policy</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-xl font-bold mb-4 text-text-dark">Services</p>
          <ul className="flex flex-col gap-2.5 text-text-muted">
            <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => handleNav('/doctors')}>All Doctors</li>
            <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => handleNav('/doctors/General physician')}>General Physician</li>
            <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => handleNav('/doctors/Gynecologist')}>Gynecologist</li>
            <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => handleNav('/doctors/Dermatologist')}>Dermatologist</li>
            <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => handleNav('/doctors/Pediatricians')}>Pediatricians</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xl font-bold mb-4 text-text-dark">Get In Touch</p>
          <ul className="flex flex-col gap-2.5 text-text-muted">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +1-212-456-7890
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              sukritiHealth@email.com
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Lucknow, Uttar Pradesh
            </li>
          </ul>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-border">
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between text-sm text-text-muted gap-2">
          <p className="flex items-center gap-1.5">
            Developed by <span className="font-medium text-text-dark">Ritesh Pandey</span>
            <a
              href="https://www.linkedin.com/in/ritesh-pandey2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </p>
          <p>Copyright © 2024 SukritiHealth - All Right Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
