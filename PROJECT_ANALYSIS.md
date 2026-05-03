# SukritiHealth - Project Analysis

## 📋 Executive Summary

**SukritiHealth** is a full-stack, multi-panel doctor appointment booking web application built with the **MERN stack** (MongoDB, Express, React, Node.js). It's a complete healthcare management ecosystem designed to connect patients with doctors, enable online appointment booking, and provide role-based administrative dashboards for doctors and admins.

The application is architected as **4 separate applications sharing a single backend**:
- **Frontend** (Patient Portal) - localhost:5173
- **Doctor Dashboard** - localhost:5174
- **Admin Panel** - localhost:5175
- **Backend API** - localhost:4000

---

## 🏗️ Architecture Overview

```
SukritiHealth/
├── backend/           → Node.js + Express REST API (shared backend)
├── frontend/          → Patient-facing website (React + Vite)
├── doctor/            → Doctor dashboard (React + Vite)
└── admin/             → Admin panel (React + Vite)
```

### Key Architectural Features:
- **Microservices-style Architecture**: Independent frontend applications communicate with a unified REST API
- **Separated Authentication**: Each role (User, Doctor, Admin) has its own JWT secret
- **Modular Routes**: Separate API endpoints for `/api/user`, `/api/doctor`, `/api/admin`
- **Stateless Backend**: Uses JWT tokens for authentication instead of sessions
- **Context API**: Frontend state management using React's Context API (no Redux)

---

## 💻 Technology Stack

| Component | Technologies |
|-----------|--------------|
| **Backend** | Node.js, Express.js, Mongoose, MongoDB |
| **Frontend** | React 18, Vite, Tailwind CSS, React Router v6, Axios |
| **Authentication** | JWT (separate secrets per role), bcrypt |
| **Payments** | Razorpay SDK |
| **Media Storage** | Cloudinary |
| **UI State** | React Context API, React Toastify |
| **HTTP Client** | Axios |
| **File Upload** | Multer |
| **Data Validation** | Validator.js |

### Package Versions:
- **Node Version**: 18+
- **React**: ^19.2.5
- **React Router**: ^7.14.2
- **Axios**: ^1.15.2
- **Express**: ^4.18.2
- **Mongoose**: ^8.2.0
- **Tailwind CSS**: ^4.2.4

---

## 🔑 Core Features

### 1. **Patient Portal (Frontend)**
**Target URL**: `localhost:5173`

#### Authentication
- Unified login page with tabs for Patient, Doctor, and Admin
- Email validation & strong password requirements (min 8 chars)
- JWT token-based authentication
- Password hashing with bcrypt (salt: 10)
- Token stored in localStorage

#### Doctor Management
- **Browse Doctors**: Filter by 6 specialities
  - General physician
  - Gynecologist
  - Dermatologist
  - Pediatrician
  - Neurologist
  - Gastroenterologist
- **Doctor Profiles**: Detailed information including:
  - Education background & graduation college/year
  - Specialist field
  - Achievements
  - Consultation fees ($10-$20 range)

#### Appointment System
- **Booking**: 7-day slot selector with responsive 7-column grid layout
- **Slot Management**: No horizontal scrolling on mobile
- **View Appointments**: My Appointments page showing all bookings
- **Cancel Appointments**: Cancel with refund capability
- **Payment Integration**: Razorpay checkout for appointment fees

#### User Profile
- Edit personal details: name, phone, address, gender, DOB
- Profile picture upload
- Address management (line1, line2)

#### Additional Features
- **Careers Page**: 12 hospital job roles across 4 departments
- **Apply Modal**: Apply for positions
- **Privacy Policy**: 9-section comprehensive hospital rules
- **Contact Page**: Hospital contact information
- **About Page**: Hospital background

---

### 2. **Doctor Dashboard**
**Target URL**: `localhost:5174`

#### Authentication
- Separate login for doctors
- Doctor-specific JWT token (JWT_DOCTOR_SECRET)

#### Features
- **Appointment Management**
  - View all booked appointments
  - Mark appointments as completed
  - Patient details visibility
  - Appointment status tracking

- **Profile Settings**
  - Update consultation fees ($10-$20)
  - Edit address information
  - Availability toggle (available/unavailable)
  - Profile photo management

