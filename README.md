# 🏥 SukritiHealth — Doctor Appointment Booking Platform

A full-stack, multi-panel doctor appointment booking web application built with the MERN stack. SukritiHealth connects patients with experienced doctors across multiple specialities, providing seamless online booking, role-based dashboards, and a complete hospital management ecosystem.

---

## 🏗️ Architecture

The project consists of **four separate applications** sharing a single backend:

```
SukritiH/
├── backend/       → Node.js + Express REST API (shared by all panels)
├── frontend/      → Patient-facing website (React + Vite)
├── doctor/        → Doctor dashboard (React + Vite)
└── admin/         → Admin panel (React + Vite)
```

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Backend** | Node.js, Express.js, MongoDB, Mongoose, JWT (separate secrets per role), bcrypt, Cloudinary, Razorpay SDK, multer, cors, dotenv, validator |
| **Frontend** | React 18, Vite, Tailwind CSS, React Router DOM v6, Axios, React Toastify, Context API |
| **Database** | MongoDB Atlas (database: `sukritihealth`) |
| **Payments** | Razorpay integration |
| **Image Hosting** | Cloudinary |

---

## ✨ Features

### 🩺 Patient Portal (Frontend — `localhost:5173`)

| Feature | Description |
|---------|-------------|
| **Unified Login** | Single login page with tabs for Patient, Doctor, and Admin authentication |
| **Doctor Directory** | Browse doctors by 6 specialities — General Physician, Gynecologist, Dermatologist, Pediatrician, Neurologist, Gastroenterologist |
| **Doctor Profiles** | Detailed profiles with education background, graduation college & year, specialist field, and achievements |
| **Appointment Booking** | 7-day slot selector with responsive 7-column grid (no horizontal scrolling) |
| **My Appointments** | View, cancel, and pay for booked appointments |
| **My Profile** | Edit personal details — name, phone, address, gender, DOB |
| **Careers Page** | 12 hospital job roles across 4 departments with Apply Now modal |
| **Privacy Policy** | 9-section comprehensive hospital rules, role responsibilities, and prohibited actions |
| **Online Payments** | Razorpay checkout integration |

### 👨‍⚕️ Doctor Dashboard (`localhost:5174`)

| Feature | Description |
|---------|-------------|
| **Appointment Management** | View all booked appointments, mark as completed |
| **Profile Settings** | Update fees ($10-$20 range), address, and availability |
| **Dashboard** | Earnings overview, patient count, and appointment statistics |

### 🛡️ Admin Panel (`localhost:5175`)

| Feature | Description |
|---------|-------------|
| **Doctor Management** | Add new doctors with image upload (Cloudinary), edit profiles |
| **Appointment Oversight** | View and cancel any appointment across the platform |
| **Dashboard** | Platform-wide statistics — total doctors, patients, appointments |
| **Availability Control** | Toggle doctor availability on/off |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **MongoDB** (Atlas or local instance)
- **Cloudinary** account (image uploads)
- **Razorpay** account (payment processing)

### 1. Clone the Repository

```bash
git clone https://github.com/riteshpandey2024-cyber/SukritiH.git
cd SukritiH
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `/backend/.env`:

```env
MONGODB_URI=mongodb+srv://your_connection_string
PORT=4000
JWT_USER_SECRET=your_user_secret
JWT_DOCTOR_SECRET=your_doctor_secret
JWT_ADMIN_SECRET=your_admin_secret
ADMIN_EMAIL=admin@sukritihealth.com
ADMIN_PASSWORD=your_admin_password
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
CURRENCY=USD
```

```bash
npm run dev
```

Backend runs on **`http://localhost:4000`**

### 3. Frontend (Patient App)

```bash
cd frontend
npm install
npm run dev
```

Runs on **`http://localhost:5173`**

### 4. Doctor Panel

```bash
cd doctor
npm install
npm run dev
```

Runs on **`http://localhost:5174`**

### 5. Admin Panel

```bash
cd admin
npm install
npm run dev
```

Runs on **`http://localhost:5175`**

### Frontend Environment (all 3 apps)

Each frontend app needs a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## 📁 Project Structure

```
SukritiH/
│
├── backend/
│   ├── config/          → MongoDB & Cloudinary configuration
│   ├── controllers/     → adminController, doctorController, userController
│   ├── middlewares/      → authUser, authAdmin, authDoctor, multer
│   ├── models/           → userModel, doctorModel, appointmentModel
│   ├── routes/           → adminRoute, doctorRoute, userRoute
│   └── server.js         → Express server entry point
│
├── frontend/
│   ├── src/
│   │   ├── assets/       → Doctor data (fees $10-$20, profiles with achievements)
│   │   ├── components/   → Navbar, Footer, Header, Banner, SpecialityMenu, TopDoctors, RelatedDoctors
│   │   ├── context/      → AppContext (global state)
│   │   └── pages/        → Home, Doctors, Appointment, Login, About, Contact, Careers, PrivacyPolicy, MyProfile, MyAppointments
│   └── index.html
│
├── doctor/
│   ├── src/
│   │   ├── components/   → Navbar, Sidebar
│   │   ├── context/      → DoctorContext
│   │   └── pages/        → Login, DoctorDashboard, DoctorAppointments, DoctorProfile
│   └── index.html
│
├── admin/
│   ├── src/
│   │   ├── components/   → Navbar, Sidebar
│   │   ├── context/      → AdminContext
│   │   └── pages/        → Login, Dashboard, AllAppointments, AddDoctor, DoctorsList
│   └── index.html
│
└── README.md
```

---

## 🔐 Authentication

The platform uses **JWT-based authentication** with separate secrets for each role:

| Role | Token Key | JWT Secret |
|------|-----------|------------|
| Patient | `token` | `JWT_USER_SECRET` |
| Doctor | `dToken` | `JWT_DOCTOR_SECRET` |
| Admin | `aToken` | `JWT_ADMIN_SECRET` |

All tokens are stored in `localStorage` and sent via request headers.

---

## 📄 API Endpoints

### User Routes (`/api/user`)
- `POST /register` — Patient registration
- `POST /login` — Patient login
- `GET /get-profile` — Get patient profile
- `POST /update-profile` — Update patient profile
- `POST /book-appointment` — Book a doctor appointment
- `GET /appointments` — List patient appointments
- `POST /cancel-appointment` — Cancel appointment
- `POST /payment-razorpay` — Initiate Razorpay payment
- `POST /verify-razorpay` — Verify payment status

### Doctor Routes (`/api/doctor`)
- `POST /login` — Doctor login
- `GET /appointments` — Get doctor's appointments
- `POST /complete-appointment` — Mark appointment complete
- `POST /cancel-appointment` — Cancel appointment
- `GET /profile` — Get doctor profile
- `POST /update-profile` — Update doctor profile
- `GET /dashboard` — Doctor dashboard data

### Admin Routes (`/api/admin`)
- `POST /login` — Admin login
- `POST /add-doctor` — Add new doctor
- `GET /all-doctors` — List all doctors
- `POST /change-availability` — Toggle doctor availability
- `GET /appointments` — All appointments
- `POST /cancel-appointment` — Cancel any appointment
- `GET /dashboard` — Admin dashboard data

---

## 🎨 Design System

The frontend uses a unified Tailwind CSS design token system:

| Token | Purpose |
|-------|---------|
| `primary` / `primary-hover` | Brand color (#5F6FFF) |
| `primary-light` | Light accent backgrounds |
| `text-dark` / `text-muted` | Typography hierarchy |
| `border` / `surface` | Borders and card backgrounds |
| `success` | Availability indicators |

---

## 👨‍💻 Developer

**Ritesh Pandey**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/ritesh-pandey2024/)

---

## 📜 License

MIT License — feel free to use, modify, and distribute.
