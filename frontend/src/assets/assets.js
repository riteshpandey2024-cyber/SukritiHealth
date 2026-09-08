// SVG assets as inline components/data URLs for the SukritiHealth frontend

// Import service images
import NeurologyImg from './Neurology.png'
import DentalImg from './Dental.png'
import CardiovascularImg from './Cardiovascular.png'
import OphthalmologyImg from './Ophthalmology.png'
import OrthopedicsImg from './Orthopedics.png'
import PregnancyImg from './Pregnancy.png'
import DermatologistImg from './Dermatologist.png'

// Services data with medical specialties - Local Uploaded Images
export const servicesData = [
  {
    _id: 'service_1',
    name: 'Neurology',
    description: 'Our neurology department provides comprehensive care for disorders affecting the nervous system, including brain, spinal cord, and peripheral nerves. Our experienced neurologists specialize in diagnosing and treating conditions such as migraines, epilepsy, Parkinson\'s disease, multiple sclerosis, and stroke.',
    image: NeurologyImg,
    highlights: [
      'Advanced diagnostic imaging (MRI, CT scan)',
      'EEG and EMG testing facilities',
      'Specialized treatment for neurological disorders',
      'Rehabilitation and therapy programs'
    ]
  },
  {
    _id: 'service_2',
    name: 'Dental',
    description: 'Comprehensive dental care services including preventive, restorative, and cosmetic dentistry. Our dental team uses state-of-the-art technology to provide comfortable and effective treatments for all age groups, ensuring your smile remains healthy and beautiful.',
    image: DentalImg,
    highlights: [
      'Routine cleanings and preventive care',
      'Cosmetic dentistry and teeth whitening',
      'Root canal treatment',
      'Dental implants and orthodontics'
    ]
  },
  {
    _id: 'service_3',
    name: 'Cardiovascular',
    description: 'Specialized cardiovascular care for heart and blood vessel disorders. Our cardiologists provide comprehensive assessment, diagnosis, and treatment of conditions including heart disease, hypertension, arrhythmias, and heart failure with latest interventional procedures.',
    image: CardiovascularImg,
    highlights: [
      'Cardiac screening and stress testing',
      'Echocardiogram and cardiac catheterization',
      'Arrhythmia management',
      'Preventive cardiovascular health programs'
    ]
  },
  {
    _id: 'service_4',
    name: 'Ophthalmology',
    description: 'Complete eye care services from basic vision correction to complex surgical procedures. Our ophthalmologists treat refractive errors, cataracts, glaucoma, retinal disorders, and other eye conditions using advanced diagnostic and surgical techniques.',
    image: OphthalmologyImg,
    highlights: [
      'Comprehensive eye examinations',
      'Cataract surgery and lens implants',
      'LASIK and refractive surgery',
      'Glaucoma and retinal disease management'
    ]
  },
  {
    _id: 'service_5',
    name: 'Orthopedics',
    description: 'Expert orthopedic care for bone, joint, and muscle disorders. Our specialists treat everything from fractures and sprains to complex joint replacements, sports injuries, and degenerative conditions with both conservative and surgical approaches.',
    image: OrthopedicsImg,
    highlights: [
      'Joint replacement surgeries',
      'Sports medicine and injury prevention',
      'Arthroscopic procedures',
      'Physical therapy and rehabilitation'
    ]
  },
  {
    _id: 'service_6',
    name: 'Pregnancy & Obstetrics',
    description: 'Comprehensive maternity care from prenatal screening through postpartum support. Our experienced obstetricians provide evidence-based care to ensure safe and healthy pregnancies, deliveries, and postnatal recovery for both mother and baby.',
    image: PregnancyImg,
    highlights: [
      'Prenatal screening and ultrasound',
      'High-risk pregnancy management',
      'Safe delivery services',
      'Postpartum care and lactation support'
    ]
  },
  {
    _id: 'service_7',
    name: 'Dermatology',
    description: 'Expert dermatological care for all skin, hair, and nail conditions. Our dermatologists provide comprehensive diagnosis and treatment using advanced techniques for acne, eczema, psoriasis, skin cancer, and aesthetic procedures to keep your skin healthy and beautiful.',
    image: DermatologistImg,
    highlights: [
      'Acne and skin condition treatment',
      'Skin cancer screening and removal',
      'Cosmetic dermatology and laser therapy',
      'Hair loss treatment and restoration'
    ]
  }
]

