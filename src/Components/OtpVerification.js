// OtpVerification.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Entered OTP:', otp);
    // OTP logic here
    navigate('/reset-password'); 
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url('/regiimage.jpg')` }} 
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm animate-fadeIn  bg-opacity-20">
        <h2 className="text-3xl font-bold text-center mb-6">OTP Verification</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 w-full"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
