import { useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Coins, Compass, Gem, Home, Scale, User, Users } from "lucide-react";
import { budgetInfo, noOfPeople, AI_PROMPT } from "@/components/constants/options";
import { chatSession } from "@/Services/AiModal";
import { toast } from "sonner";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import PageCurtain from "@/components/custom/PageCurtain";
import { db } from "@/Services/fireBase";
import { useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";

const OPTION_ICONS = {
  coins: Coins,
  scale: Scale,
  gem: Gem,
  user: User,
  users: Users,
  home: Home,
  compass: Compass,
};

const TRAVELER_MAP = {
  Solo: "Just me",
  Couple: "Couples",
  Family: "Family",
  Friends: "Friends",
};

function CreateTrip() {
  const location = useLocation();
  const brief = location.state?.brief;

  const [finalData, setFinalData] = useState({
    destination: brief?.idea || "",
    noOfDays: brief?.days ? Number(brief.days) : 0,
    noOfPeople: brief?.travelers ? TRAVELER_MAP[brief.travelers] || brief.travelers : "",
    budget: brief?.budget || "",
  });

  const mail = useSelector((store) => store.user.mail);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    { label: "Finalizing details", desc: "Structuring pricing, coordinates, and routing..." },
  ];

  const processInput = (name, data) => {
    setFinalData((prev) => ({
      ...prev,
      [name]: data,
    }));
  };

  const inputValidate = async () => {
    if (!finalData?.budget || !finalData?.destination || !finalData?.noOfPeople || !finalData?.noOfDays) {
      toast.error("Please fill all the columns!");
      return;
    }

    setLoading(true);
    try {
      const apiEndpoint = "/.netlify/functions/generate-trip";
      let tripData = null;
      let logs = [];

      const controller = new AbortController();
      const timeoutId = setTimeout(
        () => controller.abort(),
        import.meta.env.DEV ? 5000 : 25000
      );

      try {
        const response = await fetch(apiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            destination: finalData.destination,
            noOfDays: finalData.noOfDays,
            noOfPeople: finalData.noOfPeople,
            budget: finalData.budget,
          }),
        });

        if (response.ok) {
          const json = await response.json();
          tripData = json.tripData;
          logs = json.logs || [];
        } else if (!import.meta.env.DEV) {
          throw new Error("Failed to generate travel plan");
        }
      } catch (fetchErr) {
        if (!import.meta.env.DEV) {
          throw fetchErr.name === "AbortError"
            ? new Error("Request timed out while generating itinerary")
            : fetchErr;
        }
      } finally {
        clearTimeout(timeoutId);
      }

      // Fallback in local Vite dev when Netlify Dev server (:8888) is not running
      if (!tripData && import.meta.env.DEV) {
        const prompt = AI_PROMPT.replace("{location}", finalData.destination)
          .replace("{totalDays}", finalData.noOfDays)
          .replace("{noOfPerson}", finalData.noOfPeople)
          .replace("{budgetType}", finalData.budget)
          .replace("{totalDays}", finalData.noOfDays);

        const result = await chatSession.sendMessage(prompt);
        const text = result?.response?.text()?.trim();
        if (!text) {
          throw new Error("Empty response from AI model");
        }
        const cleanedText = text.replace(/^```(?:json)?\s*|\s*```$/g, "");
        tripData = JSON.parse(cleanedText);
      }

      if (!tripData) {
        throw new Error("Failed to generate travel plan");
      }

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
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--void)", color: "var(--bone)" }}
    >
      <PageCurtain />
      <Header />

      {/* Editorial Loading Overlay */}
      {loading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(11, 11, 10, 0.88)", backdropFilter: "blur(10px)" }}
        >
          <div
            className="w-full max-w-md border p-8 sm:p-10"
            style={{
              backgroundColor: "var(--void-raised)",
              borderColor: "var(--line)",
              color: "var(--bone)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <AiOutlineLoading3Quarters className="animate-spin text-lg text-[var(--bronze)]" />
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--bronze)]">
                Curating Itinerary
              </span>
            </div>

            <h3 className="m-0 font-light tracking-[-0.025em] text-2xl text-[var(--bone)]">
              Building your journey.
            </h3>
            <p className="text-sm text-[var(--mute)] mt-2 mb-8">
              Crafting your custom travel experience...
            </p>

            <div className="w-full space-y-5">
              {stepsList.map((step, idx) => {
                const isCompleted = idx < currentStep;
                const isActive = idx === currentStep;

                return (
                  <div key={idx} className="flex gap-4 items-start text-left">
                    <div
                      className="mt-0.5 flex items-center justify-center w-6 h-6 border text-[10px] font-medium tracking-wider"
                      style={{
                        borderColor: isActive
                          ? "var(--bronze)"
                          : isCompleted
                          ? "var(--bone)"
                          : "var(--line)",
                        color: isActive
                          ? "var(--bronze)"
                          : isCompleted
                          ? "var(--bone)"
                          : "var(--mute)",
                      }}
                    >
                      {isCompleted ? "✓" : `0${idx + 1}`}
                    </div>
                    <div className="flex-1">
                      <p
                        className="text-sm font-normal tracking-tight transition-colors"
                        style={{
                          color: isActive
                            ? "var(--bone)"
                            : isCompleted
                            ? "var(--bone)"
                            : "var(--mute)",
                        }}
                      >
                        {step.label}
                      </p>
                      {isActive && (
                        <p className="text-xs text-[var(--mute)] mt-1 animate-pulse">
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

      {/* Main Editorial Form */}
      <main
        className="flex-1 w-full max-w-5xl mx-auto"
        style={{
          padding: "calc(var(--head-h) + 2.5rem) var(--gutter) 5rem",
        }}
      >
        <div className="relative pb-10">
          <div
            className="animate-editorial-rise"
            style={{ animationDelay: "0.55s" }}
          >
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--bronze)] mb-4">
              Trip Brief
            </p>
            <h1 className="m-0 font-light tracking-[-0.035em] leading-[1.02] text-[clamp(2.1rem,4.5vw,4rem)] text-[var(--bone)]">
              Tell us your travel preferences.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[var(--mute)] max-w-2xl leading-relaxed">
              Provide a few details and our AI curator will compose a tailored, day-by-day itinerary around your pace, stays, and budget.
            </p>
          </div>
          <div
            aria-hidden="true"
            className="animate-hairline absolute bottom-0 left-0 right-0 h-[1px]"
            style={{ backgroundColor: "var(--line)", animationDelay: "0.75s" }}
          />
        </div>

        <div className="space-y-14 mt-12">
          {/* 01 Destination */}
          <div
            className="animate-editorial-rise"
            style={{ animationDelay: "0.72s" }}
          >
            <label className="block">
              <span className="block text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--mute)] mb-3">
                01 / Destination
              </span>
              <span className="block text-xl sm:text-2xl font-light tracking-[-0.02em] text-[var(--bone)] mb-4">
                Where would you like to go?
              </span>
              <input
                type="text"
                value={finalData.destination}
                placeholder="Ex. Paris, London, Dubai, Tokyo"
                onChange={(e) => processInput("destination", e.target.value)}
                className="w-full sm:w-9/12 bg-transparent border-b py-3.5 text-base sm:text-lg text-[var(--bone)] placeholder:text-[var(--mute)]/50 focus:outline-none focus:border-[var(--bronze)] transition-colors duration-300"
                style={{ borderColor: "var(--line)" }}
              />
            </label>
          </div>

          {/* 02 Duration */}
          <div
            className="animate-editorial-rise"
            style={{ animationDelay: "0.88s" }}
          >
            <label className="block">
              <span className="block text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--mute)] mb-3">
                02 / Duration
              </span>
              <span className="block text-xl sm:text-2xl font-light tracking-[-0.02em] text-[var(--bone)] mb-4">
                How many days will you travel?
              </span>
              <input
                type="number"
                min={1}
                max={30}
                value={finalData.noOfDays || ""}
                placeholder="Ex. 5"
                onChange={(e) => processInput("noOfDays", e.target.value)}
                className="w-full sm:w-9/12 bg-transparent border-b py-3.5 text-base sm:text-lg text-[var(--bone)] placeholder:text-[var(--mute)]/50 focus:outline-none focus:border-[var(--bronze)] transition-colors duration-300"
                style={{ borderColor: "var(--line)" }}
              />
            </label>
          </div>

          {/* 03 Budget Tier */}
          <div
            className="animate-editorial-rise"
            style={{ animationDelay: "1.04s" }}
          >
            <span className="block text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--mute)] mb-3">
              03 / Budget Tier
            </span>
            <h2 className="m-0 text-xl sm:text-2xl font-light tracking-[-0.02em] text-[var(--bone)] mb-5">
              What is your preferred budget?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full sm:w-10/12">
              {budgetInfo.map((item, index) => {
                const selected = finalData.budget === item.name;
                const Icon = OPTION_ICONS[item.icon] || Coins;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => processInput("budget", item.name)}
                    className="relative overflow-hidden text-left border p-6 transition-all duration-500 group hover:-translate-y-0.5"
                    style={{
                      backgroundColor: selected ? "var(--void-raised)" : "transparent",
                      borderColor: selected ? "var(--bronze)" : "var(--line)",
                    }}
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute bottom-0 left-0 right-0 h-[1px] origin-left transition-transform duration-500 ${
                        selected ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      style={{ backgroundColor: "var(--bronze)" }}
                    />
                    <Icon
                      strokeWidth={1.25}
                      className={`w-5 h-5 mb-5 transition-colors duration-300 ${
                        selected
                          ? "text-[var(--bronze)]"
                          : "text-[var(--mute)] group-hover:text-[var(--bone)]"
                      }`}
                    />
                    <span className="block text-base font-normal tracking-tight text-[var(--bone)]">
                      {item.name}
                    </span>
                    <span className="block text-xs text-[var(--mute)] mt-1.5 leading-relaxed">
                      {item.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 04 Companions */}
          <div
            className="animate-editorial-rise"
            style={{ animationDelay: "1.20s" }}
          >
            <span className="block text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--mute)] mb-3">
              04 / Companions
            </span>
            <h2 className="m-0 text-xl sm:text-2xl font-light tracking-[-0.02em] text-[var(--bone)] mb-5">
              Who are you traveling with?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full sm:w-10/12">
              {noOfPeople.map((item, index) => {
                const selected = finalData.noOfPeople === item.name;
                const Icon = OPTION_ICONS[item.icon] || User;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => processInput("noOfPeople", item.name)}
                    className="relative overflow-hidden text-left border p-6 transition-all duration-500 group hover:-translate-y-0.5"
                    style={{
                      backgroundColor: selected ? "var(--void-raised)" : "transparent",
                      borderColor: selected ? "var(--bronze)" : "var(--line)",
                    }}
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute bottom-0 left-0 right-0 h-[1px] origin-left transition-transform duration-500 ${
                        selected ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      style={{ backgroundColor: "var(--bronze)" }}
                    />
                    <Icon
                      strokeWidth={1.25}
                      className={`w-5 h-5 mb-5 transition-colors duration-300 ${
                        selected
                          ? "text-[var(--bronze)]"
                          : "text-[var(--mute)] group-hover:text-[var(--bone)]"
                      }`}
                    />
                    <span className="block text-base font-normal tracking-tight text-[var(--bone)]">
                      {item.name}
                    </span>
                    <span className="block text-xs text-[var(--mute)] mt-1.5 leading-relaxed">
                      {item.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit */}
          <div
            className="animate-editorial-rise pt-6 border-t flex items-center justify-between w-full sm:w-10/12"
            style={{ borderColor: "var(--line)", animationDelay: "1.36s" }}
          >
            <span className="text-[11px] tracking-[0.16em] uppercase text-[var(--mute)]">
              Ready when you are
            </span>
            <button
              type="button"
              disabled={loading}
              onClick={inputValidate}
              className="group relative overflow-hidden px-8 py-4 text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 disabled:opacity-50 hover:bg-[var(--bronze)]"
              style={{
                backgroundColor: "var(--bone)",
                color: "var(--ink)",
              }}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin text-base" />
              ) : (
                <span className="inline-flex items-center gap-2">
                  <span>Generate Trip</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              )}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default CreateTrip;
