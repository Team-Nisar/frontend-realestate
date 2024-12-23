import { useState } from 'react';
import Layout from '../../components/Layout/Layout';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      alert('Password reset successful');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
   <Layout>
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded">
      <h2 className="text-center text-2xl mb-6">Reset Password</h2>
      <input
        type="password"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        placeholder="Previous Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        type="password"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        onClick={handleResetPassword}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Reset Password
      </button>
    </div>
    </Layout>
  );
};

export default ResetPasswordPage;
