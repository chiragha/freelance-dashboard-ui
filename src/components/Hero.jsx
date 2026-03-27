import React from "react";
import banner from "../assets/banner.avif";
import Counter from "./Counter";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] pt-20 flex items-center py-12 md:py-0 ">
      
      {/* Background */}
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="absolute inset-0 bg-cover bg-center"
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 w-full">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800 max-w-xl leading-tight">
          Hire experts or be hired for any job, any time.
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-800 max-w-lg leading-relaxed text-sm sm:text-base">
          Thousands of small businesses use{" "}
          <span className="inline-flex items-center mx-1">
            <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded">
              F
            </span>
            <span className="ml-1 font-semibold">ind.Jobs</span>
          </span>
          to turn their ideas into reality.
        </p>

        {/* Search Box */}
        <div className="mt-8 bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
          
          {/* Where */}
          <div className="flex-1 p-3 sm:p-4 border-b md:border-b-0 md:border-r">
            <label className="text-xs text-blue-600 font-semibold">
              Where?
            </label>
            <input
              type="text"
              placeholder="Online Job"
              className="w-full mt-1 outline-none text-gray-700 text-sm"
            />
          </div>

          {/* Job */}
          <div className="flex-1 p-3 sm:p-4 border-b md:border-b-0 md:border-r">
            <label className="text-xs text-blue-600 font-semibold">
              What job you want?
            </label>
            <input
              type="text"
              placeholder="Job Title or Keywords"
              className="w-full mt-1 outline-none text-gray-700 text-sm"
            />
          </div>

          {/* Button */}
          <div className="p-3 sm:p-4 flex items-center justify-center">
            <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 text-gray-700 max-w-md">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">
              <Counter end={1586} />
            </h2>
            <p className="text-xs sm:text-sm">Jobs Posted</p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">
              <Counter end={3543} />
            </h2>
            <p className="text-xs sm:text-sm">Tasks Posted</p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">
              <Counter end={1232} />
            </h2>
            <p className="text-xs sm:text-sm">Freelancers</p>
          </div>

        </div>

      </div>
    </section>
  );
}