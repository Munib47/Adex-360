import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import WhiteArrow from "../../assets/img/whiteArrow.png";
import Perfomance from "../../assets/img/perfomance.png";
import Seo from "../../assets/img/seo.png";
import Pm from "../../assets/img/pm.png";
import Search from "../../assets/img/newSearch.png";

import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";

import "./Perfomance.css";

const PerfomanceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <>
      <hr />
      <section id="performance " className="pb-5">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <h3 className="performance-section__heading">
                <span>
                  <img src={Pm} alt="pm" className="img-fluid" />
                </span>
                <br /> Performance Marketing
                <span className="orange-color ">
                  Brand Story to your crowd{" "}
                </span>
                <div data-aos="slide-up">
                  <button
                    className="btn"
                    style={{ backgroundColor: "black", color: "#f68b1e" }}
                  >
                    <h6>
                      LET'S TALK{" "}
                      <span>
                        <img
                          src={WhiteArrow}
                          alt="WhiteArrow"
                          className="img-fluid"
                        />
                      </span>
                    </h6>
                  </button>
                </div>
              </h3>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="" data-aos="fade-left">
                <img src={Perfomance} alt="perfomance" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-5">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="" data-aos="fade-right">
                <img src={Seo} alt="seo" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <h1 className="performance-section__heading spacing">
                <span>
                  <img src={Search} alt="industry" className="img-fluid" />
                </span>
                <br /> Search Engine Optimization
                <br /> <span className="orange-color">Grow OrganicallyTT</span>
                <div data-aos="slide-up">
                  <button
                    className="btn"
                    style={{ backgroundColor: "black", color: "#f68b1e" }}
                  >
                    <h6>
                      LET'S TALK
                      <span>
                        <img
                          src={WhiteArrow}
                          alt="industry"
                          className="img-fluid"
                        />
                      </span>
                    </h6>
                  </button>
                </div>
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
      <hr />
      <section className="consultancy">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <h1 className="">
                <span className="orange-color">
                  Schedule a Cosultancy
                  <br />
                  Session with Us
                </span>
              </h1>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <h4 className="">
                <span className="orange-color">TAKE A LEAP!</span>
              </h4>
              <div data-aos="zoom-in">
                <button className="orange-btn">
                  LETS'S TALK{" "}
                  <span>
                    <img src={WhiteArrow} alt="industry" />
                  </span>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PerfomanceSection;
