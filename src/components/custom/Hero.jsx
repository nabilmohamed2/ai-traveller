import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Hero() {
  // Access the user's email from the Redux store
  const mail = useSelector((store) => store.user.mail);

  // Determine the navigation path based on whether the user is logged in
  const path = mail ? "/create-trip" : "/login";

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-10">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRyYXZlbHxlbnwwfHx8fDE2ODU0MjkzNjE&ixlib=rb-1.2.1&q=80&w=1080"
          alt="Travel Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl">
        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-800 leading-tight">
          <span className="text-[#f56551]">Discover Your Next Adventure</span>
          <br />
          <span>with AI-Powered Itineraries</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-6">
          Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget. Let AI handle the planning while you enjoy the journey.
        </p>
        <div className="mt-8">
          <Link to={path}>
            <Button className="px-6 py-3 text-lg sm:text-xl bg-[#f56551] hover:bg-[#e25440] text-white rounded-lg shadow-lg">
              Get Started, It's Free
            </Button>
          </Link>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl">
        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Custom Itineraries"
            className="w-16 h-16"
          />
          <h3 className="font-semibold text-lg mt-4">Custom Itineraries</h3>
          <p className="text-gray-600 text-sm text-center">
            Get personalized travel plans tailored to your preferences and budget.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Budget-Friendly Options"
            className="w-16 h-16"
          />
          <h3 className="font-semibold text-lg mt-4">Budget-Friendly Options</h3>
          <p className="text-gray-600 text-sm text-center">
            Explore travel options that suit your financial needs without compromising on fun.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="AI-Powered Planning"
            className="w-16 h-16"
          />
          <h3 className="font-semibold text-lg mt-4">AI-Powered Planning</h3>
          <p className="text-gray-600 text-sm text-center">
            Let AI handle the planning so you can focus on enjoying your trip.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;