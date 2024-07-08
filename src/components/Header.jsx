import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <h1 className="text-3xl font-bold text-white">
              <Link to="/">
                VoyageAI
              </Link>
            </h1>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
          {/* <Link to="/" className="text-md font-semibold leading-6 text-white">
            Explore
          </Link> */}
          <Link to="/about" className="text-md font-semibold leading-6 text-white">
            About
          </Link>
          <Link to="/#" className="text-md font-semibold leading-6 text-white">
            Contact
          </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/login" className="text-md font-semibold leading-6 text-white">
              Login
            </Link>          
          </div>
        </nav>
        {menuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50 bg-black bg-opacity-25" onClick={toggleMenu}></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#252a43] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-white">
                  <Link to="/">
                    VoyageAI
                  </Link>
                </h1>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 px-4">
                    <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#f9b17a] hover:bg-[#767fb4]">
                      Explore
                    </Link>
                    <Link to="/#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#f9b17a] hover:bg-[#767fb4]">
                      About
                    </Link>
                    <Link to="/#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#f9b17a] hover:bg-[#767fb4]">
                      Contact
                    </Link>
                  </div>
                  <div className="py-6 px-4">
                    <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-white hover:bg-[#767fb4]">
                     Login
                    </Link> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
