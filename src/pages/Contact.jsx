// AboutUs.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="relative px-6 pt-14 flex items-center justify-center min-h-screen">
      <div className="text-center max-w-[700px]"> {/* Limit text container width */}
        <h1 className="text-4xl font-bold tracking-tight text-[#767fb4] sm:text-6xl">
          About VoyageAI
        </h1>
        <p className="mt-6 text-lg leading-8 text-white">
          Your Personalized Travel Guide, Powered by AI
        </p>
        <div className="mt-10 space-y-6 prose">
          <p className="text-base leading-loose text-left"> {/* Left-align text */}
            <span className="text-[#f9b17a] font-bold">Born in [Year],</span> VoyageAI is the brainchild of passionate travelers and tech wizards. We saw a gap in the travel planning landscape - a need for a tool that could spark the thrill of discovery while leveraging the power of AI.
          </p>
          <p className="text-base leading-loose text-left">
            <span className="text-[#f9b17a] font-bold">Our mission:</span> to be your travel companion, empowering you to explore the world with confidence. We craft personalized itineraries tailored to your unique interests and preferences. Whether you're a history buff, an adrenaline junkie, or a culinary adventurer, VoyageAI helps you design the perfect trip, ensuring a stress-free and unforgettable experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
