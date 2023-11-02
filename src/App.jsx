import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/Hero";
import ExploreSection from "./components/ExploreSection/Explore";
import ConsumerSection from "./components/ConsumerSection/Consumer";
import PerfomanceSection from "./components/PerfomanceSection/Perfomance";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      // User is scrolling up, show the navbar
      document.getElementById("navbar").classList.remove("hide");
    } else {
      // User is scrolling down, hide the navbar
      document.getElementById("navbar").classList.add("hide");
    }

    prevScrollPos = currentScrollPos;
  };

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <HeroSection />
      <ExploreSection />
      <ConsumerSection />
      <PerfomanceSection />
      <Footer />
    </>
  );
}

export default App;
