import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/Services/fireBase";

function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate(); // Initialize the navigate function
  const [location, setLocation] = useState(pathname); // Initialize state with the current pathname

  useEffect(() => {
    setLocation(pathname); // Update state when pathname changes
  }, [pathname]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login"); // Navigate to the login page after signing out
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-2 shadow-sm flex items-center justify-between px-5 sm:px-7">
      {/* Logo */}
      <Link to="/">
        <img
          src="./logo.svg"
          alt="Logo"
          className="h-8 sm:h-10 object-contain"
        />
      </Link>

      {/* Sign Out Button */}
      {location !== "/login" && (
        <Button
          className="rounded-lg text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2"
          onClick={handleSignOut}
        >
          Sign out
        </Button>
      )}
    </div>
  );
}

export default Header;
