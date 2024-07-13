import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Homepage = () => {
  return (
    <div className="relative px-6 pt-[250px] flex items-center justify-center min-h-screen">
      <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-[#767fb4] sm:text-8xl">Your <span className="text-[#f9b17a] ">SMART </span> Travel Planner</h1>
      <p className="mt-6 text-xl leading-8 text-white ">Explore the world with ease and embark on your next adventure.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a href="/generator" className="rounded-md bg-[#f9b17a] px-3.5 py-2.5 text-lg font-bold text-[#2d3250] shadow-sm hover:bg-[#767fb4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start planning with AI</a>
      </div>
      <img
        alt="VoyagAI"
        src="/scene.png"
        className="object-cover mx-auto pt-15"
      />
      <h1 className="text-3xl font-bold tracking-tight text-[#767fb4] sm:text-6xl pb-20 pt-10">Your <span className="text-[#f9b17a] ">AI </span> Power Trip</h1>
            <div className="flex flex-wrap justify-center items-center px-4 py-2 space-y-8 pb-10">
        <section className="w-full flex flex-col space-y-4 md:w-1/2">  {/* Adjust width on medium screens */}
          <h2 className="text-4xl font-bold text-white">The Most Optimal</h2>
          <p className="text-gray-400 text-2xl">
            VoyageAI can help you design your dream vacation! Just tell them what
            places you want to see and where you'd like to stay, and their
            super-smart system will create a personalized itinerary that's perfect
            for you.
          </p>
        </section>
        <section className="w-full flex flex-col space-y-4 md:w-1/2 md:ml-auto">  {/* Adjust width and margin on medium screens */}
          <h2 className="text-4xl font-bold text-white">Adventure Doesn't Have to Cost a Fortune</h2>
          <p className="text-gray-400 text-2xl">
            Unwind and let go of travel worries. Our AI takes care of the planning,
            crafting a personalized itinerary that caters to your interests and
            preferences. Simply relax, explore, and enjoy the journey.
          </p>
        </section>
        <section className="w-full flex flex-col space-y-4 md:w-1/2">  {/* Adjust width on medium screens */}
          <h2 className="text-4xl font-bold text-white">Travel with Ease</h2>
          <p className="text-gray-400 text-2xl">
            VoyageAI can help you design your dream vacation! Just tell them what
            places you want to see and where you'd like to stay, and their
            super-smart system will create a personalized itinerary that's perfect
            for you.
          </p>
        </section>
      </div>
      </div>
    </div>
  );
};

export default Homepage;
