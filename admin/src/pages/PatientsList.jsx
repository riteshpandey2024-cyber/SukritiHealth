import { useContext, useEffect } from 'react'
import { AdminContext } from '../context/AdminContext'

const PatientsList = () => {
  const { aToken, patients, getAllPatients, appointments, getAllAppointments } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllPatients()
      getAllAppointments()
    }
  }, [aToken])

  const getPatientAppointmentsCount = (patientId) => {
    return appointments.filter(item => item.userId === patientId).length
  }

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Registered Patients</p>

      <div className="bg-white border border-border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-auto">
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_3fr_2fr_1.5fr_1.5fr_2fr] gap-1 py-3 px-6 border-b border-border font-medium bg-surface text-text-muted">
          <p>#</p>
          <p>Patient Name</p>
          <p>Email</p>
          <p>Phone</p>
          <p>Gender</p>
          <p>DOB</p>
          <p>Booked Appointments</p>
        </div>

        {patients.map((item, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_3fr_2fr_1.5fr_1.5fr_2fr] items-center text-text-dark gap-1 py-3.5 px-6 border-b border-border hover:bg-surface transition-colors"
            key={item._id || index}
          >
            <p className="max-sm:hidden text-text-muted">{index + 1}</p>
            <div className="flex items-center gap-3">
              <img
                className="w-9 h-9 rounded-full object-cover border border-border"
                src={item.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name || 'Patient')}&background=EEF2FF&color=5F6FFF`}
                alt=""
              />
              <div>
                <p className="font-semibold text-text-dark">{item.name || 'N/A'}</p>
                <p className="text-xs text-text-muted sm:hidden">{item.email}</p>
              </div>
            </div>
            <p className="max-sm:hidden text-text-dark font-medium">{item.email}</p>
            <p className="text-text-dark">{item.phone || 'N/A'}</p>
            <p className="text-text-dark capitalize">{item.gender || 'N/A'}</p>
            <p className="text-text-dark">{item.dob || 'N/A'}</p>
            <div>
              <span className="bg-primary/10 text-primary font-semibold px-2.5 py-1 rounded-full text-xs">
                {getPatientAppointmentsCount(item._id)} Appointment(s)
              </span>
            </div>
          </div>
        ))}

        {patients.length === 0 && (
          <div className="text-center py-20 text-text-muted">
            <p>No registered patients found.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PatientsList
