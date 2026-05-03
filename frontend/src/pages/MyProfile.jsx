import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext)
  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(false)

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData()
      formData.append('name', userData.name)
      formData.append('phone', userData.phone)
      formData.append('address', JSON.stringify(userData.address))
      formData.append('gender', userData.gender)
      formData.append('dob', userData.dob)
      if (image) formData.append('image', image)

      const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return userData && (
    <div className="max-w-4xl mx-auto my-10 flex flex-col md:flex-row gap-8">
      {/* Left Column: Avatar & Name */}
      <div className="flex-1 bg-white border border-border shadow-xl shadow-blue-500/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 h-fit">
        {isEdit ? (
          <label htmlFor="image">
            <div className="inline-block relative cursor-pointer group">
              <img className="w-40 h-40 object-cover rounded-full shadow-md group-hover:brightness-75 transition-all" src={image ? URL.createObjectURL(image) : userData.image} alt="" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-primary/90 text-white text-sm font-medium px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                  Change Photo
                </span>
              </div>
            </div>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
          </label>
        ) : (
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-full blur opacity-25"></div>
            <img className="relative w-40 h-40 object-cover rounded-full shadow-lg border-4 border-white" src={userData.image} alt="" />
          </div>
        )}

        {isEdit ? (
          <input className="bg-surface text-2xl font-semibold text-center mt-6 p-2 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none w-full transition-all" type="text" value={userData.name} onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))} />
        ) : (
          <h2 className="font-semibold text-3xl text-text-dark mt-6">{userData.name}</h2>
        )}
        <p className="text-primary font-medium mt-1">Patient</p>

        <div className="mt-8 w-full">
          {isEdit ? (
            <button className="bg-primary text-white w-full py-3 rounded-full text-sm font-medium shadow-md shadow-primary/30 hover:bg-primary-hover hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer" onClick={updateUserProfileData}>
              Save Profile
            </button>
          ) : (
            <button className="border-2 border-primary text-primary bg-white w-full py-3 rounded-full text-sm font-medium hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer" onClick={() => setIsEdit(true)}>
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Right Column: Information */}
      <div className="flex-[2] bg-white border border-border shadow-xl shadow-gray-200/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/80">
        
        {/* Contact Information */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-dark">Contact Information</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-y-4 gap-x-6 text-sm bg-surface/50 rounded-2xl p-6 border border-border/50">
            <div className="font-medium text-text-muted flex items-center">Email address</div>
            <div className="text-text-dark font-medium">{userData.email}</div>
            
            <div className="font-medium text-text-muted flex items-center">Phone number</div>
            <div>
              {isEdit ? (
                <input className="bg-white border border-border rounded-lg w-full p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" type="text" value={userData.phone} onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))} />
              ) : (
                <span className="text-text-dark">{userData.phone}</span>
              )}
            </div>
            
            <div className="font-medium text-text-muted mt-2">Home address</div>
            <div>
              {isEdit ? (
                <div className="space-y-2">
                  <input className="bg-white border border-border rounded-lg w-full p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" value={userData.address.line1} onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} type="text" placeholder="Line 1" />
                  <input className="bg-white border border-border rounded-lg w-full p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" value={userData.address.line2} onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} type="text" placeholder="Line 2" />
                </div>
              ) : (
                <span className="text-text-dark block leading-relaxed">{userData.address.line1}{userData.address.line2 && <><br />{userData.address.line2}</>}</span>
              )}
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-dark">Basic Information</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-y-4 gap-x-6 text-sm bg-surface/50 rounded-2xl p-6 border border-border/50">
            <div className="font-medium text-text-muted flex items-center">Gender</div>
            <div>
              {isEdit ? (
                <select className="bg-white border border-border rounded-lg w-full p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer" onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                  <option value="Not Selected">Not Selected</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <span className="text-text-dark capitalize">{userData.gender}</span>
              )}
            </div>
            
            <div className="font-medium text-text-muted flex items-center">Date of Birth</div>
            <div>
              {isEdit ? (
                <input className="bg-white border border-border rounded-lg w-full p-2.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-text-dark cursor-text" type="date" onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
              ) : (
                <span className="text-text-dark">{userData.dob}</span>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MyProfile
