import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    
    window.location.href = '/login'; // Temporary redirection for demonstration
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
                <div className="flex flex-col">
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              <button type="submit" className="px-4 py-2 text-white font-bold rounded shadow  hover:bg-[#2d3250] rounded-md bg-[#f9b17a]">
                Sign Up
              </button>
            </form>
            <p className="text-white text-center mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-[#f9b17a] hover:text-white">
                Login
              </Link>
            </p>
          </div>
    </div>
  );
};

export default Signup;
