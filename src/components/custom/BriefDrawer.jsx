/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BriefDrawer({ open, onClose }) {
  const [step, setStep] = useState(1);
  const [idea, setIdea] = useState("");
  const [days, setDays] = useState("5");
  const [travelers, setTravelers] = useState("Couple");
  const [budget, setBudget] = useState("Moderate");
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setStep(1), 250);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  const handleLaunchPlanner = () => {
    onClose();
    navigate("/create-trip", {
      state: { brief: { idea, days, travelers, budget } },
    });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-5 sm:p-8"
      style={{ backgroundColor: "rgba(11, 11, 10, 0.88)", backdropFilter: "blur(10px)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Trip Brief"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close brief"
        className="fixed top-6 right-6 sm:top-8 sm:right-10 text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--mute)] hover:text-[var(--bone)] transition-colors"
      >
        Close ✕
      </button>

      <div
        className="w-full max-w-xl border p-7 sm:p-11"
        style={{
          backgroundColor: "var(--void-raised)",
          borderColor: "var(--line)",
          color: "var(--bone)",
        }}
      >
        {step === 1 && (
          <section className="space-y-6">
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--bronze)]">
              01 / The Destination
            </p>
            <h2 className="m-0 font-light tracking-[-0.03em] leading-[1.08] text-[clamp(1.75rem,3.5vw,2.6rem)]">
              Tell us where you have in mind.
            </h2>
            <p className="text-sm text-[var(--mute)] leading-relaxed">
              Share a city, region, or mood in your own words. A few lines is plenty.
            </p>
            <textarea
              rows={3}
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="e.g. Five quiet days in Kyoto with boutique ryokans, architecture, and local kaiseki…"
              className="w-full bg-transparent border-b py-3 text-base text-[var(--bone)] placeholder:text-[var(--mute)]/60 focus:outline-none focus:border-[var(--bronze)] resize-none transition-colors"
              style={{ borderColor: "var(--line)" }}
            />
            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 text-[11px] font-medium tracking-[0.18em] uppercase bg-[var(--bone)] text-[var(--ink)] hover:bg-[var(--bronze)] hover:text-[var(--void)] transition-colors duration-300"
              >
                Continue
              </button>
              <button
                type="button"
                onClick={handleLaunchPlanner}
                className="text-[11px] font-medium tracking-[0.16em] uppercase text-[var(--mute)] hover:text-[var(--bone)] transition-colors"
              >
                Skip to Full Planner →
              </button>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="space-y-6">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--mute)] hover:text-[var(--bone)] transition-colors"
            >
              ← Edit destination
            </button>
            <h2 className="m-0 font-light tracking-[-0.03em] leading-[1.08] text-[clamp(1.75rem,3.5vw,2.6rem)]">
              Got it.
            </h2>
            <p className="text-sm text-[var(--mute)]">
              How should we pace and tailor this journey?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <label className="block">
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[var(--mute)] mb-2">
                  Days
                </span>
                <input
                  type="number"
                  min={1}
                  max={21}
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full bg-transparent border-b py-2 text-sm text-[var(--bone)] focus:outline-none focus:border-[var(--bronze)]"
                  style={{ borderColor: "var(--line)" }}
                />
              </label>

              <label className="block">
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[var(--mute)] mb-2">
                  Travellers
                </span>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full bg-[var(--void-raised)] border-b py-2 text-sm text-[var(--bone)] focus:outline-none focus:border-[var(--bronze)]"
                  style={{ borderColor: "var(--line)" }}
                >
                  <option value="Solo">Solo</option>
                  <option value="Couple">Couple</option>
                  <option value="Family">Family</option>
                  <option value="Friends">Friends</option>
                </select>
              </label>

              <label className="block">
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[var(--mute)] mb-2">
                  Tier
                </span>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-[var(--void-raised)] border-b py-2 text-sm text-[var(--bone)] focus:outline-none focus:border-[var(--bronze)]"
                  style={{ borderColor: "var(--line)" }}
                >
                  <option value="Cheap">Essential</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </label>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-3 text-[11px] font-medium tracking-[0.18em] uppercase bg-[var(--bone)] text-[var(--ink)] hover:bg-[var(--bronze)] hover:text-[var(--void)] transition-colors duration-300"
              >
                Make It Happen
              </button>
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="space-y-6">
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--bronze)]">
              Ready
            </p>
            <h2 className="m-0 font-light tracking-[-0.03em] leading-[1.08] text-[clamp(1.75rem,3.5vw,2.6rem)]">
              Your brief is ready.
            </h2>
            <p className="text-sm text-[var(--mute)] leading-relaxed">
              {idea ? `“${idea}” — ` : ""}
              {days} days · {travelers} · {budget} tier. Continue into the planner to generate your full day-by-day itinerary.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <button
                type="button"
                onClick={handleLaunchPlanner}
                className="px-6 py-3 text-[11px] font-medium tracking-[0.18em] uppercase bg-[var(--bone)] text-[var(--ink)] hover:bg-[var(--bronze)] hover:text-[var(--void)] transition-colors duration-300"
              >
                Generate Itinerary →
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--mute)] hover:text-[var(--bone)] transition-colors"
              >
                Close
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default BriefDrawer;
