import bcrypt from 'bcrypt';

const generateHash = (password) => bcrypt.hashSync(password, 10);

export const mockUsers = [
  {
    _id: 'patient_1',
    name: 'Default Patient',
    email: 'patient@example.com',
    password: generateHash('SukritiHealth@2026'),
    image: 'https://ui-avatars.com/api/?name=Default+Patient&background=EEF2FF&color=5F6FFF',
    address: { line1: '123 Main St', line2: '' },
    gender: 'Male',
    dob: '1990-01-01',
    phone: '1234567890'
  }
];

import { doctors as assetDoctors } from '../frontend/src/assets/assets.js';

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

export const mockAppointments = [];

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

// Mock Model factory
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
