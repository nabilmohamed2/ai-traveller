function Shimmer() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: "var(--void)",
        padding: "calc(var(--head-h) + 2.5rem) var(--gutter) 5rem",
      }}
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <div
          className="h-[340px] w-full border animate-pulse"
          style={{ backgroundColor: "var(--void-raised)", borderColor: "var(--line)" }}
        />
        <div className="space-y-4">
          <div
            className="h-8 w-5/12 animate-pulse"
            style={{ backgroundColor: "var(--void-raised)" }}
          />
          <div
            className="h-4 w-8/12 animate-pulse"
            style={{ backgroundColor: "var(--void-raised)" }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          {[0, 1, 2].map((idx) => (
            <div
              key={idx}
              className="h-64 border animate-pulse"
              style={{ backgroundColor: "var(--void-raised)", borderColor: "var(--line)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shimmer;
