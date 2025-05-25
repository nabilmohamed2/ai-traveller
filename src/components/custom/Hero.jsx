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
    <div className="flex flex-col items-center gap-9">
      <h1 className="font-extrabold text-center text-5xl mt-16 w-screen">
        <h1 className="text-[#f56551]">Discover your next adventure with AI:</h1>
        <h1 className="pt-4">Personalized itineraries at your fingertips.</h1>
      </h1>
      <p className="text-xl text-gray-500">
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interest and budget.
      </p>
      <Link to={path}>
        <Button>Get started, It's free</Button>
      </Link>
    </div>
  );
}

export default Hero;