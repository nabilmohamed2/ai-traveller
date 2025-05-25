import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/Services/fireBase";

function Header() {
  const { pathname } = useLocation();
  const [location, setLocation] = useState(pathname); // Initialize state with the current pathname

  useEffect(() => {
    setLocation(pathname); // Update state when pathname changes
  }, [pathname]);

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.log(error));
    // Optionally handle redirect or state update after sign out
  };

  return (
    <div className="p-2 shadow-sm flex justify-between px-7">
      <img src="./logo.svg" alt="Logo" />
      <Link to="/login">
        {location !== "/login" && (
          <Button className="rounded-lg" onClick={handleSignOut}>Sign out</Button>
        )}
      </Link>
    </div>
  );
}

export default Header;
