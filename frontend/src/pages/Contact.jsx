import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ContactImg from '../assets/Contact.png'

const Contact = () => {
  const navigate = useNavigate()
  const [activeContact, setActiveContact] = useState(false)

  return (
    <div>
      <div className="text-center text-2xl pt-10 text-text-muted">
        <p>
          CONTACT <span className="text-text-dark font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <div className="w-full md:max-w-90">
          <div 
            onClick={() => setActiveContact(!activeContact)}
            className={`w-full h-80 rounded-3xl flex items-center justify-center overflow-visible transition-all duration-300 cursor-pointer group relative p-4
              ${activeContact 
                ? 'shadow-2xl border-4 border-primary scale-105 bg-primary/10' 
                : 'shadow-lg hover:shadow-2xl hover:scale-102 hover:border-4 hover:border-primary/50 bg-surface border-2 border-transparent'
              }
            `}
          >
            {/* Hover Background Light Effect */}
            <div className={`absolute inset-0 bg-primary/5 transition-opacity duration-300 pointer-events-none rounded-2xl
              ${activeContact ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
            `}></div>

            {/* Image Wrapper with Padding */}
            <div className="relative z-10 rounded-2xl overflow-hidden bg-surface w-full h-full">
              <img
                src={ContactImg}
                alt="Contact"
                className="w-full h-full object-contain bg-surface transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Shine Effect on Hover */}
            <div className={`absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transition-all duration-500 pointer-events-none rounded-2xl
              ${activeContact ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}
            `} style={{
              transform: 'translateX(-100%)',
              animation: activeContact ? 'shimmer 2s infinite' : 'none'
            }}></div>

            {/* Click Indicator Badge */}
            {activeContact && (
              <div className="absolute top-6 right-6 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20 animate-pulse">
                Selected
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-text-dark">OUR OFFICE</p>
          <p className="text-text-muted">54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className="text-text-muted">Tel: (415) 555-0132 <br /> Email: sukritihealth@email.com</p>
          <p className="font-semibold text-lg text-text-dark">CAREERS AT SUKRITIHEALTH</p>
          <p className="text-text-muted">Learn more about our teams and job openings.</p>
          <button
            onClick={() => { navigate('/careers'); scrollTo(0, 0) }}
            className="border border-text-dark px-8 py-4 text-sm hover:bg-text-dark hover:text-white transition-all duration-500 cursor-pointer rounded-full"
          >
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Shimmer Animation Keyframes */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}

export default Contact
