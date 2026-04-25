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
    <div className="m-5">
      <div className="flex flex-col gap-4 m-5">
        <div>
          <img className="bg-primary/80 w-full sm:max-w-64 rounded-lg" src={profileData.image} alt="" />
        </div>

        <div className="flex-1 border border-border rounded-lg p-8 py-7 bg-white">
          <p className="flex items-center gap-2 text-3xl font-medium text-text-dark">{profileData.name}</p>
          <div className="flex items-center gap-2 mt-1 text-text-muted">
            <p>{profileData.degree} - {profileData.speciality}</p>
            <button className="py-0.5 px-2 border text-xs rounded-full">{profileData.experience}</button>
          </div>

          <div className="mt-3">
            <p className="flex items-center gap-1 text-sm font-medium text-text-dark">About:</p>
            <p className="text-sm text-text-muted max-w-[700px] mt-1">{profileData.about}</p>
          </div>

          <p className="text-text-dark font-medium mt-4">
            Appointment fee: <span className="text-text-dark">
              ${isEdit ? <input type="number" className="border rounded px-2 py-1 w-20" onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} value={profileData.fees} /> : profileData.fees}
            </span>
          </p>

          <div className="flex gap-2 py-2 mt-2">
            <p className="font-medium text-sm">Address:</p>
            <p className="text-sm text-text-muted">
              {isEdit ? <input type="text" className="border rounded px-2 py-1" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={profileData.address?.line1} /> : profileData.address?.line1}
              <br />
              {isEdit ? <input type="text" className="border rounded px-2 py-1 mt-1" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={profileData.address?.line2} /> : profileData.address?.line2}
            </p>
          </div>

          <div className="flex gap-1 pt-2">
            <input onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))} checked={profileData.available} type="checkbox" readOnly={!isEdit} />
            <label>Available</label>
          </div>

          {isEdit ? (
            <button onClick={updateProfile} className="px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all cursor-pointer">Save</button>
          ) : (
            <button onClick={() => setIsEdit(true)} className="px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all cursor-pointer">Edit</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile
