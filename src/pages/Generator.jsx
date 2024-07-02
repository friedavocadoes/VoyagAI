import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const Generator = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigateTo = useNavigate();

  const onSubmit = (data) => {
    navigateTo('/results', { state: { data } });
  };

  return (
    <div className="relative min-h-screen grid bg-black">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">

        {/* the below line to see a demo logo */}
        <div className="relative sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(src/assets/download.jpeg)` }}>
          <div className="absolute bg-black opacity-25 inset-0 z-0"></div>
          <div className="w-full lg:max-w-2xl md:max-w-md z-10 items-center text-center">
            <div className="font-bold leading-tight mb-6 mx-auto w-full content-center items-center text-slate-500	">
            </div>
          </div>
        </div>

        <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
          <div className="max-w-xl w-full space-y-12">
            <div className="lg:text-left text-center">
              <div className="flex items-center justify-center">
                <div className="bg-black flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-8 mt-10">
                    <label className="font-bold text-lg text-white">Mood</label>
                    <input
                      type="text"
                      {...register('mood', { required: true })}
                      placeholder="How are you feeling?"
                      className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white"
                    />
                    {errors.accnum && <span className="text-red-500 text-sm">Mood is required</span>}
                    <label className="font-bold text-lg text-white">Budget</label>
                    <input
                      type="number"
                      {...register('budget', { required: true })}
                      placeholder="Estimate (in INR)"
                      className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white"
                    />
                    {errors.amount && <span className="text-red-500 text-sm">Specify a Budget</span>}

                    <label className="font-bold text-lg text-white">Current Location</label>
                    <input
                      type="text"
                      {...register('loc', { required: true })}
                      placeholder="Where are you travelling from?"
                      className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white"
                    />
                    {errors.pin && <span className="text-red-500 text-sm">Give us a location to estimate</span>}
                    <button type="submit" className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold" routerlink="/results">Findddd!!</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
