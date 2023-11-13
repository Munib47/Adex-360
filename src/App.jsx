import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/Hero";
import ExploreSection from "./components/ExploreSection/Explore";
import ConsumerSection from "./components/ConsumerSection/Consumer";
import PerfomanceSection from "./components/PerfomanceSection/Perfomance";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ExploreSection />
      <ConsumerSection />
      <PerfomanceSection />
      <Footer />
    </>
  );
}

export default App;
