// src/main.jsx (or index.jsx)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClientProvider
import App from './App'; // Your main App component

const queryClient = new QueryClient(); // Initialize a new QueryClient

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>  {/* Wrap App with QueryClientProvider */}
    <App />
  </QueryClientProvider>
);
