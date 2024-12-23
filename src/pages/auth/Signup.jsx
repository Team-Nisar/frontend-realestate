import { useState } from 'react';
import Layout from '../../components/Layout/Layout';

const RegisterPage = () => {
  const [role, setRole] = useState('');

  return (
   <Layout title={'Signup'}>
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded">
      <h2 className="text-center text-2xl mb-6">Register</h2>
      <input
        type="text"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        placeholder="Enter Mobile Number"
      />
      <input
        type="text"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        placeholder="Enter OTP"
      />
      <div className="mb-4">
        <label className="block text-sm font-medium">Select Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="admin">Admin</option>
          <option value="agent">Agent</option>
          <option value="user">User</option>
        </select>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded">Register</button>
    </div>
    </Layout>
  );
};

export default RegisterPage;
