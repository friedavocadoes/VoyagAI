import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Homepage = () => {

  const handleClick = (targetPage) => {
    
  };

  return (
    <div className="bg-cover bg-no-repeat bg-center h-screen" style={{ backgroundImage: `url(/public/voyagai.png)` }}>
      <main className="bg-fixed h-screen flex flex-col justify-center items-center ">
        <div className="bg-orange-200/60 rounded-xl text-center px-20 py-10 mt-50 items-center backdrop-blur-[7px]">
            <h1 className="text-4xl font-bold text-center animate-fade-in-up">
              Your <span style={{ color: 'darkorange' }}>SMART</span> Travel Planner
            </h1>
            <p className="text-xl text-center py-4">
              Explore the world with ease and embark on your next adventure.
            </p>
            <button
              className="px-4 py-2 bg-orange-500 text-white font-bold rounded shadow hover:bg-orange-700"
            >
              Start planning with Al
            </button>
        </div>
        {/* Conditionally rendered welcome message (unchanged) */}
      </main>
    </div>
  );
};

export default Homepage;
