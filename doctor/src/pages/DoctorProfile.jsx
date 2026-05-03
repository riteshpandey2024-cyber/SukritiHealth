import { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const DoctorProfile = () => {
  const { dToken, profileData, getProfileData, setProfileData, backendUrl } = useContext(DoctorContext)
  const [isEdit, setIsEdit] = useState(false)

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
      }
      const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, { headers: { dtoken: dToken } })
      if (data.success) {
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (dToken) {
      getProfileData()
    }
  }, [dToken])

  return profileData && (
    <div className="p-6 md:p-12 bg-surface/30 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left Column: Image & Basic Status */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="relative group">
              <img
                className="w-full aspect-square object-cover rounded-3xl shadow-2xl border-4 border-white group-hover:scale-[1.02] transition-transform duration-500"
                src={profileData.image}
                alt="doctor"
              />
              <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-xl font-bold text-xs shadow-lg backdrop-blur-md ${profileData.available ? 'bg-emerald-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
                {profileData.available ? '● AVAILABLE' : '○ UNAVAILABLE'}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-border shadow-xl shadow-gray-200/50">
              <h2 className="text-2xl font-bold text-text-dark">{profileData.name}</h2>
              <p className="text-primary font-semibold mt-1">{profileData.speciality}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-surface text-text-muted text-xs font-bold rounded-lg border border-border uppercase tracking-tight">{profileData.degree}</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-lg border border-primary/20 uppercase tracking-tight">{profileData.experience} EXP</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Info */}
          <div className="flex-1 w-full bg-white rounded-[2.5rem] p-8 md:p-12 border border-border shadow-2xl shadow-gray-200/50">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold text-text-dark flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                Professional Profile
              </h3>
              {isEdit ? (
                <button onClick={updateProfile} className="bg-primary text-white px-8 py-2.5 rounded-2xl font-bold hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all cursor-pointer">Save Changes</button>
              ) : (
                <button onClick={() => setIsEdit(true)} className="border-2 border-primary text-primary px-8 py-2.5 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all cursor-pointer">Edit Profile</button>
              )}
            </div>

            <div className="space-y-8">
              {/* About Section */}
              <section>
                <h4 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-3">About Me</h4>
                <p className="text-text-dark leading-relaxed text-lg italic opacity-90">&ldquo;{profileData.about}&rdquo;</p>
              </section>

              <hr className="border-border/60" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Consultation Fee */}
                <div>
                  <h4 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-3">Consultation Fee</h4>
                  <div className="flex items-center gap-2 text-3xl font-black text-text-dark">
                    <span className="text-primary">$</span>
                    {isEdit ? (
                      <input
                        type="number"
                        className="bg-surface border-2 border-primary/20 rounded-xl px-4 py-2 w-32 focus:border-primary outline-none text-2xl"
                        onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))}
                        value={profileData.fees}
                      />
                    ) : (
                      <span>{profileData.fees}</span>
                    )}
                  </div>
                </div>

                {/* Availability Toggle */}
                <div>
                  <h4 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-3">Availability Status</h4>
                  <div
                    onClick={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))}
                    className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl border-2 transition-all duration-300 ${isEdit ? 'cursor-pointer hover:shadow-md' : 'opacity-80'} ${profileData.available ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-red-50 border-red-200 text-red-500'}`}
                  >
                    <div className={`w-3 h-3 rounded-full animate-pulse ${profileData.available ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                    <span className="font-bold">{profileData.available ? 'I am currently accepting patients' : 'I am currently unavailable'}</span>
                  </div>
                </div>
              </div>

              {/* Address Section */}
              <section className="bg-surface/50 p-6 rounded-3xl border border-border">
                <h4 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Consultation Address
                </h4>
                <div className="space-y-3">
                  {isEdit ? (
                    <>
                      <input
                        type="text"
                        className="bg-white border-2 border-border/60 rounded-xl px-4 py-3 w-full focus:border-primary outline-none transition-all"
                        placeholder="Address Line 1"
                        onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                        value={profileData.address?.line1}
                      />
                      <input
                        type="text"
                        className="bg-white border-2 border-border/60 rounded-xl px-4 py-3 w-full focus:border-primary outline-none transition-all"
                        placeholder="Address Line 2"
                        onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                        value={profileData.address?.line2}
                      />
                    </>
                  ) : (
                    <p className="text-lg text-text-dark font-medium">
                      {profileData.address?.line1}
                      {profileData.address?.line2 && <span className="block text-text-muted text-sm font-normal mt-1">{profileData.address.line2}</span>}
                    </p>
                  )}
                </div>
              </section>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DoctorProfile

