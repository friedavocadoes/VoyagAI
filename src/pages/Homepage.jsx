import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Homepage = () => {
  return (
    <div className="relative px-6 pt-14 flex items-center justify-center min-h-screen">
      <div className="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-[#767fb4] sm:text-6xl">Your <span class="text-[#f9b17a] ">SMART </span> Travel Planner</h1>
      <p class="mt-6 text-lg leading-8 text-white ">Explore the world with ease and embark on your next adventure.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" class="rounded-md bg-[#f9b17a] px-3.5 py-2.5 text-md font-bold text-[#2d3250] shadow-sm hover:bg-[#767fb4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start planning with AI</a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
