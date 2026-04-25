import { useContext, useEffect } from 'react'
import { AdminContext } from '../context/AdminContext'

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div className="m-5 max-h-[90vh] overflow-y-auto">
      <h1 className="text-lg font-medium">All Doctors</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {doctors.map((item, index) => (
          <div className="border border-border rounded-xl max-w-56 overflow-hidden cursor-pointer group" key={index}>
            <img className="bg-primary-light group-hover:bg-primary transition-all duration-500 w-56 h-56 object-cover" src={item.image} alt={item.name} />
            <div className="p-4">
              <p className="text-text-dark font-medium text-lg">{item.name}</p>
              <p className="text-text-muted text-sm">{item.speciality}</p>
              <div className="mt-2 flex items-center gap-1 text-sm">
                <input onChange={() => changeAvailability(item._id)} type="checkbox" checked={item.available} readOnly />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsList
