# SukritiHealth — Doctor Appointment Booking Platform

A full-stack doctor appointment booking web application with four separate applications:

- **Backend** — Node.js + Express REST API (shared by all panels)
- **Frontend** — Patient-facing website (React + Vite)
- **Doctor** — Doctor dashboard (React + Vite)
- **Admin** — Admin panel (React + Vite)

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Backend | Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, Cloudinary, Razorpay, multer |
| Frontend | React 18, Vite, Tailwind CSS, React Router v6, Axios, React Toastify, Context API |

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (Atlas or local)
- Cloudinary account (for image uploads)
- Razorpay account (for payments)

### 1. Backend Setup

```bash
cd backend
npm install
# Edit .env with your credentials
npm run dev
```

The backend runs on `http://localhost:4000`.

### 2. Frontend (Patient App)

```bash
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:5173`.

### 3. Doctor Panel

```bash
cd doctor
npm install
npm run dev
```

Runs on `http://localhost:5174`.

### 4. Admin Panel

```bash
cd admin
npm install
npm run dev
```

Runs on `http://localhost:5175`.

## Environment Variables

### Backend (`/backend/.env`)

```
MONGODB_URI=mongodb+srv://...
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

### All Frontend Apps (`.env`)

```
VITE_BACKEND_URL=http://localhost:4000
```

## Features

### Patient Portal (Frontend)
- Browse doctors by specialty
- View doctor profiles with detailed info
- Book appointments with real-time slot availability
- Manage appointments (view, cancel, pay)
- User profile management
- Online payment via Razorpay

### Doctor Dashboard
- View appointment schedule
- Mark appointments as complete
- Update profile (fees, address, availability)
- Dashboard with earnings and patient stats

### Admin Panel
- Add and manage doctors
- View and cancel all appointments
- Dashboard with platform statistics
- Toggle doctor availability

## License

MIT
# SukritiH