- **Dashboard**
  - Earnings overview
  - Patient count statistics
  - Appointment statistics
  - Performance metrics

---

### 3. **Admin Panel**
**Target URL**: `localhost:5175`

#### Authentication
- Hardcoded credentials authentication
- Uses ADMIN_EMAIL & ADMIN_PASSWORD from environment
- Admin-specific JWT token (JWT_ADMIN_SECRET)

#### Features
- **Doctor Management**
  - Add new doctors with:
    - Profile information (name, email, password)
    - Speciality selection
    - Education details (degree, experience)
    - Consultation fees
    - Image upload to Cloudinary
  - Edit doctor profiles
  - Toggle doctor availability

- **Appointment Oversight**
  - View all appointments across the platform
  - Cancel appointments as needed
  - View patient-doctor relationships

- **Dashboard**
  - Total doctors count
  - Total patients count
  - Total appointments count
  - Platform-wide statistics

---

## 🗄️ Data Models

### 1. **User Model** (`userModel.js`)
```javascript
{
  _id: String (UUID),
  name: String,
  email: String (unique),
  password: String (hashed),
  image: String (URL),
  address: {
    line1: String,
    line2: String
  },
  gender: String,
  dob: Date,
  phone: String,
  createdAt: Timestamp
}
```

### 2. **Doctor Model** (`doctorModel.js`)
```javascript
{
  _id: String (UUID),
  name: String,
  email: String (unique),
  password: String (hashed),
  image: String (URL),
  speciality: String (from 6 options),
  degree: String,
  experience: String,
  about: String,
  fees: Number,
  address: {
    line1: String,
    line2: String
  },
  available: Boolean,
  slots_booked: Object (date-based),
  college: String,
  graduationYear: Number,
  specialistField: String,
  achievements: Array[String],
  createdAt: Timestamp
}
```

### 3. **Appointment Model** (`appointmentModel.js`)
```javascript
{
  _id: String (UUID),
  userId: String (reference to User),
  docId: String (reference to Doctor),
  slotDate: Date,
  slotTime: String,
  userData: Object (user details snapshot),
  docData: Object (doctor details snapshot),
  amount: Number,
  date: Timestamp,
  cancelled: Boolean (default: false),
  payment: Boolean (default: false),
  isCompleted: Boolean (default: false)
}
```

---

## 🔌 API Endpoints

### **User Routes** (`/api/user`)
| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| POST | `/register` | ❌ | Register new patient |
| POST | `/login` | ❌ | Patient login |
| GET | `/get-profile` | ✅ | Fetch user profile |
| POST | `/update-profile` | ✅ | Update user details |
| POST | `/book-appointment` | ✅ | Book appointment |
| GET | `/appointments` | ✅ | List user's appointments |
| POST | `/cancel-appointment` | ✅ | Cancel appointment |
| POST | `/payment-razorpay` | ✅ | Initialize Razorpay payment |
| POST | `/verify-razorpay` | ✅ | Verify payment |
| GET | `/stats` | ❌ | Platform statistics |

### **Doctor Routes** (`/api/doctor`)
| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| POST | `/register` | ❌ | Doctor registration |
| POST | `/login` | ❌ | Doctor login |
| GET | `/appointments` | ✅ | Doctor's appointments |
| POST | `/complete-appointment` | ✅ | Mark as completed |
| GET | `/dashboard` | ✅ | Doctor statistics |
| GET | `/profile` | ✅ | Get doctor profile |
| POST | `/update-profile` | ✅ | Update doctor info |
| GET | `/list` | ❌ | List all doctors |

### **Admin Routes** (`/api/admin`)
| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| POST | `/login` | ❌ | Admin login |
| GET | `/dashboard` | ✅ | Admin statistics |
| POST | `/add-doctor` | ✅ | Add new doctor |
| POST | `/update-doctor` | ✅ | Update doctor profile |
| GET | `/doctors` | ✅ | List all doctors |
| GET | `/appointments` | ✅ | All appointments |
| POST | `/cancel-appointment` | ✅ | Cancel appointment |

---

## 🔐 Authentication & Authorization

