import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    console.log('Email:', email);
    console.log('Password:', password);

    window.location.href = '/'; // Temporary redirection for demonstration
  };

  return (
        <div className="min-h-screen flex flex-col justify-center items-center">
          <div className="bg-[#606797] rounded-xl text-center px-20 py-10 items-center backdrop-blur-[19px]">
            <img
              alt="VoyagAI"
              src="/beigelogo.png"
              className="w-20 h-20 object-cover mx-auto"
            />
            <h1 className="text-4xl font-bold text-center mb-10 text-[#f9b17a]">VoyageAI</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">  
              <div className="flex flex-col">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-white font-bold shadow rounded-md bg-[#f9b17a] hover:bg-[#2d3250] hover:text-[#fff] transition duration-300 ease-in-out hover:scale-110"
              >
                Login
              </button>
            </form>
            <a href="#" className="text-white hover:text-gray-800 mt-4 text-center mt-20">
              Forgot password?
            </a>
            <p className="text-white text-center mt-4">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#f9b17a] hover:text-white">
                Signup
              </Link>
            </p>
          </div>
        </div>

  );
};

export default Login;
