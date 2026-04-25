import { useContext, useEffect } from 'react'
import { DoctorContext } from '../context/DoctorContext'

const DoctorDashboard = () => {
  const { dToken, dashData, getDashData, completeAppointment, cancelAppointment } = useContext(DoctorContext)

  useEffect(() => {
    if (dToken) {
      getDashData()
    }
  }, [dToken])

  return dashData && (
    <div className="m-5">
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-border cursor-pointer hover:scale-105 transition-all">
          <svg className="w-14 text-primary" viewBox="0 0 20 20" fill="currentColor"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/></svg>
          <div>
            <p className="text-xl font-semibold text-text-dark">${dashData.earnings}</p>
            <p className="text-text-muted">Earnings</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-border cursor-pointer hover:scale-105 transition-all">
          <svg className="w-14 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/></svg>
          <div>
            <p className="text-xl font-semibold text-text-dark">{dashData.appointments}</p>
            <p className="text-text-muted">Appointments</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-border cursor-pointer hover:scale-105 transition-all">
          <svg className="w-14 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>
          <div>
            <p className="text-xl font-semibold text-text-dark">{dashData.patients}</p>
            <p className="text-text-muted">Patients</p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border border-border">
          <svg className="w-5 text-text-muted" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/></svg>
          <p className="font-semibold">Latest Appointments</p>
        </div>

        <div className="pt-4 border border-t-0 border-border">
          {dashData.latestAppointments?.map((item, index) => (
            <div className="flex items-center px-6 py-3 gap-3 hover:bg-surface" key={index}>
              <img className="rounded-full w-10" src={item.userData?.image || 'https://via.placeholder.com/40/EEF2FF/5F6FFF?text=P'} alt="" />
              <div className="flex-1 text-sm">
                <p className="text-text-dark font-medium">{item.userData?.name}</p>
                <p className="text-text-muted">Booking on {item.slotDate?.split('_').join('/')}</p>
              </div>
              {item.cancelled ? (
                <p className="text-danger text-xs font-medium">Cancelled</p>
              ) : item.isCompleted ? (
                <p className="text-success text-xs font-medium">Completed</p>
              ) : (
                <div className="flex gap-2">
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
    </div>
  )
}

export default DoctorDashboard
