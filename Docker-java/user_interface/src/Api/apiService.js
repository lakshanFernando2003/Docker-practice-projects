import axios from 'axios';

// Get API URL from environment or use default
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add response interceptor for debugging
apiClient.interceptors.response.use(
  (response) => {
    console.log(`API Response ${response.config.url}: Status ${response.status}`);
    return response.data;
  },
  (error) => {
    console.error('API Error:', error.message);
    return Promise.reject(error);
  }
);

const apiService = {
  // Get all users
  getUsers: async () => {
    try {
      return await apiClient.get('/users');
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  // Get user by ID
  getUserById: async (id) => {
    try {
      return await apiClient.get(`/users/${id}`);
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      throw error;
    }
  },

  // Create a new user
  createUser: async (userData) => {
    try {
      return await apiClient.post('/users', userData);
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  // Update a user
  updateUser: async (id, userData) => {
    try {
      return await apiClient.put(`/users/${id}`, userData);
    } catch (error) {
      console.error(`Error updating user ${id}:`, error);
      throw error;
    }
  },

  // Delete a user
  deleteUser: async (id) => {
    try {
      return await apiClient.delete(`/users/${id}`);
    } catch (error) {
      console.error(`Error deleting user ${id}:`, error);
      throw error;
    }
  },
};

export default apiService;
