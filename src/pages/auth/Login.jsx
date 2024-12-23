import { useState } from 'react';
import Layout from '../../components/Layout/Layout';

const LoginPage = () => {
  const [otp, setOtp] = useState('');

  const handleOtpSubmit = () => {
    // Logic for OTP verification
    alert('OTP submitted');
  };

  return (
   <Layout title={'Login'}>
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded">
      <h2 className="text-center text-2xl mb-6">Login</h2>
      <input
        type="text"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        placeholder="Enter Mobile Number"
      />
      <input
        type="text"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button
        onClick={handleOtpSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Submit OTP
      </button>
    </div>
    </Layout>
  );
};

export default LoginPage;
