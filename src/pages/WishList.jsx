import React, { useState, useEffect } from 'react';
import { getEmailFromToken } from '../utils/auth';
import axios from 'axios';


function App() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const email = getEmailFromToken();


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:5000/wishlist/fetch', { email }, {
          headers: { 'Content-Type': 'application/json' },
        });

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


  const removeFromWishlist = (itemId) => {
    setWishlistItems(wishlistItems.filter((item) => item.name !== itemId));
  };

  return (
    <div className="min-h-screen  pt-10"> 
      <section className="container mx-auto px-4 py-16 pt-20">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center pb-5">My Wishlist</h2>
        <p className="text-violet-500 font-mono text-xl text-center pb-10">Curate your dream trips! Add and remove them as you explore.</p>
        {wishlistItems.length === 0 ? (
          <p className="text-orange-500 font-mono text-lg text-center">Your wishlist is currently empty.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {wishlistItems.map((item, index) => (
              <li
                key={index}
                className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105" 
              >
                <div className="flex items-center justify-between w-full px-4 py-5">  
                  <div className="text-white pl-4">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-lg mt-2">{item.description}</p>
                  </div>
                  {/* <button
                    className="m-2 px-4 py-2 text-white font-bold bg-violet-500 hover:bg-orange-500 hover:scale-105 transition duration-200 ease-in-out rounded-md shadow"  
                    onClick={() => removeFromWishlist(item.name)}
                  >
                    Remove
                  </button> */}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;
