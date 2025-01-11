// src/apis/auth.js

import axios from 'axios';
import { baseURL } from '../constant';  // Ensure baseURL is correct

// Create an axios instance for API requests
const apiClient = axios.create({
  baseURL: `${baseURL}/api/auth`, // Base URL for authentication-related endpoints
});

// API call for login
export const login = async (data) => {
  const response = await apiClient.post('/login', data);  // Post login data
  return response.data;  // Assuming the API returns the necessary data
};

// API call for verifying OTP
export const verifyOtp = async (data) => {
  const response = await apiClient.post('/verify-login-otp', data);  // Post OTP verification data
  return response.data;  // Assuming the API returns the necessary data
};
