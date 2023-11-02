import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowTop from "../../assets/img/arrow.svg";
import Polygon from "../../assets/img/polygon.svg";
import Lines from "../../assets/img/lines.png";

import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <>
      <div data-aos="fade-left">
        <div className="polygon">
          <img src={Polygon} alt="pm" className="img-responsive" />
        </div>
        <div className="arrowpurple">
          <img src={ArrowTop} alt="pm" className="img-responsive" />
        </div>
        <div id="hero-section" className="bg-black ">
          <h1 className="hero-section__heading ">
            We help great brands grow
            <br /> their <span className="orange-color">Leads</span>
          </h1>
          <div className="img-lines">
            <img src={Lines} alt="pm" className="img-LI " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
