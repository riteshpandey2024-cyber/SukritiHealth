import { useContext, useEffect } from 'react'
import { DoctorContext } from '../context/DoctorContext'

const DoctorAppointments = () => {
  const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctorContext)

  useEffect(() => {
    if (dToken) {
      getAppointments()
    }
  }, [dToken])

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>

      <div className="bg-white border border-border rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-auto">
        <div className="max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b border-border">
          <p className="text-text-muted">#</p>
          <p className="text-text-muted">Patient</p>
          <p className="text-text-muted">Payment</p>
          <p className="text-text-muted">Age</p>
          <p className="text-text-muted">Date & Time</p>
          <p className="text-text-muted">Fees</p>
          <p className="text-text-muted">Action</p>
        </div>

        {appointments.map((item, index) => (
          <div className="flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid sm:grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-text-dark py-3 px-6 border-b border-border hover:bg-surface" key={index}>
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center gap-2">
              <img className="w-8 rounded-full" src={item.userData?.image || 'https://via.placeholder.com/32/EEF2FF/5F6FFF?text=P'} alt="" />
              <p>{item.userData?.name}</p>
            </div>
            <div>
              <span className={`text-xs border px-2 py-0.5 rounded-full ${item.payment ? 'border-success text-success' : 'border-danger text-danger'}`}>
                {item.payment ? 'Online' : 'CASH'}
              </span>
            </div>
            <p className="max-sm:hidden">{item.userData?.dob ? new Date().getFullYear() - new Date(item.userData.dob).getFullYear() : 'N/A'}</p>
            <p>{item.slotDate?.split('_').join('/')} , {item.slotTime}</p>
            <p>${item.amount}</p>
            {item.cancelled ? (
              <p className="text-danger text-xs font-medium">Cancelled</p>
            ) : item.isCompleted ? (
              <p className="text-success text-xs font-medium">Completed</p>
            ) : (
              <div className="flex gap-1">
                <button onClick={() => cancelAppointment(item._id)} className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-100 cursor-pointer">
                  <svg className="w-4 text-danger" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                </button>
                <button onClick={() => completeAppointment(item._id)} className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100 cursor-pointer">
                  <svg className="w-4 text-success" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorAppointments
