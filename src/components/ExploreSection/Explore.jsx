import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Explore from "../../assets/img/explore.png";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Explore.css";

const ExploreSection = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const rotateImg = document.getElementById("searchImg");
      var top = rotateImg.offsetTop;
      let Myrotate = eval(window.pageYOffset - top);
      rotateImg.style.transform = `rotate(${Myrotate / 3}deg)`;
    });
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <>
      {/* <hr /> */}
      <div data-aos="fade-left">
        <section id="explore-section" className=" bg-black">
          <Row className="backgroundExplore">
            <Col lg={12} sm={12} md={12} xs={12}>
              <h1 className=" explore-section__heading">
                We expl
                <span>
                  <img
                    src={Explore}
                    alt=""
                    id="searchImg"
                    className="img-fluid"
                  />
                </span>
                re markets, it helps
                <br /> us understand consumer
                <br /> behavior deeply ,
                <span className="orange-color">
                  to optimize{"  "}
                  <br />
                  campaigns better.
                </span>
              </h1>
            </Col>
          </Row>
        </section>
      </div>
      {/* <hr /> */}
    </>
  );
};

export default ExploreSection;
