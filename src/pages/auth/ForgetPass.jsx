import { useState } from 'react';
import Layout from '../../components/Layout/Layout';

const ForgetPasswordPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSendOtp = () => {
    alert(`OTP sent to ${mobileNumber}`);
  };

  return (
   <Layout title={'ForgetPassword'}>
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded">
      <h2 className="text-center text-2xl mb-6">Forget Password</h2>
      <input
        type="text"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <button
        onClick={handleSendOtp}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Send OTP
      </button>
    </div>
    </Layout>
  );
};

export default ForgetPasswordPage;
