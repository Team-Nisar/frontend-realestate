// src/hooks/auth.js

import { useMutation, useQueryClient } from '@tanstack/react-query';  // Import React Query hooks
import { login, verifyOtp } from '../apis/auth';  // Import API functions

// useLogin hook to manage the login mutation
export const useLogin = () => {
  const queryClient = useQueryClient();  // Get the QueryClient instance

  return useMutation({
    mutationFn: login,  // Define the mutation function (API call)
    onSuccess: (data) => {
      // On successful login, invalidate queries related to 'user' to ensure fresh data
      queryClient.invalidateQueries(['user']);
    },
    onError: (error) => {
      console.error('Login failed:', error);  // Handle error appropriately
    },
  });
};

// useVerifyOtp hook to manage the OTP verification mutation
export const useVerifyOtp = () => {
  const queryClient = useQueryClient();  // Get the QueryClient instance

  return useMutation({
    mutationFn: verifyOtp,  // Define the mutation function (API call)
    onSuccess: (data) => {
      // On successful OTP verification, invalidate queries related to 'user' to ensure fresh data
      queryClient.invalidateQueries(['user']);
    },
    onError: (error) => {
      console.error('Verification failed:', error);  // Handle error appropriately
    },
  });
};
