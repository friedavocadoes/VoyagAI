import React from 'react';

const ContactUs = () => {
  return (
    <div className="relative px-6 pt-14 flex items-center justify-center min-h-screen mt-20 mb-20">
      <div className="text-center max-w-[700px]"> 
        <h1 className="text-4xl font-bold tracking-tight text-[#767fb4] sm:text-6xl">
          Contact Us
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300 font-light">
          Get in touch and let's chat about your travel dreams!
        </p>

        <div className="mt-10 space-y-6 prose">
          <p className="text-base leading-loose text-left font-mono text-stone-900">
            Have questions about VoyageAI or want to discuss your travel plans with our team? We're here to help! Feel free to reach out using the methods below:
          </p>
        </div>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Contact Information</h2>
          <ul className="list-none space-y-2">
            <li>
              <span className="font-medium text-[#f9b17a]">Email:</span> info@voyage.ai
            </li>
            <li>
              <span className="font-medium text-[#f9b17a]">Phone:</span> +91 9207757005
            </li>
          </ul>
        </div>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Send Us a Message</h2>
          <form className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#767fb4]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#767fb4]"
              required
            />
            <textarea
              placeholder="Your Message"
              className="px-4 py-2 rounded-md border border-gray-300 h-24 focus:outline-none focus:ring-1 focus:ring-[#767fb4]"
              required
            />
            <button type="submit" className="bg-[#767fb4] text-white font-medium py-2 px-4 rounded-md hover:bg-[#3f5c99]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
