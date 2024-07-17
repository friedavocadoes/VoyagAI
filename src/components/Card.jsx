
import React, { useState } from 'react';

const Card = ({ title, imageSrc }) => {
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  const addToWishlist = () => {
    // Perform logic to add to user's wishlist (e.g., save to localStorage or database)
    setIsAddedToWishlist(true);
    // Example: Save to localStorage
    let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlistItems.push({ title, imageSrc });
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="text-xl text-white font-semibold mb-2">{title}</h4>
        <p className="text-gray-600"></p>
        {/* Wishlist Button */}
        {/* {isAddedToWishlist ? (
          <button className="mt-2 bg-gray-200 text-gray-600 py-1 px-4 rounded-lg cursor-not-allowed">
            Added to Wishlist
          </button>
        ) : (
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-lg focus:outline-none"
            onClick={addToWishlist}
          >
            Add to Wishlist
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Card;
