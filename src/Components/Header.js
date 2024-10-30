import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4  flex justify-between items-center">
        <div className="text-2xl font-bold text-white-800">
          SyncHub - A cloud Computing Platform
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white-600 hover:text-blue-600">Home</a></li>
            <li><a href="/register" className="text-white-600 hover:text-blue-600">Register</a></li>
            <li><a href="/login" className="text-white-600 hover:text-blue-600">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
