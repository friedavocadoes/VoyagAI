import React, { useState } from 'react';

function App() {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Trip 1", description: "Trip to Hawaii", imageUrl: "./login.png" }, // Replace with actual image paths
    { id: 2, name: "Trip 2", description: "Trip to Paris", imageUrl: "./voyagai.png" }, // Replace with actual image paths
    { id: 3, name: "Trip 3", description: "Trip to Tokyo", imageUrl: "./login.png" }, // Replace with actual image paths
  ]);

  const addToWishlist = (item) => {
    // Add logic to add items to wishlist (e.g., check for duplicates)
    setWishlistItems([...wishlistItems, item]);
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="min-h-screen pt-10"> {/* Added pt-20 for top space */}
      <section className="container mx-auto px-4 py-16 pt-20">
        <h2 className="text-4xl font-bold tracking-tight text-[#767fb4] sm:text-6xl text-center pb-5">My Wishlist</h2>
        <p className="text-gray-400 font-mono text-xl text-center pb-10">Keep track of the trips you desire! Add plans you like and remove them when you're done.</p>
        {wishlistItems.length === 0 ? (
          <p className="text-[#f9b17a] font-mono text-lg text-center">Your wishlist is currently empty.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {wishlistItems.map((item) => (
              <li
                key={item.id}
                className="bg-[#f9b17a] rounded-lg shadow hover:shadow-md transition duration-200 ease-in-out transform hover:scale-105" // Added shadow & hover effects
              >
                <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-4" /> {/* Image properties */}
                <div className="flex items-center justify-between w-full"> {/* Flex container for side-by-side content */}
                  <div className="text-[#2d3250] pl-4 pb-4">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-lg mt-2">{item.description}</p>
                  </div>
                  <button
                    className="m-4 px-4 py-2 text-white font-bold shadow hover:bg-[#767fb4] hover:scale-105 transition duration-200 ease-in-out rounded-md bg-[#2d3250] self-end" // Button styling
                    onClick={() => removeFromWishlist(item.id)}
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