### JWT Strategy
- **Three separate JWT secrets**:
  - `JWT_USER_SECRET` for patients
  - `JWT_DOCTOR_SECRET` for doctors
  - `JWT_ADMIN_SECRET` for admins

- **Token Storage**: localStorage on client side
- **Header Format**: `token` header in API requests
- **Middleware**: `authUser`, `authDoctor`, `authAdmin` validate tokens

### Authentication Flow

#### Patient Login
```
1. User submits email & password
2. Backend validates credentials (bcrypt comparison)
3. JWT token generated with user ID
4. Token sent to frontend
5. Token stored in localStorage
6. Token included in subsequent requests (headers)
```

#### Doctor Login
```
Similar to patient with JWT_DOCTOR_SECRET
```

#### Admin Login
```
1. Email & password compared to env variables
2. If match, JWT token generated
3. Token uses email+password as payload
```

---

## 💳 Payment Integration

### Razorpay Implementation

#### Payment Flow
```
1. User initiates payment for appointment
2. Frontend calls /api/user/payment-razorpay with order amount
3. Backend creates Razorpay order
4. Frontend displays Razorpay checkout modal
5. User completes payment
6. Razorpay callback verifies payment
7. Backend calls /api/user/verify-razorpay
8. Appointment marked as paid
```

#### Key Details
- **Amount Format**: In paise (cents)
- **Currency**: INR (Indian Rupees)
- **Order Creation**: Server-side using Razorpay SDK
- **Payment Verification**: HMAC SHA256 signature verification
- **Supported Methods**: Cards, UPI, Net Banking, Wallets

---

## 📁 Directory Structure & Key Files

### Backend Structure
```
backend/
├── server.js                    # Express app entry point
├── mockDb.js                    # Mock data & database simulation
├── package.json
├── config/
│   ├── mongodb.js              # MongoDB connection
│   └── cloudinary.js           # Cloudinary setup
├── controllers/
│   ├── userController.js        # User operations (82 KB)
│   ├── doctorController.js      # Doctor operations
│   └── adminController.js       # Admin operations
├── models/
│   ├── userModel.js             # User schema (mock)
│   ├── doctorModel.js           # Doctor schema (mock)
│   └── appointmentModel.js      # Appointment schema (mock)
├── middleware/
│   ├── authUser.js              # JWT validation for users
│   ├── authDoctor.js            # JWT validation for doctors
│   ├── authAdmin.js             # JWT validation for admins
│   └── multer.js                # File upload handler
└── routes/
    ├── userRoute.js             # User endpoints
    ├── doctorRoute.js           # Doctor endpoints
    └── adminRoute.js            # Admin endpoints
```

### Frontend Structure
```
frontend/
├── src/
│   ├── App.jsx                  # Main routing component
│   ├── main.jsx                 # React entry point
│   ├── index.css                # Global styles
│   ├── assets/
│   │   └── assets.js            # Doctors & speciality data
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Banner.jsx
│   │   ├── Header.jsx
│   │   ├── SpecialityMenu.jsx   # Speciality filter
│   │   ├── RelatedDoctors.jsx
│   │   └── TopDoctors.jsx
│   ├── context/
│   │   └── AppContext.jsx       # Global app state
│   └── pages/
│       ├── Home.jsx
│       ├── Doctors.jsx          # Browse doctors
│       ├── Login.jsx            # Unified login
│       ├── Appointment.jsx      # Book appointment
│       ├── MyAppointments.jsx
│       ├── MyProfile.jsx
│       ├── About.jsx
│       ├── Contact.jsx
│       ├── Careers.jsx          # Job listings
│       └── PrivacyPolicy.jsx
├── vite.config.js
├── tailwind.config.js
└── package.json
```

### Admin & Doctor Similar Structures
- Both use Vite + React 19
- Context API for state management
- Sidebar navigation
- Similar component structure

---

## 🎨 Frontend Technology Stack

### State Management
- **Context API**: Global state for authentication, doctors, user data
- **localStorage**: Persist authentication tokens
- **React Hooks**: useState, useEffect, useContext

### Styling
- **Tailwind CSS v4**: Utility-first CSS framework
- **Custom CSS**: index.css for additional styling

### Routing
- **React Router v6**: Client-side routing
  - Dynamic routes for doctor specialities
  - Protected routes (conditional rendering)
  - Nested routes in dashboards

