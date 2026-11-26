import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/custom/Header";
import Hero from "./components/custom/Hero";
import EditorialPane from "./components/custom/EditorialPane";
import PillarsSection from "./components/custom/PillarsSection";
import Footer from "./components/custom/Footer";
import BriefDrawer from "./components/custom/BriefDrawer";
import PageCurtain from "./components/custom/PageCurtain";
import { useSmoothPageScroll } from "./hooks/useSmoothPageScroll";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Services/fireBase";
import { useDispatch } from "react-redux";
import { setUser } from "./utils/userSlice";

function App() {
  const dispatch = useDispatch();
  const [briefOpen, setBriefOpen] = useState(false);

  useSmoothPageScroll({ enabled: !briefOpen, duration: 1250 });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        setTimeout(() => {
          dispatch(setUser({ uid, name: displayName, mail: email }));
        }, 2000);
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-[var(--void)] text-[var(--bone)]">
      <PageCurtain />
      <Header onOpenBrief={() => setBriefOpen(true)} />
      <main id="main">
        <Hero onOpenBrief={() => setBriefOpen(true)} />
        <EditorialPane />
        <PillarsSection />
      </main>
      <Footer onOpenBrief={() => setBriefOpen(true)} />
      <BriefDrawer open={briefOpen} onClose={() => setBriefOpen(false)} />
    </div>
  );
}

export default App;
