import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 

const Home = () => {
  const navigate = useNavigate();
  const [isHoveredLogin, setIsHoveredLogin] = useState(false);
  const [isHoveredRegister, setIsHoveredRegister] = useState(false);

  // Handle Login with bounce animation
  const handleLogin = () => {
    const button = document.getElementById("loginButton");
    button.classList.add("animate-bounce"); 
    setTimeout(() => {
      button.classList.remove("animate-bounce"); 
      navigate('/login');
    }, 500); 
  };

  // Handle Register with bounce animation
  const handleRegister = () => {
    const button = document.getElementById("registerButton");
    button.classList.add("animate-bounce"); 
    setTimeout(() => {
      button.classList.remove("animate-bounce"); 
      navigate('/register'); 
    }, 500);
  };

  return (
    <div 
      className="min-h-screen flex flex-col justify-between bg-cover bg-center animate-fadeIn" 
      style={{ backgroundImage: `url('regiimage.jpg')` }} 
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center bg-gray-900 bg-opacity-60">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Welcome to Our Platform
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-5 space-y-4 md:space-y-0">
          {/* Login Button */}
          <button
            id="loginButton" 
            onClick={handleLogin}
            onMouseEnter={() => setIsHoveredLogin(true)}
            onMouseLeave={() => setIsHoveredLogin(false)}
            className={`px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${isHoveredLogin ? 'scale-105' : 'scale-100'}`}
          >
            Login
          </button>

          {/* Registration Button */}
          <button
            id="registerButton" 
            onClick={handleRegister}
            onMouseEnter={() => setIsHoveredRegister(true)}
            onMouseLeave={() => setIsHoveredRegister(false)}
            className={`px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${isHoveredRegister ? 'scale-105' : 'scale-100'}`}
          >
            Register
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
