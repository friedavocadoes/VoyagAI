import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import { getEmailFromToken } from '../utils/auth';

const Results = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state.data);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const colorToggle = async (result, index) => {
    let fav = document.getElementById(`wish${index}`);
    fav.classList.toggle('fill-red-500');


    if (fav.classList.contains('fill-red-500')) {
      console.log(result);

      const email = getEmailFromToken();

      try {
        const response = await axios.post('http://localhost:5000/wishlist/save', { email, result }, {
          headers: { 'Content-Type': 'application/json' },
        });
        
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    }

  };
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      setIsLoading(true);
      if (data) {
        try {
          const response = await axios.post('http://localhost:5000/search', data, {
            headers: { 'Content-Type': 'application/json' },
          });
          setResults(response.data.vacation_spots);
        } catch (error) {
          console.error('Error fetching results:', error);
          setResults([{ name: "API Error", description: "There was an error fetching your request. Please try again." }]);
        } finally {
          setIsLoading(false);
        }
      }
    };
      

    fetchData();
  }, [data]);

  return (
    <>
      <div className="mt-[115px] mx-20 ">
        {isLoading ? (
          <>
            <h2 className="text-2xl font-bold mb-5 animate-pulse text-slate-800 text-center m-5">
              Parsing Results....
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 m-5">
              {Array(9).fill(<Loader />)}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-5 text-slate-900 text-center m-5">
              Here are Your Results ;)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 m-5">
              {results ? (
                results.map((result, index) => (
                  <div
                key={index}
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
                    <hr className="border-gray-300" />
                    <div className="mt-2 cursor-pointer">
                        <svg id={`wish${index}`}
                        onClick={() => colorToggle(result, index)}
                        className="h-5 w-5 text-gray-800 hover:text-red-500 hover:fill-red-500 transition duration-100 ease-in-out" 
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                        </svg>
                        
                    </div>
                </div>
            </div>
                ))
              ) : (
                <p className="text-xl font-semibold text-slate-800">No results found.</p>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Results;