import { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setAToken, backendUrl } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
      if (data.success) {
        localStorage.setItem('aToken', data.token)
        setAToken(data.token)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-text-dark text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary">Admin</span> Login
        </p>
        <div className="w-full">
          <p className="font-medium">Email</p>
          <input className="border border-border rounded w-full p-2 mt-1" type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className="w-full">
          <p className="font-medium">Password</p>
          <input className="border border-border rounded w-full p-2 mt-1" type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div>
        <button type="submit" className="bg-primary text-white w-full py-2 rounded-full text-base hover:bg-primary-hover transition-colors cursor-pointer">Login</button>
      </div>
    </form>
  )
}

export default Login
