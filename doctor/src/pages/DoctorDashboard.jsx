import { useContext, useEffect } from 'react'
import { DoctorContext } from '../context/DoctorContext'

const DoctorDashboard = () => {
  const { dToken, dashData, getDashData, completeAppointment, cancelAppointment, profileData } = useContext(DoctorContext)

  useEffect(() => {
    if (dToken) {
      getDashData()
    }
  }, [dToken])

  return dashData && (
    <div className="p-6 md:p-8 bg-surface/30 min-h-screen">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-dark">Dashboard</h1>
        <p className="text-text-muted mt-1">Welcome back! Here&apos;s what&apos;s happening with your practice today.</p>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Earnings Card */}
        <div className="bg-white p-6 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-success text-xs font-bold bg-success/10 px-2 py-1 rounded-full">+12.5%</span>
          </div>
          <p className="text-text-muted text-sm font-medium">Total Earnings</p>
          <h2 className="text-3xl font-bold text-text-dark mt-1">${dashData.earnings}</h2>
        </div>

        {/* Appointments Card */}
        <div className="bg-white p-6 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">Today</span>
          </div>
          <p className="text-text-muted text-sm font-medium">Total Appointments</p>
          <h2 className="text-3xl font-bold text-text-dark mt-1">{dashData.appointments}</h2>
        </div>

        {/* Patients Card */}
        <div className="bg-white p-6 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <p className="text-text-muted text-sm font-medium">Total Unique Patients</p>
          <h2 className="text-3xl font-bold text-text-dark mt-1">{dashData.patients}</h2>
        </div>
      </div>

      {/* Latest Appointments List */}
      <div className="bg-white rounded-3xl border border-border shadow-xl shadow-gray-200/50 overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-border bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-xl border border-border shadow-sm">
              <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-dark">Latest Appointments</h3>
          </div>
          <button className="text-primary hover:text-primary-hover text-sm font-semibold transition-colors">View All</button>
        </div>

        <div className="divide-y divide-border">
          {dashData.latestAppointments?.length > 0 ? (
            dashData.latestAppointments.map((item, index) => (
              <div className="flex flex-col sm:flex-row items-start sm:items-center p-6 gap-4 hover:bg-surface/50 transition-colors group" key={index}>
                <div className="relative">
                  <img className="rounded-2xl w-14 h-14 object-cover border-2 border-white shadow-md" src={item.userData?.image || 'https://via.placeholder.com/60/EEF2FF/5F6FFF?text=P'} alt="" />
                  {!item.cancelled && !item.isCompleted && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white"></span>
                  )}
                </div>
                
                <div className="flex-1">
                  <p className="text-text-dark font-bold text-lg">{item.userData?.name}</p>
                  <div className="flex items-center gap-2 text-text-muted mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">Booking on {item.slotDate?.split('_').join('/')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {item.cancelled ? (
                    <span className="px-4 py-1.5 rounded-full bg-red-50 text-danger text-xs font-bold border border-red-100">Cancelled</span>
                  ) : item.isCompleted ? (
                    <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-500 text-xs font-bold border border-emerald-100">Completed</span>
                  ) : !item.isConfirmed ? (
                    <div className="flex gap-3 ml-auto sm:ml-0">
                      <button 
                        onClick={() => cancelAppointment(item._id)} 
                        title="Decline Appointment"
                        className="w-10 h-10 rounded-xl bg-red-50 text-danger flex items-center justify-center hover:bg-danger hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => acceptAppointment(item._id)} 
                        title="Accept Appointment"
                        className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-3 ml-auto sm:ml-0">
                      <span className="mr-2 px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full border border-primary/20 uppercase tracking-tight self-center">Confirmed</span>
                      <button 
                        onClick={() => cancelAppointment(item._id)} 
                        title="Cancel Appointment"
                        className="w-10 h-10 rounded-xl bg-red-50 text-danger flex items-center justify-center hover:bg-danger hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => completeAppointment(item._id)} 
                        title="Mark as Completed"
                        className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="p-10 text-center">
              <p className="text-text-muted">No appointments found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard

