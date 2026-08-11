import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AppContext } from '../context/AppContext'

const jobCategories = [
  {
    category: 'Medical Staff',
    roles: [
      {
        title: 'Doctor',
        type: 'Full-time',
        location: 'On-site',
        description: 'Diagnose and treat patients, prescribe medications, and coordinate with specialists for comprehensive patient care.',
        requirements: ['MBBS / MD degree', '2+ years clinical experience', 'Valid medical license', 'Strong diagnostic skills'],
      },
      {
        title: 'Nurse',
        type: 'Full-time / Part-time',
        location: 'On-site',
        description: 'Provide direct patient care, administer medications, monitor vital signs, and collaborate with physicians on treatment plans.',
        requirements: ['BSc Nursing or equivalent', 'Registered Nurse license', 'BLS/ACLS certification', 'Compassionate bedside manner'],
      },
      {
        title: 'Pharmacist',
        type: 'Full-time',
        location: 'On-site',
        description: 'Manage medication inventory, prepare and dispense medications, counsel patients on drug usage, and ensure compliance with regulations.',
        requirements: ['PharmD or B.Pharm degree', 'Licensed pharmacist', 'Knowledge of drug interactions', 'Attention to detail'],
      },
    ],
  },
  {
    category: 'Diagnostics & Technical',
    roles: [
      {
        title: 'Radiology Technician',
        type: 'Full-time',
        location: 'On-site',
        description: 'Perform and analyze diagnostic imaging tests including X-rays, MRIs, CT scans, and ultrasounds under physician direction.',
        requirements: ['Diploma in Radiology', 'Certification in imaging technology', 'Equipment handling experience', 'Patient safety awareness'],
      },
      {
        title: 'Lab Technician',
        type: 'Full-time',
        location: 'On-site',
        description: 'Collect samples, perform laboratory analyses including blood tests, urinalysis, and cultures, and maintain lab equipment.',
        requirements: ['BSc in Medical Lab Technology', 'Lab certification', 'Proficiency with lab instruments', 'Quality control knowledge'],
      },
    ],
  },
  {
    category: 'Patient Support',
    roles: [
      {
        title: 'Ward Boy / Girl',
        type: 'Full-time',
        location: 'On-site',
        description: 'Assist patients with daily activities, transport patients within the facility, and support nursing staff with basic care tasks.',
        requirements: ['High school diploma', 'Physical fitness', 'Basic first aid knowledge', 'Empathetic and patient'],
      },
      {
        title: 'Patient Services Assistant',
        type: 'Full-time',
        location: 'On-site',
        description: 'Bring meals, drinks, and assist with feeding patients. Ensure patient comfort and report any concerns to nursing staff.',
        requirements: ['High school diploma', 'Food safety certification preferred', 'Good communication skills', 'Team player'],
      },
      {
        title: 'Porter',
        type: 'Full-time',
        location: 'On-site',
        description: 'Responsible for moving equipment, supplies, and patients throughout the facility safely and efficiently.',
        requirements: ['Physical fitness', 'Ability to lift heavy items', 'Good navigation skills', 'Reliability and punctuality'],
      },
      {
        title: 'Social Worker / Counselor',
        type: 'Full-time',
        location: 'On-site / Remote',
        description: 'Provide emotional support to patients and families, assist with care planning, coordinate community resources, and advocate for patient needs.',
        requirements: ['MSW or MA in Counseling', 'Licensed social worker', 'Crisis intervention skills', 'Empathy and active listening'],
      },
    ],
  },
  {
    category: 'Administration & Operations',
    roles: [
      {
        title: 'Ward Clerk / Receptionist',
        type: 'Full-time',
        location: 'On-site',
        description: 'Manage patient admission, discharge, and ward reception desks. Handle phone inquiries, scheduling, and maintain patient records.',
        requirements: ['High school diploma', 'Computer proficiency', 'Organizational skills', 'Professional communication'],
      },
      {
        title: 'Clinical Assistant / Housekeeping',
        type: 'Full-time',
        location: 'On-site',
        description: 'Ensure cleanliness and infection control in patient wards and common areas. Maintain hygiene standards per hospital protocols.',
        requirements: ['Infection control knowledge', 'Attention to cleanliness', 'Physical stamina', 'Team collaboration'],
      },
      {
        title: 'Hospital Administrator',
        type: 'Full-time',
        location: 'On-site',
        description: 'Manage day-to-day hospital operations including staffing, budgeting, policy implementation, and regulatory compliance.',
        requirements: ['MBA in Healthcare Management', '3+ years hospital admin experience', 'Leadership skills', 'Budget management expertise'],
      },
    ],
  },
]

const Careers = () => {
  const [selectedRole, setSelectedRole] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: '',
  })

  const { backendUrl } = useContext(AppContext)

  const handleApply = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const { data } = await axios.post(backendUrl + '/api/career/apply', {
        ...formData,
        role: selectedRole.title,
      })

      if (data.success) {
        toast.success(data.message)
        setSelectedRole(null)
        setFormData({ name: '', email: '', phone: '', experience: '', message: '' })
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-br from-primary to-blue-600 rounded-2xl mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Careers at SukritiHealth
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-sm md:text-base">
          Join our mission to deliver world-class healthcare. Explore openings across
          medical, technical, support, and administrative teams.
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <div className="bg-white/15 backdrop-blur rounded-xl px-5 py-3 text-center">
            <p className="text-2xl font-bold text-white">{jobCategories.reduce((a, c) => a + c.roles.length, 0)}</p>
            <p className="text-xs text-white/70">Open Positions</p>
          </div>
          <div className="bg-white/15 backdrop-blur rounded-xl px-5 py-3 text-center">
            <p className="text-2xl font-bold text-white">4</p>
            <p className="text-xs text-white/70">Departments</p>
          </div>
          <div className="bg-white/15 backdrop-blur rounded-xl px-5 py-3 text-center">
            <p className="text-2xl font-bold text-white">50+</p>
            <p className="text-xs text-white/70">Team Members</p>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      {jobCategories.map((cat, catIdx) => (
        <div key={catIdx} className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-7 bg-primary rounded-full"></div>
            <h2 className="text-xl font-semibold text-text-dark">{cat.category}</h2>
            <span className="text-xs bg-primary-light text-primary px-2.5 py-1 rounded-full font-medium">
              {cat.roles.length} {cat.roles.length === 1 ? 'role' : 'roles'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.roles.map((role, roleIdx) => (
              <div
                key={roleIdx}
                className="border border-border rounded-xl p-5 bg-white hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-text-dark">{role.title}</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                    Hiring
                  </span>
                </div>

                <div className="flex gap-3 mb-3">
                  <span className="text-xs text-text-muted bg-surface px-2.5 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {role.type}
                  </span>
                  <span className="text-xs text-text-muted bg-surface px-2.5 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {role.location}
                  </span>
                </div>

                <p className="text-sm text-text-muted mb-4 flex-1">{role.description}</p>

                <div className="mb-4">
                  <p className="text-xs font-medium text-text-dark mb-2">Requirements:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {role.requirements.map((req, i) => (
                      <span key={i} className="text-xs text-primary bg-primary-light px-2 py-0.5 rounded">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedRole(role)}
                  className="w-full bg-primary text-white py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Application Modal */}
      {selectedRole && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-primary to-blue-500 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Apply for {selectedRole.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{selectedRole.type} &middot; {selectedRole.location}</p>
                </div>
                <button
                  onClick={() => setSelectedRole(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Application Form */}
            <form onSubmit={handleApply} className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-text-dark block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-text-dark block mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-text-dark block mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-text-dark block mb-1">Years of Experience</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select experience</option>
                  <option value="fresher">Fresher</option>
                  <option value="1-2">1-2 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5-10">5-10 Years</option>
                  <option value="10+">10+ Years</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-text-dark block mb-1">Why do you want to join SukritiHealth?</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about yourself..."
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedRole(null)}
                  className="flex-1 border border-border py-2.5 rounded-full text-sm font-medium text-text-muted hover:bg-surface transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-primary text-white py-2.5 rounded-full text-sm font-medium hover:bg-primary-hover transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Careers
