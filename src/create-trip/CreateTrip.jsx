import { AiOutlineLoading3Quarters } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { AI_PROMPT, budgetInfo, noOfPeople } from "@/components/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { chatSession } from "@/Services/AiModal";
import Header from "@/components/custom/Header";
import { db } from "@/Services/fireBase";
import { useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [finalData, setFinalData] = useState({
    destination: "",
    noOfDays: 0,
    noOfPeople: "",
    budget: "",
  });

  const mail = useSelector((store) => store.user.mail);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (loading) {
      setCurrentStep(0);
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < 3) return prev + 1;
          return prev;
        });
      }, 3000);
    } else {
      setCurrentStep(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const stepsList = [
    { label: "Analyzing travel preferences", desc: "Tailoring destination recommendations to your style..." },
    { label: "Drafting customized itinerary", desc: "Selecting the best attractions, timings, and schedules..." },
    { label: "Finding recommended hotels", desc: "Matching accommodations to your budget and group size..." },
    { label: "Finalizing details", desc: "Structuring pricing, coordinates, and routing..." }
  ];

  const processInput = (name, data) => {
    setFinalData({
      ...finalData,
      [name]: data,
    });
  };

  const inputValidate = async () => {
    if (!finalData?.budget || !finalData?.destination || !finalData?.noOfPeople || !finalData?.noOfDays) {
      toast.error("Please fill all the columns!");
      return;
    }

    setLoading(true);
    try {
      const isDev = import.meta.env.DEV;
      const baseUrl = isDev ? "http://localhost:8888" : "";
      const apiEndpoint = `${baseUrl}/.netlify/functions/generate-trip`;

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination: finalData.destination,
          noOfDays: finalData.noOfDays,
          noOfPeople: finalData.noOfPeople,
          budget: finalData.budget,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate travel plan");
      }

      const { tripData, logs } = await response.json();
      await saveAiData(tripData, logs);
    } catch (err) {
      console.error(err);
      toast.error("Error generating trip: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const saveAiData = async (trip, logs) => {
    const docId = Date.now().toString();
    await setDoc(doc(db, "AiTrip", docId), {
      userSelection: finalData,
      tripData: trip,
      agentLogs: logs || [],
      userEmail: mail || "guest@aitravelplanner.com",
      id: docId,
    });
    navigate("/view-trip/" + docId);
  };

  return (
    <div>
      <Header />
      {loading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white border rounded-2xl max-w-md w-full p-8 shadow-2xl flex flex-col items-center">
            <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-zinc-200"></div>
              <div className="absolute inset-0 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
              <span className="text-xl">🤖</span>
            </div>
            
            <h3 className="text-xl font-bold mb-1 text-zinc-900 text-center">
              AI Travel Planner
            </h3>
            <p className="text-sm text-zinc-500 mb-8 text-center">
              Creating your custom travel experience...
            </p>

            <div className="w-full space-y-4">
              {stepsList.map((step, idx) => {
                const isCompleted = idx < currentStep;
                const isActive = idx === currentStep;
                
                return (
                  <div key={idx} className="flex gap-4 items-start text-left">
                    <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold border border-zinc-300">
                      {isCompleted ? (
                        <span className="text-green-600 font-bold">✓</span>
                      ) : isActive ? (
                        <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full animate-pulse"></span>
                      ) : (
                        <span className="text-zinc-400">{idx + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-semibold ${isActive ? "text-indigo-600 font-bold" : isCompleted ? "text-zinc-800" : "text-zinc-400"}`}>
                        {step.label}
                      </p>
                      {isActive && (
                        <p className="text-xs text-zinc-500 mt-0.5 animate-pulse">
                          {step.desc}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <div className="sm:px-10 md:px-32 lg:px-50 xl:10px px-5 mt-10 max-w-7xl mx-auto pb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold pb-2 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600 bg-clip-text text-transparent">
          Tell us your travel preferences
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base max-w-2xl leading-relaxed">
          Provide some basic information, and our AI travel curator will build a highly customized, day-by-day itinerary tailored perfectly to your requirements.
        </p>
        <div>
          {/* Destination Input */}
          <div className="mt-16">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-800">What is your destination choice?</h2>
            <input
              type="text"
              className="border border-zinc-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none mt-3 w-full sm:w-8/12 rounded-xl h-12 px-4 transition-all bg-white font-medium text-zinc-800 shadow-sm"
              placeholder="Ex. Qatar, Tokyo, Mumbai"
              onChange={(e) => {
                processInput("destination", e.target.value);
              }}
            />
          </div>

          {/* Number of Days Input */}
          <div className="mt-10">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-800">What is the duration of your trip?</h2>
            <input
              type="text"
              className="border border-zinc-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none mt-3 w-full sm:w-8/12 rounded-xl h-12 px-4 transition-all bg-white font-medium text-zinc-800 shadow-sm"
              placeholder="Ex. 5 (Enter number of days)"
              onChange={(e) => {
                processInput("noOfDays", e.target.value);
              }}
            />
          </div>

          {/* Budget Options */}
          <div className="mt-10">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-800">What is your budget tier?</h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-8/12 mt-3">
              {budgetInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col border w-full sm:w-4/12 rounded-2xl p-5 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md ${
                    finalData.budget === item.name 
                      ? "border-2 border-indigo-600 bg-indigo-50/20 shadow-[0_4px_20px_rgba(99,102,241,0.1)]" 
                      : "border-zinc-200 bg-white"
                  }`}
                  onClick={() => processInput("budget", item.name)}
                >
                  <p className="text-3xl mb-3">{item.logo}</p>
                  <h2 className="text-lg font-bold text-zinc-800">{item.name}</h2>
                  <p className="text-zinc-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Number of People Options */}
          <div className="mt-10">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-800">Who do you plan on traveling with?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full sm:w-8/12 mt-3">
              {noOfPeople.map((item, index) => (
                <div
                  key={index}
                  className={`border rounded-2xl p-5 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md ${
                    finalData.noOfPeople === item.name 
                      ? "border-2 border-indigo-600 bg-indigo-50/20 shadow-[0_4px_20px_rgba(99,102,241,0.1)]" 
                      : "border-zinc-200 bg-white"
                  }`}
                  onClick={() => processInput("noOfPeople", item.name)}
                >
                  <p className="text-3xl mb-3">{item.logo}</p>
                  <h2 className="text-lg font-bold text-zinc-800">{item.name}</h2>
                  <p className="text-zinc-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Generate Trip Button */}
          <div className="my-12 flex justify-end w-full sm:w-8/12">
            <Button 
              disabled={loading} 
              onClick={inputValidate}
              className="px-8 py-6 text-base font-bold bg-gradient-to-r from-[#f56551] to-rose-600 hover:from-[#e25440] hover:to-rose-500 text-white rounded-xl shadow-[0_4px_20px_rgba(245,101,81,0.25)] transition-all transform hover:-translate-y-0.5"
            >
              {loading ? <AiOutlineLoading3Quarters className="animate-spin text-xl" /> : "Generate trip"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
