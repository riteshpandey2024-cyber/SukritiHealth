import { useNavigate } from 'react-router-dom'
import { specialityData } from '../assets/assets'

const SpecialityMenu = () => {
  const navigate = useNavigate()

  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-text-dark"
      id="speciality"
    >
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm text-text-muted">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-x-auto pb-2">
        {specialityData.map((item, index) => (
          <div
            onClick={() =>
              navigate(`/doctors/${item.speciality}`)
            }
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <div className="w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-primary-light flex items-center justify-center mb-2 overflow-hidden">
              <img
                className="w-10 sm:w-14 h-10 sm:h-14"
                src={item.image}
                alt={item.speciality}
              />
            </div>
            <p className="text-text-dark font-medium text-center">
              {item.speciality}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
