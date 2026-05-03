import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext)
  const [appointments, setAppointments] = useState([])
  const [paymentModal, setPaymentModal] = useState(null)

  const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + ' ' + months[Number(dateArray[1])] + ' ' + dateArray[2]
  }

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
      if (data.success) {
        setAppointments(data.appointments.reverse())
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handlePayment = (gateway) => {
    toast.info(`Initiating payment via ${gateway}...`)
    // Here you would integrate the actual payment gateway SDK
    setTimeout(() => {
      toast.success(`Payment successful via ${gateway}! (Mocked)`)
      setPaymentModal(null)
      getUserAppointments()
    }, 1500)
  }

  useEffect(() => {
    if (token) {
      getUserAppointments()
    }
  }, [token])

  return (
    <div className="relative min-h-[60vh]">
      <p className="pb-3 mt-12 font-medium text-text-dark border-b border-border text-xl">My Appointments</p>
      <div className="mt-6 flex flex-col gap-4">
        {appointments.map((item, index) => (
          <div className="grid grid-cols-[1fr_2fr_1fr] gap-4 sm:flex sm:gap-6 p-6 border border-border shadow-sm rounded-2xl bg-white hover:shadow-md transition-shadow" key={index}>
            <div>
              <img className="w-32 h-32 object-cover bg-primary-light rounded-xl" src={item.docData.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-text-muted flex flex-col justify-center">
              <p className="text-text-dark font-semibold text-lg">{item.docData.name}</p>
              <p className="text-primary font-medium mb-2">{item.docData.speciality}</p>
              <p className="text-text-dark font-medium mt-1">Address:</p>
              <p className="text-xs">{item.docData.address?.line1}</p>
              <p className="text-xs">{item.docData.address?.line2}</p>
              <p className="text-sm mt-2 font-medium bg-surface inline-block px-3 py-1.5 rounded-lg w-fit text-text-dark">
                <span className="text-text-muted">Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-end items-end sm:min-w-48">
              {!item.cancelled && item.payment && !item.isCompleted && (
                <button className="w-full py-2.5 border rounded-lg text-white bg-success font-medium cursor-default shadow-sm shadow-success/20">Paid Successfully</button>
              )}
              {!item.cancelled && !item.payment && !item.isCompleted && (
                <button onClick={() => setPaymentModal(item)} className="w-full text-sm font-medium text-white text-center py-2.5 border border-primary rounded-lg bg-primary hover:bg-primary-hover transition-all duration-300 shadow-md shadow-primary/20 cursor-pointer">Pay Here</button>
              )}
              {!item.cancelled && !item.isCompleted && (
                <button onClick={() => cancelAppointment(item._id)} className="w-full text-sm font-medium text-text-muted text-center py-2.5 border border-border rounded-lg hover:border-danger hover:text-danger hover:bg-danger/5 transition-all duration-300 cursor-pointer">Cancel Appointment</button>
              )}
              {item.cancelled && !item.isCompleted && (
                <button className="w-full py-2.5 border border-danger rounded-lg text-danger font-medium bg-danger/5 cursor-default">Appointment Cancelled</button>
              )}
              {item.isCompleted && (
                <button className="w-full py-2.5 border border-success rounded-lg text-success font-medium bg-success/5 cursor-default">Appointment Completed</button>
              )}
            </div>
          </div>
        ))}
        {appointments.length === 0 && (
          <div className="text-center py-20 text-text-muted">
            <p>You have no appointments booked yet.</p>
          </div>
        )}
      </div>

      {/* Payment Modal Overlay */}
      {paymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
            <div className="bg-primary p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Select Payment Method</h3>
                <p className="text-white/80 text-sm mt-1">Complete your payment to confirm the appointment.</p>
              </div>
              <button onClick={() => setPaymentModal(null)} className="text-white/80 hover:text-white transition-colors cursor-pointer p-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-6 p-4 bg-surface rounded-xl border border-border">
                <div className="flex items-center gap-4">
                  <img src={paymentModal.docData.image} alt="doc" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-text-dark">{paymentModal.docData.name}</p>
                    <p className="text-xs text-text-muted">{slotDateFormat(paymentModal.slotDate)} | {paymentModal.slotTime}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-text-muted">Total Due</p>
                  <p className="text-xl font-bold text-primary">${paymentModal.docData.fees}</p>
                </div>
              </div>

              <div className="space-y-3">
                {/* Stripe */}
                <button onClick={() => handlePayment('Stripe')} className="w-full flex items-center justify-between p-4 border border-border rounded-xl hover:border-[#635BFF] hover:shadow-md transition-all group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#635BFF]/10 flex items-center justify-center text-[#635BFF]">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.996 0C5.371 0 0 5.37 0 11.996s5.371 11.996 11.996 11.996c6.626 0 11.996-5.37 11.996-11.996S18.622 0 11.996 0zm-1.895 18.065V15.02c-2.316.48-3.045-1.127-3.045-1.127-.58-1.472-1.413-1.865-1.413-1.865-1.155-.79.088-.774.088-.774 1.278.09 1.95 1.31 1.95 1.31 1.135 1.944 2.977 1.382 3.7.1.115-.823.445-1.383.81-1.7-2.366-.27-4.854-1.184-4.854-5.265 0-1.163.415-2.115 1.097-2.86-.11-.27-.476-1.353.104-2.82 0 0 .895-.286 2.93 1.09A10.2 10.2 0 0112 3.86a10.2 10.2 0 012.662.358c2.033-1.376 2.926-1.09 2.926-1.09.582 1.467.216 2.55.106 2.82.684.745 1.096 1.697 1.096 2.86 0 4.093-2.49 4.99-4.866 5.255.457.394.864 1.173.864 2.364v3.51c0 .324.23.704.872.585A12.012 12.012 0 0024 11.996C24 5.37 18.626 0 11.996 0z"/></svg>
                    </div>
                    <span className="font-semibold text-text-dark group-hover:text-[#635BFF] transition-colors">Stripe</span>
                  </div>
                  <svg className="w-5 h-5 text-text-muted group-hover:text-[#635BFF] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Razorpay */}
                <button onClick={() => handlePayment('Razorpay')} className="w-full flex items-center justify-between p-4 border border-border rounded-xl hover:border-[#3395FF] hover:shadow-md transition-all group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3395FF]/10 flex items-center justify-center text-[#3395FF]">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14v-4H8l4-7v5h3l-4 6z"/></svg>
                    </div>
                    <span className="font-semibold text-text-dark group-hover:text-[#3395FF] transition-colors">Razorpay</span>
                  </div>
                  <svg className="w-5 h-5 text-text-muted group-hover:text-[#3395FF] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* PhonePe */}
                <button onClick={() => handlePayment('PhonePe')} className="w-full flex items-center justify-between p-4 border border-border rounded-xl hover:border-[#5f259f] hover:shadow-md transition-all group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#5f259f]/10 flex items-center justify-center text-[#5f259f] font-bold italic">
                      Pe
                    </div>
                    <span className="font-semibold text-text-dark group-hover:text-[#5f259f] transition-colors">PhonePe</span>
                  </div>
                  <svg className="w-5 h-5 text-text-muted group-hover:text-[#5f259f] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Paytm */}
                <button onClick={() => handlePayment('Paytm')} className="w-full flex items-center justify-between p-4 border border-border rounded-xl hover:border-[#00b9f5] hover:shadow-md transition-all group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00b9f5]/10 flex items-center justify-center text-[#00b9f5] font-bold text-sm">
                      Paytm
                    </div>
                    <span className="font-semibold text-text-dark group-hover:text-[#00b9f5] transition-colors">Paytm</span>
                  </div>
                  <svg className="w-5 h-5 text-text-muted group-hover:text-[#00b9f5] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Google Pay */}
                <button onClick={() => handlePayment('Google Pay')} className="w-full flex items-center justify-between p-4 border border-border rounded-xl hover:border-gray-800 hover:shadow-md transition-all group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-800">
                      G
                    </div>
                    <span className="font-semibold text-text-dark group-hover:text-gray-800 transition-colors">Google Pay</span>
                  </div>
                  <svg className="w-5 h-5 text-text-muted group-hover:text-gray-800 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tailwind Animation for Modal */}
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  )
}

export default MyAppointments
