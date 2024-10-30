import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Mock registration logic (replace with your backend logic)
    try {
      // Example: await registerUser(username, email, password);
      console.log('Registering:', { username, email, password });

      // Simulate success
      setTimeout(() => {
        setLoading(false);
        navigate('/welcome'); // Navigate to a welcome page or dashboard
      }, 1000);
    } catch (err) {
      setLoading(false);
      setError('Registration failed. Please try again.'); // Handle registration error
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" 
         style={{ backgroundImage: `url('/regiimage.jpg')` }}> 
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm bg-opacity-20">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="submit"
            disabled={loading}
            className={`bg-gray-800 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
