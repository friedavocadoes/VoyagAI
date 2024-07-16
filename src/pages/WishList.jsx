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
    <div className="min-h-screen pt-10"> 
      <section className="container mx-auto px-4 py-16 pt-20">
        <h2 className="text-4xl font-bold tracking-tight text-[#767fb4] sm:text-6xl text-center pb-5">My Wishlist</h2>
        <p className="text-gray-400 font-mono text-xl text-center pb-10">Keep track of the trips you desire! Add plans you like and remove them when you're done.</p>
        {wishlistItems.length === 0 ? (
          <p className="text-[#f9b17a] font-mono text-lg text-center">Your wishlist is currently empty.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {wishlistItems.map((item, index) => (
              <li
                key={index}
                className="bg-[#f9b17a] rounded-lg shadow hover:shadow-md transition duration-200 ease-in-out transform hover:scale-105" // Added shadow & hover effects
              >
                
                <div className="flex items-center justify-between w-full max-h-50}"> 
                  <div className="text-[#2d3250] pl-4 pb-4 m-5 my-7">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-lg mt-2">{item.description}</p>
                  </div>
                  <button
                    className="m-4 px-4 py-2 text-white font-bold shadow hover:bg-[#767fb4] hover:scale-105 transition duration-200 ease-in-out rounded-md bg-[#2d3250] self-end" // Button styling
                    onClick={() => removeFromWishlist(item.name)}
                  >
                    Remove
                  </button>
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
