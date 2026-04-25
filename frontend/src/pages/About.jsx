import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'

const About = () => {
  const navigate = useNavigate()
  const { backendUrl } = useContext(AppContext)
  const [stats, setStats] = useState({ patients: 0, doctors: 0, appointments: 0 })
  const [activeWhy, setActiveWhy] = useState(null) // No default selection

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await axios.get(backendUrl + '/api/user/stats')
        if (data.success) {
          setStats(data.stats)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchStats()
  }, [backendUrl])

  return (
    <div>
      <div className="text-center text-2xl pt-10 text-text-muted">
        <p>
          ABOUT <span className="text-text-dark font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        {/* Left - Image */}
        <div className="w-full md:max-w-[360px]">
          <div className="w-full h-80 bg-primary-light rounded-lg flex items-center justify-center">
            <div className="flex gap-4">
              <div className="w-20 h-32 bg-primary/30 rounded-full"></div>
              <div className="w-20 h-36 bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right - Text */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-text-muted">
          <p>
            Welcome to <span className="font-medium text-text-dark">SukritiHealth</span>, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At SukritiHealth, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments, managing their health records, and
            finding the right specialist at the right time. That's why we built
            a platform that puts patients first — anytime, anywhere.
          </p>
          <p>
            SukritiHealth is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you&apos;re booking your first appointment or managing
            ongoing care, SukritiHealth is here to support you every step of the
            way. Our team of dedicated professionals works around the clock to
            ensure your experience is seamless, secure, and hassle-free.
          </p>
          <b className="text-text-dark">Our Vision</b>
          <p>
            Our vision at SukritiHealth is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it. We envision a future where quality
            healthcare is just a click away — affordable, transparent, and
            patient-centered.
          </p>
          <b className="text-text-dark">Our Mission</b>
          <p>
            To empower individuals to take control of their health by providing
            a reliable, user-friendly platform that connects them with top-rated
            doctors, enables instant appointment booking, and ensures complete
            privacy of medical data. We are driven by the belief that everyone
            deserves access to world-class healthcare, regardless of location.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="my-14">
        <p className="text-center text-text-muted text-sm mb-6">
          Real-time numbers from our platform — every count reflects actual registered users and doctors on SukritiHealth.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '10+', label: 'Medical Departments', desc: 'Specialities available' },
            { number: stats.doctors > 0 ? `${stats.doctors}+` : '30+', label: 'Expert Doctors', desc: 'Verified & registered' },
            { number: stats.patients > 0 ? stats.patients.toLocaleString() : '0', label: 'Registered Patients', desc: 'Signed up on our platform' },
            { number: '24/7', label: 'Support Available', desc: 'Round the clock care' },
          ].map((stat, i) => (
            <div key={i} className="text-center py-6 border border-border rounded-lg hover:shadow-md transition-shadow">
              <p className="text-3xl font-bold text-primary">{stat.number}</p>
              <p className="text-sm font-medium text-text-dark mt-1">{stat.label}</p>
              <p className="text-xs text-text-muted mt-0.5">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-xl my-4">
        <p className="text-text-muted">
          WHY <span className="text-text-dark font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-14 gap-6">
        {[
          {
            title: 'EFFICIENCY:',
            desc: 'Streamlined appointment scheduling that fits into your busy lifestyle. Book appointments in under 60 seconds with real-time slot availability, smart doctor recommendations, and instant confirmation — no phone calls, no waiting in line.'
          },
          {
            title: 'CONVENIENCE:',
            desc: 'Access to a network of trusted healthcare professionals in your area. Browse doctors by speciality, view their credentials, read patient reviews, and choose the perfect match — all from the comfort of your home, available on any device.'
          },
          {
            title: 'PERSONALIZATION:',
            desc: 'Tailored recommendations and reminders to help you stay on top of your health. Get personalized doctor suggestions based on your medical history, receive appointment reminders, and maintain a complete digital health record — all in one place.'
          }
        ].map((item, i) => (
          <div 
            key={i} 
            onClick={() => setActiveWhy(i)}
            className={`border border-border rounded-lg px-8 md:px-12 py-8 sm:py-10 flex flex-col gap-5 text-[15px] transition-all duration-300 cursor-pointer flex-1 ${
              activeWhy === i 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-white text-text-muted hover:bg-primary hover:text-white hover:shadow-md'
            }`}
          >
            <b className={activeWhy === i ? 'text-white' : 'text-text-dark'}>{item.title}</b>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Our Values */}
      <div className="text-xl my-4">
        <p className="text-text-muted">
          OUR <span className="text-text-dark font-semibold">VALUES</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-14">
        {[
          { icon: '🛡️', title: 'Trust & Safety', desc: 'All doctors are verified with valid medical licenses. Your data is protected with enterprise-grade encryption.' },
          { icon: '💡', title: 'Innovation', desc: 'We leverage cutting-edge technology to deliver a faster, smarter, and more intuitive healthcare experience.' },
          { icon: '🤝', title: 'Compassion', desc: 'We treat every patient interaction with empathy, respect, and genuine care — because health is personal.' },
          { icon: '🎯', title: 'Accessibility', desc: 'Quality healthcare should be available to everyone. We keep our consultation fees affordable ($10–$20 range).' },
        ].map((item, i) => (
          <div key={i} className="border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
            <span className="text-3xl">{item.icon}</span>
            <p className="font-semibold text-text-dark mt-3 mb-2">{item.title}</p>
            <p className="text-sm text-text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-primary-light rounded-xl p-10 text-center mb-20">
        <p className="text-xl font-semibold text-text-dark mb-2">Ready to take control of your health?</p>
        <p className="text-sm text-text-muted mb-6">Join thousands of patients who trust SukritiHealth for their healthcare needs.</p>
        <button
          onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
          className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-hover transition-colors text-sm font-medium cursor-pointer"
        >
          Book an Appointment
        </button>
      </div>
    </div>
  )
}

export default About

