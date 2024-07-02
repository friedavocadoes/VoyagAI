import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state.data); 
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        const res = await fetch('http://localhost:3000/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        const fetchedResults = await res.json();
        setResults(fetchedResults.vacation_spots);
      }
    };

    fetchData();
  }, [data]); 

  return (
    <>
      {results ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          {results.map((result, index) => (
            <div key={index} className="bg-orange-300 rounded-lg shadow-md overflow-hidden">
              <img className="w-full h-48 object-cover" src={result.pict} alt={result.name} />
              <div className="p-4">
                <h5 className="text-xl font-bold">{result.name}</h5>
                <p className="text-gray-700 text-sm mb-2">{result.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading results...</p>
      )}
    </>
  );
};

export default Results;
