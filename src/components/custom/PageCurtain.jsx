import { useEffect, useState } from "react";

function PageCurtain() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1550);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[200] pointer-events-none overflow-hidden"
    >
      <div
        className="curtain-top absolute inset-x-0 top-0 h-1/2"
        style={{ backgroundColor: "var(--void)" }}
      />
      <div
        className="curtain-bottom absolute inset-x-0 bottom-0 h-1/2"
        style={{ backgroundColor: "var(--void)" }}
      />
      <div
        className="curtain-line absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2"
        style={{ backgroundColor: "rgba(237, 232, 224, 0.45)" }}
      />
    </div>
  );
}

export default PageCurtain;
