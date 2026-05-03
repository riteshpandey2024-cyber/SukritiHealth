import { useContext, useEffect } from 'react'
import { DoctorContext } from '../context/DoctorContext'

const DoctorAppointments = () => {
  const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctorContext)

  useEffect(() => {
    if (dToken) {
      getAppointments()
    }
  }, [dToken])

  const calculateAge = (dob) => {
    if (!dob) return 'N/A'
    return new Date().getFullYear() - new Date(dob).getFullYear()
  }

  return (
    <div className="p-6 md:p-8 bg-surface/30 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-dark">All Appointments</h1>
        <p className="text-text-muted mt-1">Manage and track your patient consultations and history.</p>
      </div>

      <div className="bg-white rounded-3xl border border-border shadow-xl shadow-gray-200/50 overflow-hidden">
        {/* Table Header */}
        <div className="max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_0.8fr_2.5fr_1fr_1fr] gap-4 py-5 px-8 bg-gray-50/50 border-b border-border text-xs font-bold text-text-muted uppercase tracking-wider">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p className="text-center">Action</p>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-border max-h-[70vh] overflow-y-auto custom-scrollbar">
          {appointments.length > 0 ? (
            appointments.map((item, index) => (
              <div className="flex flex-col sm:grid sm:grid-cols-[0.5fr_2fr_1fr_0.8fr_2.5fr_1fr_1fr] gap-4 items-start sm:items-center py-6 px-8 hover:bg-surface/50 transition-colors group" key={index}>
                {/* Index */}
                <p className="max-sm:hidden text-text-muted font-medium">{index + 1}</p>
                
                {/* Patient Info */}
                <div className="flex items-center gap-4">
                  <img className="w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-sm" src={item.userData?.image || 'https://via.placeholder.com/48/EEF2FF/5F6FFF?text=P'} alt="" />
                  <p className="text-text-dark font-bold text-lg sm:text-base">{item.userData?.name}</p>
                </div>

                {/* Payment Status */}
                <div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${item.payment ? 'bg-emerald-50 text-emerald-500 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                    {item.payment ? 'Online' : 'CASH'}
                  </span>
                </div>

                {/* Age */}
                <p className="max-sm:hidden text-text-muted font-medium">{calculateAge(item.userData?.dob)}</p>

                {/* Date & Time */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-text-dark font-semibold">
                    <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{item.slotDate?.split('_').join('/')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-muted text-xs font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item.slotTime}</span>
                  </div>
                </div>

                {/* Fees */}
                <p className="text-xl sm:text-lg font-bold text-primary">${item.amount}</p>

                {/* Actions */}
                <div className="flex items-center justify-center w-full sm:w-auto">
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
            <div className="p-20 text-center">
              <p className="text-text-muted text-lg">No appointments scheduled.</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E5E7EB;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D1D5DB;
        }
      `}</style>
    </div>
  )
}

export default DoctorAppointments

