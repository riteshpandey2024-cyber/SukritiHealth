import { useContext, useEffect } from 'react'
import { AdminContext } from '../context/AdminContext'

const Dashboard = () => {
  const { aToken, dashData, getDashData, cancelAppointment } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  return dashData && (
    <div className="m-5">
      {/* Stats */}
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-border cursor-pointer hover:scale-105 transition-all">
          <svg className="w-14 text-primary" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/></svg>
          <div>
            <p className="text-xl font-semibold text-text-dark">{dashData.doctors}</p>
            <p className="text-text-muted">Doctors</p>
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

      {/* Latest Appointments */}
      <div className="bg-white">
        <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border border-border">
          <svg className="w-5 text-text-muted" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/></svg>
          <p className="font-semibold">Latest Appointments</p>
        </div>

        <div className="pt-4 border border-t-0 border-border">
          {dashData.latestAppointments?.map((item, index) => (
            <div className="flex items-center px-6 py-3 gap-3 hover:bg-surface" key={index}>
              <img className="rounded-full w-10" src={item.docData?.image || 'https://via.placeholder.com/40/EEF2FF/5F6FFF?text=D'} alt="" />
              <div className="flex-1 text-sm">
                <p className="text-text-dark font-medium">{item.docData?.name}</p>
                <p className="text-text-muted">Booking on {item.slotDate?.split('_').join('/')}</p>
              </div>
              {!item.cancelled ? (
                <button onClick={() => cancelAppointment(item._id)} className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-100 cursor-pointer">
                  <svg className="w-4 text-danger" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                </button>
              ) : (
                <p className="text-danger text-xs">Cancelled</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
