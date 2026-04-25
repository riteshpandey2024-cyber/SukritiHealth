import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  // Role tabs: Patient, Doctor, Admin
  const [role, setRole] = useState('Patient')
  const [state, setState] = useState('Login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const navigate = useNavigate()
  const { backendUrl, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      if (role === 'Patient') {
        if (state === 'Sign Up') {
          const { data } = await axios.post(backendUrl + '/api/user/register', {
            name,
            email,
            password,
          })
          if (data.success) {
            localStorage.setItem('token', data.token)
            setToken(data.token)
            toast.success('Account created successfully!')
            navigate('/')
          } else {
            toast.error(data.message)
          }
        } else {
          const { data } = await axios.post(backendUrl + '/api/user/login', {
            email,
            password,
          })
          if (data.success) {
            localStorage.setItem('token', data.token)
            setToken(data.token)
            toast.success('Login successful!')
            navigate('/')
          } else {
            toast.error(data.message)
          }
        }
      } else if (role === 'Doctor') {
        const { data } = await axios.post(backendUrl + '/api/doctor/login', {
          email,
          password,
        })
        if (data.success) {
          localStorage.setItem('dToken', data.token)
          toast.success('Doctor login successful!')
          // Open doctor panel
          window.open('http://localhost:5174', '_blank')
          // Also store so doctor panel auto-detects
          window.location.reload()
        } else {
          toast.error(data.message)
        }
      } else if (role === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', {
          email,
          password,
        })
        if (data.success) {
          localStorage.setItem('aToken', data.token)
          toast.success('Admin login successful!')
          // Open admin panel
          window.open('http://localhost:5175', '_blank')
          window.location.reload()
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const roles = ['Patient', 'Doctor', 'Admin']

  const getRoleIcon = (r) => {
    if (r === 'Patient') {
      return (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      )
    }
    if (r === 'Doctor') {
      return (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" />
        </svg>
      )
    }
    return (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
      </svg>
    )
  }

  const getRoleColor = (r) => {
    if (r === 'Patient') return 'from-primary to-blue-500'
    if (r === 'Doctor') return 'from-emerald-500 to-teal-500'
    return 'from-amber-500 to-orange-500'
  }

  const getRoleBtnColor = (r) => {
    if (r === 'Patient') return 'bg-primary hover:bg-primary-hover'
    if (r === 'Doctor') return 'bg-emerald-500 hover:bg-emerald-600'
    return 'bg-amber-500 hover:bg-amber-600'
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Role Tabs */}
        <div className="flex rounded-2xl overflow-hidden mb-6 bg-surface border border-border">
          {roles.map((r) => (
            <button
              key={r}
              onClick={() => {
                setRole(r)
                setState('Login')
                setEmail('')
                setPassword('')
                setName('')
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium transition-all duration-300 cursor-pointer ${
                role === r
                  ? `bg-gradient-to-r ${getRoleColor(r)} text-white shadow-lg`
                  : 'text-text-muted hover:text-text-dark hover:bg-white'
              }`}
            >
              {getRoleIcon(r)}
              {r}
            </button>
          ))}
        </div>

        {/* Login Form Card */}
        <form
          onSubmit={onSubmitHandler}
          className="border border-border rounded-2xl text-text-dark text-sm shadow-lg bg-white overflow-hidden"
        >
          {/* Card Header with gradient accent */}
          <div className={`h-1.5 bg-gradient-to-r ${getRoleColor(role)}`}></div>

          <div className="p-8">
            <p className="text-2xl font-semibold">
              {role === 'Patient' && state === 'Sign Up'
                ? 'Create Account'
                : `${role} Login`}
            </p>
            <p className="text-text-muted mt-1">
              {role === 'Patient' && state === 'Sign Up'
                ? 'Please sign up to book appointment'
                : role === 'Patient'
                  ? 'Please login to book appointment'
                  : role === 'Doctor'
                    ? 'Access your doctor dashboard'
                    : 'Access the admin panel'}
            </p>

            <div className="flex flex-col gap-4 mt-6">
              {/* Name field - only for Patient Sign Up */}
              {role === 'Patient' && state === 'Sign Up' && (
                <div className="w-full">
                  <p className="font-medium mb-1">Full Name</p>
                  <input
                    className="border border-border rounded-lg w-full p-2.5 focus:outline-none focus:border-primary transition-colors"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              )}

              <div className="w-full">
                <p className="font-medium mb-1">Email</p>
                <input
                  className="border border-border rounded-lg w-full p-2.5 focus:outline-none focus:border-primary transition-colors"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder={
                    role === 'Admin'
                      ? 'Admin email'
                      : role === 'Doctor'
                        ? 'Doctor email'
                        : 'Enter your email'
                  }
                  required
                />
              </div>

              <div className="w-full">
                <p className="font-medium mb-1">Password</p>
                <input
                  className="border border-border rounded-lg w-full p-2.5 focus:outline-none focus:border-primary transition-colors"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className={`${getRoleBtnColor(role)} text-white w-full py-2.5 rounded-full text-base font-medium mt-6 transition-colors cursor-pointer`}
            >
              {role === 'Patient' && state === 'Sign Up'
                ? 'Create account'
                : 'Login'}
            </button>

            {/* Toggle Sign Up / Login - only for Patient */}
            {role === 'Patient' && (
              <p className="mt-4 text-center">
                {state === 'Sign Up' ? (
                  <>
                    Already have an account?{' '}
                    <span
                      onClick={() => setState('Login')}
                      className="text-primary underline cursor-pointer"
                    >
                      Login here
                    </span>
                  </>
                ) : (
                  <>
                    Don&apos;t have an account?{' '}
                    <span
                      onClick={() => setState('Sign Up')}
                      className="text-primary underline cursor-pointer"
                    >
                      Sign up here
                    </span>
                  </>
                )}
              </p>
            )}

            {/* Info for Doctor/Admin */}
            {role === 'Doctor' && (
              <p className="mt-4 text-center text-text-muted text-xs">
                🩺 Doctor credentials are provided by the admin.
                <br />
                After login, your dashboard will open.
              </p>
            )}
            {role === 'Admin' && (
              <p className="mt-4 text-center text-text-muted text-xs">
                🔐 Admin credentials are set in the server configuration.
                <br />
                After login, the admin panel will open.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
