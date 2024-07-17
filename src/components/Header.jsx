import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUserFromToken } from '../utils/auth';



const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, pullUser] = useState('');
  const [open, setOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      const nav = document.getElementById('navbar');
      nav.classList.remove('backdrop-blur-md');
    }

    if (menuOpen) {
      const nav = document.getElementById('navbar');
      nav.classList.add('backdrop-blur-md');
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload(false);
  };

  useEffect(() => {
    
    pullUser(getUserFromToken());

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header
        id="navbar"
        className="fixed inset-x-0 top-0 z-10 transition duration-100 ease-in-out bg-gray-900 bg-opacity-0 backdrop-filter backdrop-blur-md"
      >
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <h1 className="text-3xl font-bold hover:text-[#DFA175] hover:scale-105 transition duration-200 ease-in-out text-gray-200">
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
          <Link to="/explore" className="text-md font-semibold hover:text-[#DFA175] hover:scale-110 transition duration-100 ease-in-out leading-6 text-gray-300">
              Explore
            </Link>
            <Link to="/about" className="text-md font-semibold hover:text-[#DFA175] hover:scale-110 transition duration-100 ease-in-out leading-6 text-gray-300">
              About
            </Link>
            <Link to="/contact" className="text-md font-semibold hover:text-[#DFA175] hover:scale-110 transition duration-100 ease-in-out leading-6 text-gray-300">
              Contact Us
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            { user ?            
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex flex-row items-center w-full px-4 py-2 mt-2 text-md font-semibold text-left text-gray-200 bg-transparent rounded-lg hover:text-gray-400 focus:outline-none focus:shadow-outline transition duration-100 ease-in-out"
                >
                  <span>Hi, {user}</span>
                  <svg
                    className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${open ? 'rotate-180' : 'rotate-0'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {open && (
                  <div className="absolute z-60 right-0 w-full mt-1 origin-top-right rounded-md shadow-lg md:w-48">
                    {/* backdrop blur here does not work. why? */}
                    <div className=" px-1 py-1 bg-slate-400 rounded-sm shadow bg-opacity-80 backdrop-blur-lg">
                      <a
                        href="/generator"
                        className="text-gray-900 block px-4 py-2 text-sm font-semibold bg-transparent rounded-sm hover:text-gray-900 focus:text-green-900 hover:bg-green-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      >
                        Planner
                      </a>
                      <a
                        href="/wishlist"
                        className="text-gray-900 block px-4 py-2 mt-1 text-sm font-semibold bg-transparent rounded-sm hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      >
                        Wishlist
                      </a>
                      <a
                        href="#"
                        onClick={handleLogout}
                        className="text-gray-900 block px-4 py-2 mt-1 text-sm font-semibold bg-transparent rounded-sm hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                  
                )}
              </div>
            : 
            
              <Link to="/login" className="text-md hover:text-slate-400 hover:scale-110 transition duration-100 ease-in-out font-semibold leading-6 text-gray-200">
                Login
              </Link>
            }
          </div>
        </nav>
        {menuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50 bg-black bg-opacity-25 transition duration-500" onClick={toggleMenu}></div>
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
                <div className="py-6 px-4">
                  { user ?            
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex flex-row items-center w-full px-4 py-2 mt-2 text-md font-semibold text-left text-white bg-transparent rounded-lg hover:text-gray-400 focus:outline-none focus:shadow-outline transition duration-100 ease-in-out"
                >
                  <span>{user}</span>
                  <svg
                    className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${open ? 'rotate-180' : 'rotate-0'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {open && (
                  <div className="absolute z-100 right-0 w-full mt-1 origin-top-right rounded-md shadow-lg md:w-48">
                    {/* backdrop blur here does not work. why? */}
                    <div className=" px-1 py-1 bg-slate-400 rounded-sm shadow bg-opacity-80 backdrop-blur-lg">
                    <a
                        href="/generator"
                        className="text-gray-900 block px-4 py-2 text-sm font-semibold bg-transparent rounded-sm hover:text-gray-900 focus:text-gray-900 hover:bg-green-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      >
                        Planner
                      </a>
                      <a
                        href="/wishlist"
                        className="text-gray-900 block px-4 py-2 mt-1 text-sm font-semibold bg-transparent rounded-sm hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      >
                        Wishlist
                      </a>
                      <a
                        href="#"
                        onClick={handleLogout}
                        className="text-gray-900 block px-4 py-2 mt-1 text-sm font-semibold bg-transparent rounded-sm hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                  
                )}
              </div>
            : 
            
              <Link to="/login" className="text-md hover:text-slate-300 hover:scale-110 transition duration-100 ease-in-out font-semibold leading-6 text-white">
                Login
              </Link>
            } 
                  </div>
                  <div className="space-y-2 py-6 px-4">
                    
                    <Link to="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#f9b17a] hover:bg-[#767fb4]">
                      About
                    </Link>
                    <Link to="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#f9b17a] hover:bg-[#767fb4]">
                      Contact Us
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
