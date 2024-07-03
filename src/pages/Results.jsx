import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state.data); 
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        try {
          const res = await fetch('http://localhost:3000/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
          const fetchedResults = await res.json();
          setResults(fetchedResults.vacation_spots);
        } catch {
          setResults([{name: "API Error", description: "There was an error fetching your request. Please try again."}]);
        }
      }
    };

    fetchData();
  }, [data]); 

  return (
    <>
    <div className="mt-[115px] mx-20">
      {results ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 m-4">
          {results.map((result, index) => (
            <div key={index} className="bg-slate-400 rounded-lg shadow-md overflow-hidden">
              {/* <img className="w-full h-48 object-cover" src={result.pict} alt={result.name} /> */}
              <div className="p-4">
                <h5 className="text-xl font-bold">{result.name}</h5>
                <p className="text-gray-700 text-sm mb-2">{result.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      ) : (
        <div class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
          <div class="p-4 bg-gradient-to-tr animate-spin from-green-500 to-blue-500 via-purple-500 rounded-full">
            <div class="bg-white rounded-full">
            <div class="w-24 h-24 rounded-full"></div>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Results;
