import React from 'react';

const Footer = () => {
  return (
    <footer className="relative inset-x-0 bottom-0 px-6 mb-3 flex items-center justify-center"> {/* Fixed positioning */}
      <div className="text-center">
        <p className="text-sm text-gray-200">
          © {new Date().getFullYear()} VoyageAI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
