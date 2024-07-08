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
          setResults([{ name: "API Error", description: "There was an error fetching your request. Please try again." }]);
        }
      }
    };

    fetchData();
  }, [data]);

  return (
    <>
      <div className="mt-[115px] mx-20">
        {results ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 m-5">
            {results.map((result, index) => (
              <div
                key={index}
                className={`bg-slate-400 rounded-lg shadow-md overflow-hidden m-3 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg`}
              >
                <a href={result.link} target="_blank">
                  {/* <img className="w-full h-48 object-cover" src={result.pict} alt={result.name} /> */}
                  <div className="p-4">
                    <h5 className="text-xl font-bold mb-3 text-slate-900">{result.name}</h5>
                    <p className="text-gray-700 text-sm mb-2">
                      <span className="text-slate-700 font-bold">Descriptions: </span>
                      {result.description}
                    </p>
                    {result.travel ? (
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="text-slate-700 font-bold">Travel: </span>
                        {result.travel}
                      </p>
                    ) : (
                      <></>
                    )}
                    {result.stay ? (
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="text-slate-700 font-bold">Stay Options: </span>
                        {result.stay}
                      </p>
                    ) : (
                      <></>
                    )}
                    {result.budget ? (
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="text-slate-700 font-bold">Budget (est.): </span>
                        {result.budget}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
            <div className="p-4 bg-gradient-to-tr animate-spin from-green-500 to-blue-500 via-purple-500 rounded-full">
              <div className="bg-opacity-0 rounded-full">
                <div className="w-24 h-24 rounded-full"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Results;
