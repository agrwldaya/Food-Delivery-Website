import React from 'react';
import banner from '../assets/frontend_assets/header_img.png';
 

export default function Banner() {
  return (
    <div className="relative max-w-full mt-7 px-3 md:px-28">
      <div>
        <img src={banner} alt="banner" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center   bg-opacity-50 px-8 py-16 sm:py-24 sm:px-24 md:px-40 md:py-32">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold md:py-2 fade-in">
            Order Your
          </h1>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold md:pb-10 fade-in">
            Favourite Food Here
          </h1>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white text-lg rounded-md hover:bg-red-600 transition duration-300 fade-in">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
}