// Specialty icons as simple SVG data URIs
export const specialityData = [
  {
    speciality: 'General physician',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><circle cx="40" cy="40" r="40" fill="#EEF2FF"/><path d="M40 20c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 30c-11 0-20 5-20 12v3h40v-3c0-7-9-12-20-12z" fill="#5F6FFF"/></svg>')}`,
  },
  {
    speciality: 'Gynecologist',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><circle cx="40" cy="40" r="40" fill="#EEF2FF"/><path d="M40 18c-6 0-11 5-11 11s5 11 11 11 11-5 11-11-5-11-11-11zm0 28c-8 0-16 4-16 10v4h32v-4c0-6-8-10-16-10z" fill="#F472B6"/></svg>')}`,
  },
  {
    speciality: 'Dermatologist',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><circle cx="40" cy="40" r="40" fill="#EEF2FF"/><rect x="28" y="22" width="24" height="36" rx="12" fill="#A78BFA"/><circle cx="35" cy="35" r="3" fill="#EEF2FF"/><circle cx="45" cy="35" r="3" fill="#EEF2FF"/><circle cx="40" cy="44" r="2" fill="#EEF2FF"/></svg>')}`,
  },
  {
    speciality: 'Pediatricians',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><circle cx="40" cy="40" r="40" fill="#EEF2FF"/><circle cx="40" cy="28" r="10" fill="#60A5FA"/><path d="M28 48c0-6.6 5.4-12 12-12s12 5.4 12 12v8H28v-8z" fill="#60A5FA"/><circle cx="36" cy="26" r="2" fill="#fff"/><circle cx="44" cy="26" r="2" fill="#fff"/></svg>')}`,
  },
  {
    speciality: 'Neurologist',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><circle cx="40" cy="40" r="40" fill="#EEF2FF"/><ellipse cx="40" cy="36" rx="14" ry="16" fill="#818CF8"/><path d="M30 36c2-4 6-6 10-6s8 2 10 6" stroke="#EEF2FF" stroke-width="2" fill="none"/><path d="M33 42c2 3 4 4 7 4s5-1 7-4" stroke="#EEF2FF" stroke-width="2" fill="none"/></svg>')}`,
  },
  {
    speciality: 'Gastroenterologist',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><circle cx="40" cy="40" r="40" fill="#EEF2FF"/><path d="M32 26h16v8c0 8-4 14-8 18-4-4-8-10-8-18v-8z" fill="#34D399"/><circle cx="40" cy="34" r="4" fill="#EEF2FF"/></svg>')}`,
  },
]

