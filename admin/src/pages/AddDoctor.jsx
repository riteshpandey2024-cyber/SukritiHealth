import { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [speciality, setSpeciality] = useState('General physician')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  const { backendUrl, aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (!docImg) {
        return toast.error('Image Not Selected')
      }
      const formData = new FormData()
      formData.append('image', docImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('about', about)
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

      const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })

      if (data.success) {
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setEmail('')
        setPassword('')
        setAbout('')
        setFees('')
        setDegree('')
        setAddress1('')
        setAddress2('')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      <div className="bg-white px-8 py-8 border border-border rounded w-full max-w-4xl max-h-[80vh] overflow-y-auto">
        <div className="flex items-center gap-4 mb-8 text-text-muted">
          <label htmlFor="doc-img" className="cursor-pointer">
            {docImg ? (
              <img className="w-16 h-16 rounded-full object-cover bg-surface" src={URL.createObjectURL(docImg)} alt="" />
            ) : (
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center">
                <svg className="w-8 text-text-muted" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>
              </div>
            )}
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
          <p>Upload doctor <br /> picture</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-text-muted">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor name</p>
              <input className="border rounded px-3 py-2" type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <input className="border rounded px-3 py-2" type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Password</p>
              <input className="border rounded px-3 py-2" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select className="border rounded px-3 py-2" onChange={(e) => setExperience(e.target.value)} value={experience}>
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
                <option value="5 Years">5 Years</option>
                <option value="6 Years">6 Years</option>
                <option value="7 Years">7 Years</option>
                <option value="8 Years">8 Years</option>
                <option value="9 Years">9 Years</option>
                <option value="10 Years">10 Years</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input className="border rounded px-3 py-2" type="number" onChange={(e) => setFees(e.target.value)} value={fees} placeholder="Fees" required />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select className="border rounded px-3 py-2" onChange={(e) => setSpeciality(e.target.value)} value={speciality}>
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input className="border rounded px-3 py-2" type="text" onChange={(e) => setDegree(e.target.value)} value={degree} placeholder="Education" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input className="border rounded px-3 py-2" type="text" onChange={(e) => setAddress1(e.target.value)} value={address1} placeholder="Address 1" required />
              <input className="border rounded px-3 py-2" type="text" onChange={(e) => setAddress2(e.target.value)} value={address2} placeholder="Address 2" required />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-text-muted mb-1">About me</p>
          <textarea className="w-full px-4 pt-2 border rounded" placeholder="Write about yourself" rows={5} onChange={(e) => setAbout(e.target.value)} value={about} required />
        </div>

        <button type="submit" className="bg-primary px-10 py-3 mt-4 text-white rounded-full hover:bg-primary-hover transition-colors cursor-pointer">Add doctor</button>
      </div>
    </form>
  )
}

export default AddDoctor