### UI Components
- **React Toastify**: Toast notifications for feedback
- **Custom Components**: Navbar, Sidebar, Cards, Modals

### API Communication
- **Axios**: HTTP client for backend requests
- **Interceptors**: Token attachment to headers
- **Error Handling**: Try-catch blocks with user feedback

---

## 🚀 Key Features Analysis

### 1. **Appointment Booking System**
- 7-day slot selection (configurable)
- Doctor availability checking
- Slot conflict prevention (slots_booked tracking)
- Auto-cleanup of past slots
- Responsive grid layout (7 columns)

### 2. **Doctor Discovery**
- Filter by 6 specialities
- Search functionality
- Sorted by rating/experience
- Detailed doctor profiles
- Related doctors recommendation

### 3. **Payment Processing**
- Razorpay integration
- Order creation & verification
- Payment status tracking
- Refund capability for cancelled appointments
- Transaction history

### 4. **Multi-role Authentication**
- Separate login screens
- Role-specific dashboards
- Different JWT secrets
- Protected routes per role
- Session management

### 5. **Admin Controls**
- Doctor onboarding
- Appointment management
- Availability toggling
- Statistics tracking
- Platform oversight

---

## 🔧 Configuration & Environment Variables

### Backend (.env)
```env
# Database
MONGODB_URI=mongodb+srv://...

# Server
PORT=4000

# JWT Secrets (should be strong, unique)
JWT_USER_SECRET=your_user_secret_key
JWT_DOCTOR_SECRET=your_doctor_secret_key
JWT_ADMIN_SECRET=your_admin_secret_key

# Admin Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Razorpay
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

### Frontend (.env)
```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## 🗂️ Data Flow Diagrams

### Appointment Booking Flow
```
Patient Login → Browse Doctors → Select Doctor → 
Choose Slot → Confirm Details → Pay (Razorpay) → 
Appointment Created → Doctor Views in Dashboard → 
Complete Appointment → Patient Receives Feedback
```

### Doctor Registration Flow
```
Admin Panel → Add Doctor Form → Upload Image (Cloudinary) → 
Create Doctor in DB → Email Verification (if enabled) → 
Doctor Can Login → Configure Availability & Fees
```

### Payment Verification Flow
```
Payment Request → Razorpay Order Created → User Completes Payment →
Webhook/Verification → HMAC Signature Check → 
Appointment Marked as Paid → Confirmation Email/SMS
```

---

## ⚠️ Current Implementation Notes

### Mock Database
- **Status**: Currently using mock database (mockDb.js)
- **Implementation**: In-memory data structures
- **Limitation**: Data persists only during runtime (not persistent)
- **Production**: Should replace with actual MongoDB/Mongoose models
- **Note**: Database connection commented out in server.js

### Image Handling
- **Fallback**: Uses UI avatars (online service) when Cloudinary not available
- **Fallback Method**: Base64 encoding for local development
- **Production**: Should use Cloudinary for all uploads

### Security Considerations
- ⚠️ Admin credentials visible in .env (consider OAuth instead)
- ⚠️ No HTTPS enforcement noted
- ✅ Password hashing implemented (bcrypt)
- ✅ JWT token-based auth (stateless)
- ⚠️ No rate limiting visible
- ⚠️ No input sanitization visible

---

## 📊 Default Mock Data

### Sample Patient Account
- **Email**: patient@example.com
- **Password**: SukritiHealth@2026
- **Name**: Default Patient

### Sample Doctor Account
- **Email**: doctor@example.com
- **Password**: SukritiHealth@2026
- **Speciality**: General physician
- **Fee**: $50

### Additional Doctors
- Multiple mock doctors from assets.js
- Email format: `doc1@example.com`, `doc2@example.com`, etc.
- Same password for all: SukritiHealth@2026

---

## 🎯 Business Logic Highlights

### 1. **Slot Management**
- Doctor defines availability
- System tracks booked slots
- Prevents double-booking
- Time slot format: HH:MM to HH:MM

### 2. **Fee Structure**
- Doctors set own consultation fees
- Range: $10-$20 (configurable)
- Admin can approve/modify
- No base fee or commission visible

