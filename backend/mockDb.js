import bcrypt from 'bcrypt';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateHash = (password) => bcrypt.hashSync(password, 10);

// --- File-backed patient storage ---
const PATIENTS_FILE = path.join(__dirname, 'data', 'patients.json');

const loadPatientsFromFile = () => {
  try {
    const data = fs.readFileSync(PATIENTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const savePatientsToFile = (patients) => {
  fs.writeFileSync(PATIENTS_FILE, JSON.stringify(patients, null, 2), 'utf-8');
};

// Load patients from JSON file (persists across restarts)
export const mockUsers = loadPatientsFromFile();
console.log(`📋 Loaded ${mockUsers.length} patient(s) from patients.json`);

// --- File-backed appointment storage ---
const APPOINTMENTS_FILE = path.join(__dirname, 'data', 'appointments.json');

const loadAppointmentsFromFile = () => {
  try {
    const data = fs.readFileSync(APPOINTMENTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

export const saveAppointmentsToFile = (appointments) => {
  fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify(appointments, null, 2), 'utf-8');
};

// Load appointments from JSON file (persists across restarts)
export const mockAppointments = loadAppointmentsFromFile();
console.log(`📅 Loaded ${mockAppointments.length} appointment(s) from appointments.json`);

// Inline doctors data (can't import from frontend assets.js — it has .png imports that Node.js can't handle)
const assetDoctors = [
  {
    _id: 'doc1',
    name: 'Dr. Richard James',
    image: 'https://ui-avatars.com/api/?name=Richard+James&background=EEF2FF&color=5F6FFF',
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Richard James has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 15,
    available: true,
    address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' },
  },
  {
    _id: 'doc2',
    name: 'Dr. Emily Larson',
    image: 'https://ui-avatars.com/api/?name=Emily+Larson&background=FECDD3&color=F472B6',
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Emily Larson has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 18,
    available: true,
    address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' },
  },
  {
    _id: 'doc3',
    name: 'Dr. Sarah Patel',
    image: 'https://ui-avatars.com/api/?name=Sarah+Patel&background=EEF2FF&color=A78BFA',
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Year',
    about: 'Dr. Sarah Patel has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 12,
    available: true,
    address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' },
  },
  {
    _id: 'doc4',
    name: 'Dr. Christopher Lee',
    image: 'https://ui-avatars.com/api/?name=Christopher+Lee&background=EEF2FF&color=60A5FA',
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about: 'Dr. Christopher Lee has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 14,
    available: true,
    address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' },
  },
  {
    _id: 'doc5',
    name: 'Dr. Jennifer Garcia',
    image: 'https://ui-avatars.com/api/?name=Jennifer+Garcia&background=FECDD3&color=818CF8',
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Jennifer Garcia has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 20,
    available: true,
    address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' },
  },
  {
    _id: 'doc6',
    name: 'Dr. Andrew Williams',
    image: 'https://ui-avatars.com/api/?name=Andrew+Williams&background=EEF2FF&color=34D399',
    speciality: 'Gastroenterologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Andrew Williams has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 16,
    available: true,
    address: { line1: '67th Cross, Richmond', line2: 'Circle, Ring Road, London' },
  },
  {
    _id: 'doc7',
    name: 'Dr. Christopher Davis',
    image: 'https://ui-avatars.com/api/?name=Christopher+Davis&background=EEF2FF&color=5F6FFF',
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Christopher Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 13,
    available: true,
    address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' },
  },
  {
    _id: 'doc8',
    name: 'Dr. Timothy White',
    image: 'https://ui-avatars.com/api/?name=Timothy+White&background=EEF2FF&color=F472B6',
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Timothy White has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 19,
    available: true,
    address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' },
  },
  {
    _id: 'doc9',
    name: 'Dr. Ava Mitchell',
    image: 'https://ui-avatars.com/api/?name=Ava+Mitchell&background=FECDD3&color=A78BFA',
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Year',
    about: 'Dr. Ava Mitchell has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 10,
    available: true,
    address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' },
  },
  {
    _id: 'doc10',
    name: 'Dr. Jeffrey King',
    image: 'https://ui-avatars.com/api/?name=Jeffrey+King&background=EEF2FF&color=60A5FA',
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about: 'Dr. Jeffrey King has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 17,
    available: true,
    address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' },
  },
];

export const mockDoctors = [
  {
    _id: 'doctor_1',
    name: 'Dr. Default',
    email: 'doctor@example.com',
    password: generateHash('SukritiHealth@2026'),
    image: 'https://ui-avatars.com/api/?name=Doc&background=EEF2FF&color=5F6FFF',
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '5 Years',
    about: 'Experienced mock doctor.',
    fees: 50,
    address: { line1: '123 Clinic St', line2: '' },
    available: true,
    slots_booked: {},
    date: Date.now()
  },
  ...assetDoctors.map((doc, index) => ({
    ...doc,
    email: `doc${index + 1}@example.com`,
    password: generateHash('SukritiHealth@2026'),
    slots_booked: {},
    date: Date.now()
  }))
];

// Helper to simulate Mongoose query objects with .select()
class QueryBuilder {
  constructor(data) {
    this.data = data;
  }
  select(fields) {
    if (fields === '-password') {
      if (Array.isArray(this.data)) {
        return this.data.map(item => {
          const { password, ...rest } = item;
          return rest;
        });
      } else if (this.data) {
        const { password, ...rest } = this.data;
        return rest;
      }
    }
    return this.data;
  }
  then(resolve, reject) {
    resolve(this.data);
  }
}

// Mock Model factory (in-memory only — for doctors and appointments)
export const createMockModel = (mockDataArray) => {
  class MockModel {
    constructor(data) {
      this.data = data;
      this._id = 'id_' + Date.now() + Math.random().toString(36).substr(2, 9);
      Object.assign(this, data);
    }

    async save() {
      const savedDoc = { ...this.data, _id: this._id };
      mockDataArray.push(savedDoc);
      return savedDoc;
    }

    static find(query = {}) {
      let result = mockDataArray;
      if (query.email) {
        result = result.filter(item => item.email === query.email);
      }
      if (query.userId) {
         result = result.filter(item => item.userId === query.userId);
      }
      if (query.docId) {
         result = result.filter(item => item.docId === query.docId);
      }
      return new QueryBuilder(result);
    }

    static findOne(query) {
      const result = mockDataArray.find(item => {
        for (let key in query) {
          if (item[key] !== query[key]) return false;
        }
        return true;
      });
      return new QueryBuilder(result);
    }

    static findById(id) {
      const result = mockDataArray.find(item => item._id === id);
      return new QueryBuilder(result);
    }

    static findByIdAndUpdate(id, updateData) {
      const index = mockDataArray.findIndex(item => item._id === id);
      if (index !== -1) {
        mockDataArray[index] = { ...mockDataArray[index], ...updateData };
        return new QueryBuilder(mockDataArray[index]);
      }
      return new QueryBuilder(null);
    }

    static countDocuments() {
      return Promise.resolve(mockDataArray.length);
    }
  }

  return MockModel;
};

// File-backed Model factory (persists to JSON file)
export const createFileBackedModel = (mockDataArray, saveToFile, idPrefix = 'patient_') => {
  class FileBackedModel {
    constructor(data) {
      this.data = data;
      this._id = idPrefix + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
      Object.assign(this, data);
    }

    async save() {
      const savedDoc = { ...this.data, _id: this._id };
      mockDataArray.push(savedDoc);
      saveToFile(mockDataArray);  // Persist to JSON file
      console.log(`💾 Saved item (${this._id}) to JSON file (total: ${mockDataArray.length})`);
      return savedDoc;
    }

    static find(query = {}) {
      let result = mockDataArray;
      if (query.email) {
        result = result.filter(item => item.email === query.email);
      }
      if (query.userId) {
         result = result.filter(item => item.userId === query.userId);
      }
      if (query.docId) {
         result = result.filter(item => item.docId === query.docId);
      }
      return new QueryBuilder(result);
    }

    static findOne(query) {
      const result = mockDataArray.find(item => {
        for (let key in query) {
          if (item[key] !== query[key]) return false;
        }
        return true;
      });
      return new QueryBuilder(result);
    }

    static findById(id) {
      const result = mockDataArray.find(item => item._id === id);
      return new QueryBuilder(result);
    }

    static findByIdAndUpdate(id, updateData) {
      const index = mockDataArray.findIndex(item => item._id === id);
      if (index !== -1) {
        mockDataArray[index] = { ...mockDataArray[index], ...updateData };
        saveToFile(mockDataArray);  // Persist to JSON file
        return new QueryBuilder(mockDataArray[index]);
      }
      return new QueryBuilder(null);
    }

    static countDocuments() {
      return Promise.resolve(mockDataArray.length);
    }
  }

  return FileBackedModel;
};
