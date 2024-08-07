import React, { useEffect } from "react";


const result = {name: "Leh Ladakh", description: "A high-altitude desert region in the Himalayas, known for its breathtaking landscapes, monasteries, and adventure activities like trekking and motorcycling.",
    link: "#", 
    travel: "Fly to Leh Airport (IXL) or take a road trip from Manali or Srinagar.",
    stay: "Budget-friendly guesthouses, homestays, and mid-range hotels are available.",
    budget: "₹30,000 - ₹50,000"
};


const Box = () => {
    

   

    useEffect(() => {
        const fav = document.getElementById('wish');
      
        if (fav) {
            // For the icon
            const colorToggle = () => {
                fav.classList.toggle('fill-red-500');
            };
            fav.addEventListener('click', colorToggle);


            // For the logic
            const printFirst = () => {
                console.log(result.description);
            }
            fav.addEventListener('click', printFirst);
        }
    }, []);
    

    return (
      <>
        <div className="mt-[115px] mx-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 m-5">
            
            {/* data from here */}
            <div
                
                className={`bg-slate-300 bg-opacity-50 hover:bg-opacity-90 backdrop-blur-[12px] rounded-md shadow-md overflow-hidden m-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-slate-100`}
            >
                {/* <img className="w-full h-48 object-cover" src={result.pict} alt={result.name} /> */}
                <div className="p-5 pb-3">
                    <a href={result.link} target="_blank">
                        <h5 className="text-xl font-bold mb-3 text-slate-900">{result.name}</h5>
                        <p className="text-gray-700 text-sm mb-2">
                        <span className="text-slate-800 font-bold">Description: </span>
                        {result.description}
                        </p>
                        {result.travel ? (
                        <p className="text-gray-700 text-sm mb-2">
                            <span className="text-slate-800 font-bold">Travel: </span>
                            {result.travel}
                        </p>
                        ) : (
                        <> </>
                        )}
                        {result.stay ? (
                        <p className="text-gray-700 text-sm mb-2">
                            <span className="text-slate-800 font-bold">Stay Options: </span>
                            {result.stay}
                        </p>
                        ) : (
                        <> </>
                        )}
                        {result.budget ? (
                        <>
                            <p className="text-gray-700 text-sm mb-2">
                            <span className="text-slate-800 font-bold">Budget (est.): </span>
                            {result.budget}
                            </p>
                        </>
                        ) : (
                        <> </>
                        )}
                    </a>
                    <hr className="border-gray-300" /> {/* Line after budget */}
                    <div className="mt-2 cursor-pointer">
                        <svg id="wish" className="h-5 w-5 text-gray-800 hover:text-red-500 hover:fill-red-500 transition duration-100 ease-in-out"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                        </svg>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Box;
  