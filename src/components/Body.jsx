import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative px-6 flex items-center justify-center"> {/* Removed min-h-screen for flexibility */}
      {/* Gradient background (combined and simplified) */}
      <div
        className="fixed inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(75%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative w-full aspect-[16/5] bg-gradient-to-tr from-[#fda7cb] to-[#9089fc] opacity-20 md:h-[calc(100%+10rem)]"
        />
      </div>
      <div className="layout-content"> {/* More descriptive class name */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
