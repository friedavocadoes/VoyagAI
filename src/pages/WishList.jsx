import React, { useState, useEffect, useRef } from 'react';
import { getEmailFromToken } from '../utils/auth';
import axios from 'axios';

function App() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemPosition, setItemPosition] = useState(null);
  const email = getEmailFromToken();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://voyagai.onrender.com/wishlist/fetch',
          { email },
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );

        const arrMan = [];
        response.data.all.map((item) => {
          arrMan.push(JSON.parse(item));
        });

        setWishlistItems(arrMan);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    fetchData();
  }, []);

  // const removeFromWishlist = (itemId) => {
  //   setWishlistItems(wishlistItems.filter((item) => item.name !== itemId));
  // };

  const handleItemClick = (item, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setItemPosition({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      element: e.currentTarget,
    });
    setSelectedItem(item);
  };

  const updatePosition = () => {
    if (itemPosition?.element) {
      const rect = itemPosition.element.getBoundingClientRect();
      setItemPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        element: itemPosition.element,
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, [itemPosition]);

  const closeModal = () => {
    setSelectedItem(null);
  };

  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div className="min-h-screen pt-10 relative">
      <section className={`container mx-auto lg:px-4 sm:px-0 py-16 pt-20 ${selectedItem ? 'blur-sm' : ''}`}>
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center pb-5">My Wishlist</h2>
        <p className="text-violet-500 font-mono text-xl text-center pb-10">Curate your dream trips! Add and remove them as you explore.</p>
        {wishlistItems.length === 0 ? (
          <p className="text-orange-500 font-mono text-lg text-center">Your wishlist is currently empty.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {wishlistItems.map((item, index) => (
              <li
                key={index}
                className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                onClick={(e) => handleItemClick(item, e)}
              >
                <div className="flex items-center justify-between w-full px-4 py-5">
                  <div className="text-white pl-4">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-lg mt-2">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {selectedItem && itemPosition && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        >
          <div
            ref={modalRef}
            className={`bg-gray-300 text-gray-900 rounded-lg p-8 pb-7 max-w-lg mx-auto ${selectedItem ? 'scale-105' : 'scale-0'}`}
            style={{
              position: 'absolute',
              top: itemPosition.top,
              left: itemPosition.left,
              width: itemPosition.width,
              // transform: selectedItem ? 'scale(1) rotate(0)' : 'scale(0) rotate(-10deg)',
            }}
          >
            <h3 className="text-2xl font-bold mb-4">{selectedItem.name}</h3>
            <p className="mb-2">{selectedItem.description}</p>
            <div className="mb-3 text-blue-800 font-bold hover:text-blue-500"><a href={selectedItem.link} target='__blank'>Web URL</a></div>
            <hr />  
            <p className="mb-4 mt-2"><span className="font-bold">Stay options: </span>{selectedItem.stay}</p>
            <p className="mb-4"><span className="font-bold">Travel options: </span>{selectedItem.travel}</p>
            <p className="mb-5"><span className="font-bold">Budget (est.): </span>{selectedItem.budget}</p>
            <button
              className="px-4 py-2 text-white font-bold bg-violet-500 hover:bg-orange-500 transition duration-200 ease-in-out rounded-md shadow"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
