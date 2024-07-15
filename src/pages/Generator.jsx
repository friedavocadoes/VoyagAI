import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Range } from 'react-range';

let moodDescriptions = ["Very Unhappy", "Unhappy", "Neutral", "Happy", "Very Happy"];
moodDescriptions[-1] = "";
const accentColor = "#DFA175";

const Generator = () => {  
  // const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    defaultValues: {
      mood: moodDescriptions[-1], // Set default mood in form state
    },
  });
  const navigateTo = useNavigate();

  const [maxBudget, setMaxBudget] = useState(100000);
  const [showMaxBudgetInput, setShowMaxBudgetInput] = useState(false);
  const [mood, setMood] = useState(moodDescriptions[-1]);

  
  const onSubmit = (data) => {
    navigateTo('/results', { state: { data } });
  };

  const moodValue = watch('moodSlider', -1);
  const budgetValues = watch('budgetSlider', [0, maxBudget]);

  const handleMoodChange = (e) => {
    setMood(e.target.value);
    setValue('mood', e.target.value); // Update form state for validation
  };

  const handleMaxBudgetChange = (e) => {
    const newMax = parseInt(e.target.value, 10) || 0;
    setMaxBudget(newMax);
    setValue('budgetSlider', [budgetValues[0], newMax]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      <div className="w-full max-w-2xl bg-gray-800 bg-opacity-40 backdrop-blur-[20px] p-[4em] px-[4em] rounded-lg shadow-2xl relative z-2 text-center mt-[7em] mb-20">
        <h1 className="text-4xl font-bold text-white mb-8">Plan Your Dream Vacation</h1>
        <p className="text-gray-300 mb-8">With AI, discover the perfect getaway based on your mood, budget, and starting location.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          <div className="flex flex-col">
            <label htmlFor="mood" className="text-sm font-medium text-gray-300 mb-2">Mood</label>
            <input
              type="text"
              id="mood"
              {...register('mood')}
              placeholder="How are you feeling today?"
              className="border border-gray-600 bg-gray-700 text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
            />
            <input
              type="range"
              id="moodSlider"
              min="0"
              max="4"
              step="1"
              defaultValue="-1"
              {...register('moodSlider')}
              onChange={(e) => setValue('mood', moodDescriptions[e.target.value])}
              className="w-full accent-[#DFA175] range-lg h-3 bg-slate-200"
            />
            {errors.mood && <p className="text-red-500 text-sm mt-2">{errors.mood.message}</p>}
          </div>
          

          <div className="flex flex-col">
            <label htmlFor="budget" className="text-sm font-medium text-gray-300 mb-2">Budget (INR)</label>
            <input
              type="text"
              id="budget"
              {...register('budget')}
              placeholder="Estimated Travel Budget"
              className="border border-gray-600 bg-gray-700 text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
              value={`₹${budgetValues[0]} - ₹${budgetValues[1]}`}
              readOnly
            />
            <Range
              step={1000}
              min={0}
              max={maxBudget}
              values={budgetValues}
              onChange={(values) => setValue('budgetSlider', values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '7px',
                    width: '100%',
                    backgroundColor: '#4a5568',
                    borderRadius: '3px',
                    margin: '0 10px',
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '20px',
                    width: '20px',
                    backgroundColor: '#DFA175',
                    borderRadius: '50%',
                    border: '2px solid #1a202c',
                  }}
                />
              )}
            />
            <button
              type="button"
              onClick={() => setShowMaxBudgetInput(!showMaxBudgetInput)}
              className="mt-4 text-indigo-400 underline"
            >
              Edit Max
            </button>
            {showMaxBudgetInput && (
              <div className="flex items-center mt-4">
                <label htmlFor="maxBudget" className="text-sm font-medium text-gray-300 mr-2">Max Budget:</label>
                <input
                  type="number"
                  id="maxBudget"
                  value={maxBudget}
                  onChange={handleMaxBudgetChange}
                  className="border border-gray-600 bg-gray-700 text-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}
            {errors.budget && <p className="text-red-500 text-sm mt-2">{errors.budget.message}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="loc" className="text-sm font-medium text-gray-300 mb-2">Starting Location</label>
            <div className="flex items-center mb-4">
              <input
                type="text"
                id="loc"
                {...register('loc', { required: 'Starting location is required' })}
                placeholder="Where are you travelling from?"
                className="border border-gray-600 bg-gray-700 text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1"
              />
            </div>
            {errors.location && <p className="text-red-500 text-sm mt-2">{errors.location.message}</p>}
          </div>
          
          <button type="submit" className="w-full bg-[#DFA175] text-white py-3 rounded-lg hover:bg-[#B6B6BF] focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Generate Plan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Generator;
