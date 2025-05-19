import axios from 'axios';

// Create axios instance with base URL from environment variables
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth services - sesuaikan dengan endpoint backend Anda
export const authService = {
  login: (credentials) => api.post('/users/login', credentials),
  register: (userData) => api.post('/users/register', userData),
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};

// Parking services - sesuaikan dengan endpoint backend Anda
export const parkingService = {
  getSlots: () => api.get('/slots'),
  getSlotById: (id) => api.get(`/slots/${id}`),
  bookSlot: (bookingData) => api.post('/bookings', bookingData),
};

// User services - sesuaikan dengan endpoint backend Anda
export const userService = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (userData) => api.put('/users/profile', userData),
};

// Export the base API for direct use if needed
export default api;