// Sample doctors data for initial display
export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Arjun Mehta',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260"><rect width="200" height="260" fill="#EEF2FF"/><circle cx="100" cy="90" r="45" fill="#C7D2FE"/><rect x="60" y="140" width="80" height="100" rx="10" fill="#5F6FFF"/><circle cx="85" cy="80" r="5" fill="#374151"/><circle cx="115" cy="80" r="5" fill="#374151"/><path d="M90 100 q10 8 20 0" stroke="#374151" stroke-width="2" fill="none"/><rect x="85" y="150" width="30" height="6" rx="3" fill="#fff"/><rect x="96" y="143" width="8" height="20" rx="4" fill="#fff"/></svg>')}`,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Arjun Mehta is dedicated to providing comprehensive primary healthcare, with a focus on preventive care, accurate diagnosis, and effective treatment of common medical conditions.',
    fees: 15,
    available: true,
    address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, Bangalore' },
    college: 'All India Institute of Medical Sciences (AIIMS), New Delhi',
    graduationYear: 2019,
    specialistField: 'Internal Medicine & Primary Care',
    achievements: ['Best Resident Award 2020', 'Published 5+ medical research papers', 'Community Healthcare Excellence Award'],
  },
  {
    _id: 'doc2',
    name: 'Dr. Sandhya Sinha',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260"><rect width="200" height="260" fill="#EEF2FF"/><circle cx="100" cy="90" r="45" fill="#FECDD3"/><rect x="60" y="140" width="80" height="100" rx="10" fill="#F472B6"/><circle cx="85" cy="80" r="5" fill="#374151"/><circle cx="115" cy="80" r="5" fill="#374151"/><path d="M90 100 q10 8 20 0" stroke="#374151" stroke-width="2" fill="none"/><path d="M65 60 Q100 30 135 60" fill="#374151"/></svg>')}`,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Sandhya Sinha provides compassionate women’s healthcare with a focus on reproductive health, preventive gynecology, pregnancy care, and patient-centered treatment.',
    fees: 18,
    available: true,
    address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, Bangalore' },
    college: 'Lady Hardinge Medical College, New Delhi',
    graduationYear: 2020,
    specialistField: 'Obstetrics & Reproductive Health',
    achievements: ['Gold Medalist in Gynecology', 'Women Health Excellence Award 2022', 'Trained 50+ junior residents'],
  },
  {
    _id: 'doc3',
    name: 'Dr. Neha Shukla',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260"><rect width="200" height="260" fill="#EEF2FF"/><circle cx="100" cy="90" r="45" fill="#FECDD3"/><rect x="60" y="140" width="80" height="100" rx="10" fill="#A78BFA"/><circle cx="85" cy="80" r="5" fill="#374151"/><circle cx="115" cy="80" r="5" fill="#374151"/><path d="M90 100 q10 8 20 0" stroke="#374151" stroke-width="2" fill="none"/><path d="M60 55 Q100 25 140 55" fill="#1F2937"/></svg>')}`,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Year',
    about: 'Dr. Neha Shukla specializes in clinical and cosmetic dermatology, helping patients manage skin, hair, and nail conditions through personalized treatment plans.',
    fees: 12,
    available: true,
    address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, Bangalore' },
    college: 'Maulana Azad Medical College, New Delhi',
    graduationYear: 2022,
    specialistField: 'Clinical & Cosmetic Dermatology',
    achievements: ['Young Dermatologist Award 2023', 'Presented research at National Dermatology Conference', 'Skin Health Awareness Campaign Leader'],
  },
  {
    _id: 'doc4',
    name: 'Dr. Karan Singh',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260"><rect width="200" height="260" fill="#EEF2FF"/><circle cx="100" cy="90" r="45" fill="#C7D2FE"/><rect x="60" y="140" width="80" height="100" rx="10" fill="#60A5FA"/><circle cx="85" cy="80" r="5" fill="#374151"/><circle cx="115" cy="80" r="5" fill="#374151"/><path d="M90 100 q10 8 20 0" stroke="#374151" stroke-width="2" fill="none"/><rect x="85" y="150" width="30" height="6" rx="3" fill="#fff"/><rect x="96" y="143" width="8" height="20" rx="4" fill="#fff"/></svg>')}`,
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about: 'Dr. Karan Singh is passionate about child healthcare, providing preventive, diagnostic, and treatment services with special attention to childhood development and nutrition.',
    fees: 14,
    available: true,
    address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, Bangalore' },
    college: 'Christian Medical College, Vellore',
    graduationYear: 2021,
    specialistField: 'Pediatric Immunology & Child Care',
    achievements: ['Best Pediatrician Award', 'Child Healthcare Volunteer', 'Published research on childhood nutrition'],
  },
  {
    _id: 'doc5',
    name: 'Dr. Nikhil Mishra',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260"><rect width="200" height="260" fill="#EEF2FF"/><circle cx="100" cy="90" r="45" fill="#FECDD3"/><rect x="60" y="140" width="80" height="100" rx="10" fill="#818CF8"/><circle cx="85" cy="80" r="5" fill="#374151"/><circle cx="115" cy="80" r="5" fill="#374151"/><path d="M90 100 q10 8 20 0" stroke="#374151" stroke-width="2" fill="none"/><path d="M60 60 Q100 30 140 60" fill="#6B21A8"/></svg>')}`,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Nikhil Mishra focuses on neurological care, including diagnosis and management of disorders affecting the brain, spinal cord, nerves, and overall nervous system.',
    fees: 20,
    available: true,
    address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, Bangalore' },
    college: 'King George’s Medical University, Lucknow',
    graduationYear: 2019,
    specialistField: 'Neurology & Brain Health',
    achievements: ['Neurology Excellence Award', 'Presented research at National Neurology Conference', 'Specialized training in neurological diagnostics'],
  },
  {
    _id: 'doc6',
    name: 'Dr. Saurabh Pandey',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260"><rect width="200" height="260" fill="#EEF2FF"/><circle cx="100" cy="90" r="45" fill="#C7D2FE"/><rect x="60" y="140" width="80" height="100" rx="10" fill="#34D399"/><circle cx="85" cy="80" r="5" fill="#374151"/><circle cx="115" cy="80" r="5" fill="#374151"/><path d="M90 100 q10 8 20 0" stroke="#374151" stroke-width="2" fill="none"/><rect x="85" y="150" width="30" height="6" rx="3" fill="#fff"/><rect x="96" y="143" width="8" height="20" rx="4" fill="#fff"/></svg>')}`,
    speciality: 'Gastroenterologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Saurabh Pandey specializes in digestive health, providing diagnosis and treatment for gastrointestinal disorders with a focus on endoscopy and preventive care.',
    fees: 16,
    available: true,
    address: { line1: '67th Cross, Richmond', line2: 'Circle, Ring Road, Bangalore' },
    college: 'Institute of Medical Sciences, Banaras Hindu University',
    graduationYear: 2019,
    specialistField: 'Digestive Health & Endoscopy',
    achievements: ['Advanced Endoscopy Certification', 'Medical Excellence Award 2021', 'Presented research on gastrointestinal disorders'],
  },
  {
    _id: 'doc7',
    name: 'Dr. Vivek Pandey',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260"><rect width="200" height="260" fill="#EEF2FF"/><circle cx="100" cy="90" r="45" fill="#C7D2FE"/><rect x="60" y="140" width="80" height="100" rx="10" fill="#5F6FFF"/><circle cx="85" cy="80" r="5" fill="#374151"/><circle cx="115" cy="80" r="5" fill="#374151"/><path d="M90 100 q10 8 20 0" stroke="#374151" stroke-width="2" fill="none"/><rect x="85" y="150" width="30" height="6" rx="3" fill="#fff"/><rect x="96" y="143" width="8" height="20" rx="4" fill="#fff"/></svg>')}`,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Vivek Pandey provides comprehensive primary care with an emphasis on preventive medicine, chronic disease management, routine diagnosis, and long-term patient wellness.',
    fees: 13,
    available: true,
    address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, Bangalore' },
    college: 'Jawaharlal Institute of Postgraduate Medical Education & Research',
    graduationYear: 2019,
    specialistField: 'Family Medicine & Chronic Disease',
    achievements: ['Community Health Champion 2022', 'Certified in Telemedicine Practice', '10,000+ patients treated'],
  },
  {
    _id: 'doc8',
    name: 'Dr. Isha Singh',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260"><rect width="200" height="260" fill="#EEF2FF"/><circle cx="100" cy="90" r="45" fill="#C7D2FE"/><rect x="60" y="140" width="80" height="100" rx="10" fill="#F472B6"/><circle cx="85" cy="80" r="5" fill="#374151"/><circle cx="115" cy="80" r="5" fill="#374151"/><path d="M90 100 q10 8 20 0" stroke="#374151" stroke-width="2" fill="none"/></svg>')}`,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Isha Singh provides comprehensive gynecological care with a focus on reproductive health, prenatal care, menstrual health, fertility support, and women’s wellness.',
    fees: 19,
    available: true,
    address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, Bangalore' },
    college: 'Armed Forces Medical College, Pune',
    graduationYear: 2020,
    specialistField: 'High-Risk Pregnancy & Fertility',
    achievements: ['Best OB/GYN Resident', 'Maternal Health Advocate Award', 'Led 200+ successful deliveries'],
  },
  {
    _id: 'doc9',
    name: 'Dr. Hannah Pandey',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260"><rect width="200" height="260" fill="#EEF2FF"/><circle cx="100" cy="90" r="45" fill="#FECDD3"/><rect x="60" y="140" width="80" height="100" rx="10" fill="#A78BFA"/><circle cx="85" cy="80" r="5" fill="#374151"/><circle cx="115" cy="80" r="5" fill="#374151"/><path d="M90 100 q10 8 20 0" stroke="#374151" stroke-width="2" fill="none"/><path d="M55 55 Q100 20 145 55" fill="#92400E"/></svg>')}`,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Year',
    about: 'Dr. Hannah Pandey specializes in dermatology and skin wellness, offering personalized care for acne, pigmentation, hair and scalp concerns, allergies, and other skin conditions.',
    fees: 10,
    available: true,
    address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, Bangalore' },
    college: 'Seth GS Medical College, Mumbai',
    graduationYear: 2022,
    specialistField: 'Pediatric Dermatology & Skin Allergy',
    achievements: ['Emerging Dermatologist Award', 'Presented at National Skin Conference', 'Skin Health Awareness Campaign Leader'],
  },
  {
    _id: 'doc10',
    name: 'Dr. Rohan Sharma',
    image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260"><rect width="200" height="260" fill="#EEF2FF"/><circle cx="100" cy="90" r="45" fill="#C7D2FE"/><rect x="60" y="140" width="80" height="100" rx="10" fill="#60A5FA"/><circle cx="85" cy="80" r="5" fill="#374151"/><circle cx="115" cy="80" r="5" fill="#374151"/><path d="M90 100 q10 8 20 0" stroke="#374151" stroke-width="2" fill="none"/><rect x="85" y="150" width="30" height="6" rx="3" fill="#fff"/><rect x="96" y="143" width="8" height="20" rx="4" fill="#fff"/></svg>')}`,
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about: 'Dr. Rohan Sharma is committed to providing quality pediatric care, focusing on childhood illnesses, preventive healthcare, immunization, nutrition, and healthy development.',
    fees: 17,
    available: true,
    address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, Bangalore' },
    college: 'Amrita Institute of Medical Sciences, Kochi',
    graduationYear: 2021,
    specialistField: 'Neonatal Care & Childhood Nutrition',
    achievements: ['Child Health Innovation Award', 'Community Child Health Volunteer', 'Published research on childhood nutrition'],
  },
]
