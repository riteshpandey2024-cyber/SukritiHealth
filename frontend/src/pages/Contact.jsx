import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="text-center text-2xl pt-10 text-text-muted">
        <p>
          CONTACT <span className="text-text-dark font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <div className="w-full md:max-w-[360px]">
          <div className="w-full h-80 bg-primary-light rounded-lg flex items-center justify-center">
            <div className="flex items-end gap-3">
              <div className="w-16 h-24 bg-primary/30 rounded-t-full"></div>
              <div className="w-12 h-20 bg-primary/20 rounded-t-full"></div>
            </div>
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
            className="border border-text-dark px-8 py-4 text-sm hover:bg-text-dark hover:text-white transition-all duration-500 cursor-pointer"
          >
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
