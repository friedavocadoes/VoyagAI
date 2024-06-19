import React from 'react';
import Navbar from './Navbar';
import banner from '../../public/img.jpeg';
import image from '../../public/images.png';

export default function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl-container mx-auto md:px-20 px-4 flex my-12'>
        <div className='w-full md:w-1/2'>
          <div className='text-4xl font-bold'>
            <h1>
              YOUR  {' '}
              <span className='text-pink-500'>SMART</span> TRAVEL PLANNER
            </h1>
            <br />
            <div className='text-2xl font-semibold'>
              <p>
                Explore the world with ease and embark on your next adventure
                with
              </p>
              
              <p><span className='text-blue-500'>VOYAGE AI</span></p>
            </div>
            <br></br>
            <br></br>
            <div className='text-3xl font-bold '>
              <h1>Click continue to start planning with AI</h1>
            </div>
            <br />
            <button className='btn btn-secondary'>Continue</button>
          </div>
        </div>

        <div className='w-full md:w-1/2'>
          <img src={banner} className='h-89 w-98' alt='' />
        </div>
      </div>
    </>
  );
}
