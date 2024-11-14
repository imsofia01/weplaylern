import React from "react";
import { Link } from "react-router-dom";


const HeroSection = () => {
    return(
        <div className="scroll-smooth flex flex-col md:flex-row items-center md:justify-around md:p-5 min-h-screen ">
            {/* Character Image */}
            <div className="flex justify-center md:mt-0 md:order-last">
          <img src="assets/cute.gif" alt="Character Illustration" className="w-90 md:w-90 h-auto -order-1 scale-75 translate-x-4 skew-y-3 md:transform-none" />
        </div>
        {/* Text Section */}
        <div className="md:text-left mb-1 md:mb-0 ">
          <h1 className="text-[2rem] md:text-[3rem] font-bold text-gray-900">
            Unlock your super skills
          </h1>
          <p className="mt-4 text-lg md:text-[1.5rem] text-justify text-gray-900 max-w-lg">
            Where little minds explore, learn, and play! Dive into stories, videos, and games that turn every question into a new adventure.
          </p>
  
          <button className="mt-6 px-6 py-3 h-16 bg-white text-black font-semibold rounded-2xl shadow-md hover:bg-gray-100 flex items-center justify-center">
            <Link to="/SignUp"> let’s get started! </Link>
            <span className="ml-2">→</span>
          </button>
        </div>
    </div>

    )

}

export default HeroSection;