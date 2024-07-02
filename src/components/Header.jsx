import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header className="flex justify-between px-10 py-4 bg-blue-400 text-white">
        <div className="text-3xl font-bold">
            <Link to="/">
                VoyageAl
            </Link>
        </div>
        <nav className="space-x-4 ">
          <a href="#" className="text-text-white hover:text-gray-800">
            Explore
          </a>
          <a href="#" className="text-text-white hover:text-gray-800">
            About
          </a>
          <a href="#" className="text-text-white hover:text-gray-800">
            Contact
          </a>
          <Link to="/login" className="font-bold text-white  hover:text-gray-800 hover:bg-green-500 shadow-md rounded-md bg-green-400 px-3 py-5">
            Login
          </Link>  {/* Use Link component for navigation */}
        </nav>
      </header>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;