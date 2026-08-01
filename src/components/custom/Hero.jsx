import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Hero() {
  const path = "/create-trip";

  return (
    <div className="relative bg-[#fbfbfd] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.15),rgba(255,255,255,0))] min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pb-16 pt-8">
      <style>{`
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes float-faster {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50% { transform: translateY(-16px) rotate(-0.5deg); }
        }
        .animate-float-slow {
          animation: float-slower 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-faster 5.5s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient background decoration */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-200/40 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-rose-200/40 rounded-full filter blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 flex flex-col items-center">
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full mt-4">
          {/* Left Side: Copywriting & CTA */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-3.5 py-1.5 text-xs font-bold text-indigo-700 mb-6 shadow-sm">
              ✨ NEXT GENERATION TRAVEL PLANNING
            </div>
            
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-zinc-900 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[#f56551] to-rose-600 bg-clip-text text-transparent">Discover Your Next Adventure</span>
              <br />
              <span className="text-zinc-800">with AI-Powered Itineraries</span>
            </h1>
            
            <p className="text-zinc-600 text-base sm:text-lg mt-6 leading-relaxed max-w-xl">
              Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget. Let AI handle the planning while you enjoy the journey.
            </p>
            
            <div className="mt-8 flex gap-4">
              <Link to={path}>
                <Button className="px-8 py-6 text-base font-bold bg-gradient-to-r from-[#f56551] to-rose-600 hover:from-[#e25440] hover:to-rose-500 text-white rounded-xl shadow-[0_8px_30px_rgb(245,101,81,0.3)] transition-all transform hover:-translate-y-0.5 duration-300">
                  Get Started, It's Free
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side: Interactive Mockup Showcase */}
          <div className="lg:col-span-5 relative w-full h-[400px] flex items-center justify-center">
            {/* Card A: Itinerary preview (floats slow) */}
            <div className="absolute top-6 left-2 sm:left-4 w-64 sm:w-72 bg-white border border-zinc-200/60 rounded-2xl p-4 shadow-2xl animate-float-slow transform -rotate-1 z-20">
              <img 
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80" 
                alt="Paris" 
                className="w-full h-32 object-cover rounded-xl mb-3 shadow-inner"
              />
              <h4 className="font-extrabold text-sm text-zinc-950">Eiffel Tower Tour</h4>
              <p className="text-zinc-500 text-[10px] sm:text-xs mt-1 leading-relaxed line-clamp-2">Iconic iron lattice tower on the Champ de Mars in Paris.</p>
              <div className="flex gap-2 mt-3 text-[10px]">
                <span className="bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded font-bold">⏱️ 3 hrs</span>
                <span className="bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded font-bold">💵 Free Entry</span>
              </div>
            </div>

            {/* Card B: Hotel preview (floats fast) */}
            <div className="absolute bottom-6 right-2 sm:right-4 w-56 sm:w-64 bg-white border border-zinc-200/60 rounded-2xl p-4 shadow-2xl animate-float-fast transform rotate-2 z-30">
              <div className="relative mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80" 
                  alt="Hotel" 
                  className="w-full h-24 sm:h-28 object-cover rounded-xl shadow-inner"
                />
                <span className="absolute top-2 right-2 bg-white/95 px-2 py-0.5 rounded-full text-[10px] font-bold text-amber-700 shadow-sm">⭐ 4.9</span>
              </div>
              <h4 className="font-extrabold text-sm text-zinc-950 truncate">Grand Palace Resort</h4>
              <p className="text-zinc-500 text-[9px] sm:text-[10px] flex items-center gap-0.5 truncate">📍 Champs-Élysées, Paris</p>
              <div className="border-t border-zinc-100 pt-2 mt-2 flex justify-between items-center text-[9px] sm:text-[10px]">
                <span className="text-zinc-400 font-bold">EST. COST</span>
                <span className="text-emerald-700 font-extrabold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">$210/night</span>
              </div>
            </div>

            {/* Card C: Summary badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white border-4 border-white px-4 py-2.5 rounded-full shadow-2xl font-bold text-xs flex items-center gap-2 z-10 animate-pulse">
              ✈️ Paris: 5 Days Plan Ready!
            </div>
          </div>
        </div>

        {/* Features Showcase Section */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-md border border-zinc-200/60 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-2xl shadow-inner">
              🗺️
            </div>
            <h3 className="font-bold text-xl text-zinc-800 mt-5">Custom Itineraries</h3>
            <p className="text-zinc-500 text-sm text-center mt-2 leading-relaxed">
              Get personalized travel plans tailored specifically to your preferences, style, and budget.
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-md border border-zinc-200/60 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-2xl shadow-inner">
              💳
            </div>
            <h3 className="font-bold text-xl text-zinc-800 mt-5">Budget-Conscious</h3>
            <p className="text-zinc-500 text-sm text-center mt-2 leading-relaxed">
              Explore curated travel plans that fit your exact budget parameters without compromising on fun.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-md border border-zinc-200/60 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl shadow-inner">
              ⚡
            </div>
            <h3 className="font-bold text-xl text-zinc-800 mt-5">AI-Powered Planning</h3>
            <p className="text-zinc-500 text-sm text-center mt-2 leading-relaxed">
              Leverage advanced model planning to schedule dates, hotels, and attractions in seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;