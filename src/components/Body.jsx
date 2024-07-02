import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative px-6 flex items-center justify-center"> {/* Removed min-h-screen for flexibility */}
      {/* Gradient background (combined and simplified) */}
      <div
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative w-full aspect-[16/5] bg-gradient-to-tr from-[#fda7cb] to-[#9089fc] opacity-20 sm:h-[calc(100%+30rem)]"
        />
      </div>
      <div className="layout-content"> {/* More descriptive class name */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
