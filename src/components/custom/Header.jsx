import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="sticky top-0 left-0 right-0 bg-white/70 backdrop-blur-md border-b border-zinc-200/50 flex items-center justify-between p-4 px-6 sm:px-12 z-40 transition-all duration-300">
      {/* Brand Text Logo */}
      <Link to="/" className="hover:opacity-90 transition-opacity flex items-center gap-2">
        <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-[#f56551] to-rose-600 bg-clip-text text-transparent tracking-tight">
          🌍 AI Travel Planner
        </span>
      </Link>
    </div>
  );
}

export default Header;
