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
    <div className="bg-cover bg-no-repeat bg-center h-screen" style={{ backgroundImage: `url(/public/login.png)` }}>
      <div className="grid grid-cols-2">
        <div className="min-h-screen flex flex-col justify-center ml-40 px-10">
          <h2 className="text-4xl font-bold text-left text-white">Everyday is </h2>
          <h1 className="text-9xl text-left mb-10 text-orange-500">Holiday </h1>
        </div>
        <div className="min-h-screen flex flex-col justify-center items-center px-10">
          <div className="bg-blue-200/40 rounded-xl text-center px-20 py-10 items-center backdrop-blur-[19px]">
            <h1 className="text-4xl font-bold text-center mb-10 text-white">VoyageAI</h1>
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
                className="px-4 py-2 text-white font-bold shadow hover:bg-green-600 rounded-md bg-green-400"
              >
                Login
              </button>
            </form>
            <a href="#" className="text-gray-600 hover:text-gray-800 mt-4 text-center">
              Forgot password?
            </a>
            <p className="text-gray-600 text-center mt-4">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-500 hover:text-blue-700">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
