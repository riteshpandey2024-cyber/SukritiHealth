import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <div className="flex -space-x-3">
            <div className="w-8 h-8 rounded-full bg-white/30 border-2 border-white/50 flex items-center justify-center text-xs">
              👨‍⚕️
            </div>
            <div className="w-8 h-8 rounded-full bg-white/30 border-2 border-white/50 flex items-center justify-center text-xs">
              👩‍⚕️
            </div>
            <div className="w-8 h-8 rounded-full bg-white/30 border-2 border-white/50 flex items-center justify-center text-xs">
              👨‍⚕️
            </div>
          </div>
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" /> schedule your appointment
            hassle-free.
          </p>
        </div>

        <button
          onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-text-dark text-sm font-medium hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Book appointment
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M1 6h10M7 2l4 4-4 4"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 relative">
        <div className="flex items-end justify-center h-full pt-10">
          <div className="flex items-end gap-2">
            {/* Doctor illustrations */}
            <div className="w-20 h-32 bg-white/20 rounded-t-full hidden lg:block"></div>
            <div className="w-28 h-48 bg-white/20 rounded-t-full"></div>
            <div className="w-24 h-40 bg-white/20 rounded-t-full hidden sm:block"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