### 3. **Appointment Lifecycle**
```
Booking → Confirmation → Payment → Scheduled → 
Completed/Cancelled → Review
```

### 4. **Doctor Availability**
- Toggle on/off by doctor
- Toggle on/off by admin
- Affects slot visibility
- Auto-check in booking

### 5. **Statistical Tracking**
- Total doctors count
- Total patients count
- Total appointments
- Revenue/earnings
- Completion rates (implied)

---

## 🔄 Integration Points

### External Services
1. **Cloudinary**: Image upload & CDN
2. **Razorpay**: Payment processing
3. **MongoDB Atlas**: Cloud database
4. **JWT**: Token generation & validation

### Frontend-Backend Communication
- REST API (JSON)
- Axios for HTTP requests
- Token in headers
- CORS enabled

---

## 📈 Scalability Considerations

### Current Implementation
- **Single Backend**: Handles all three frontends
- **Stateless Design**: Can be horizontally scaled
- **JWT Tokens**: No session storage needed
- **Static Assets**: Can be CDN-served

### Potential Improvements
- Load balancing for multiple backend instances
- Database indexing on email, userId, docId
- Caching layer (Redis) for doctor list
- Message queue for async operations (email notifications)
- WebSocket for real-time appointment updates

---

## 📝 Code Quality & Best Practices

### Strengths
✅ Modular structure (separate controllers, routes, models)
✅ Environment-based configuration
✅ Error handling with try-catch blocks
✅ Input validation (email, password strength)
✅ Password security (bcrypt hashing)
✅ Stateless architecture (JWT)
✅ Responsive UI design (Tailwind)
✅ Component reusability

### Areas for Improvement
⚠️ No TypeScript (type safety)
⚠️ Limited error messages
⚠️ No comprehensive logging
⚠️ No unit tests visible
⚠️ No API documentation (Swagger/OpenAPI)
⚠️ Hardcoded admin credentials
⚠️ No request validation middleware
⚠️ Limited rate limiting

---

## 🚀 Getting Started Commands

```bash
# Backend Setup
cd backend
npm install
# Create .env file with required variables
npm run dev  # Start with nodemon

# Frontend Setup
cd frontend
npm install
npm run dev  # Starts at localhost:5173

# Doctor Dashboard Setup
cd doctor
npm install
npm run dev  # Starts at localhost:5174

# Admin Panel Setup
cd admin
npm install
npm run dev  # Starts at localhost:5175
```

---

## 📱 Testing Credentials

### Patient
- Email: patient@example.com
- Password: SukritiHealth@2026

### Doctor
- Email: doctor@example.com
- Password: SukritiHealth@2026

### Admin
- Email: admin@example.com
- Password: admin_password (from .env)

---

## 🎓 Learning Outcomes from Project

This project demonstrates:
- **Full-stack development**: Backend + 3 independent frontends
- **MERN stack proficiency**: MongoDB, Express, React, Node.js
- **Authentication patterns**: JWT, role-based access
- **Payment integration**: Razorpay implementation
- **File uploads**: Cloudinary integration
- **State management**: Context API in React
- **Responsive design**: Mobile-first approach
- **API design**: RESTful endpoints structure
- **Security**: Password hashing, token validation
- **Database design**: Schema design for healthcare domain

---

## 🔮 Future Enhancement Ideas

1. **Video Consultation**: Integrate WebRTC for online consultations
2. **Notifications**: Email/SMS alerts for appointments
3. **Reviews & Ratings**: Patient feedback system
4. **Prescription Management**: Digital prescriptions
5. **Medical Records**: Secure patient history storage
6. **Insurance Integration**: Insurance plan verification
7. **Mobile App**: Native iOS/Android versions
8. **Analytics Dashboard**: Advanced metrics & reporting
9. **Multi-language Support**: Internationalization
10. **Dark Mode**: Theme switching

---

## 📞 Project Summary

**SukritiHealth** is a well-structured, feature-rich healthcare platform that successfully implements:
- Multi-role authentication with JWT
- Comprehensive appointment management
- Secure payment processing
- Admin controls & oversight
- Responsive, user-friendly interfaces
- Scalable backend architecture

The project is suitable for **learning full-stack development** and demonstrates professional practices in **healthcare software development**.
