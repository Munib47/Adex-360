import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Search from "../../assets/img/newSearch.png";
import Logo from "../../assets/img/logo_adex.png";
import YellowArrow from "../../assets/img/yellowArrow.png";
import industryStory from "../../assets/img/1-in.png";
import adxStory from "../../assets/img/1-Adx.png";
import industryAudience from "../../assets/img/2-in.png";
import adxAudience from "../../assets/img/2-Adx.png";
import industryStrategy from "../../assets/img/3-in.png";
import industryThumbs from "../../assets/img/4-in.png";
import adxCup from "../../assets/img/4-Adx.png";
import Dollar from "../../assets/img/dollar.png";
import rotateImage from "../../assets/img/rotateimg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";

import "./Consumer.css";

const Consumer = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const rotateImg = document.querySelector(".rotateImage");
      var top = rotateImg.offsetTop;
      let Myrotate = eval(window.pageYOffset - top);

      // console.log(Myrotate);
      rotateImg.style.transform = `rotate(${Myrotate}deg)`;
    });
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <>
      <Container>
        <div data-aos="fade-left">
          <section id="consumer-section" className="bg-black consumerPadding">
            <h1 className="consumer-section__heading">
              Consumer{" "}
              <span className="orange-color">
                Emp
                <span>
                  <img
                    src={Search}
                    alt="search"
                    className="img-fluid searchImg"
                  />
                </span>
                thy
              </span>{" "}
              makes the difference between digital marketing agencies and us.
            </h1>
          </section>
        </div>
        <section className="bg-black">
          <Row className="text-center customPadding ">
            <Col lg={4} md={4} sm={4} xs={4}>
              <h4 className="steps-title">Industry Practice</h4>
              <span>
                <img
                  src={YellowArrow}
                  alt="yellowArrow"
                  className="img-fluid"
                />
              </span>
            </Col>
            <Col
              md={{ span: 4, offset: 4 }}
              sm={{ span: 4, offset: 4 }}
              xs={{ span: 4, offset: 4 }}
              lg={{ span: 4, offset: 4 }}
              style={{ paddingTop: "2vw" }}
            >
              <img
                alt=""
                src={Logo}
                width="165"
                height="52"
                className="d-inline-block align-top img-fluid"
              />
              <span>
                <img
                  style={{ paddingTop: "4.222vw" }}
                  src={YellowArrow}
                  alt="yellowArrow"
                  className="img-fluid"
                />
              </span>
            </Col>
          </Row>
          <div className="imgResize">
            <div data-aos="slide-up">
              <Row className="text-center customPadding">
                <Col lg={4} md={4} sm={4} xs={4}>
                  <span style={{ fontWeight: "700", color: "white" }}>
                    <img
                      src={industryStory}
                      alt="industryStory"
                      className="img-fluid "
                    />
                  </span>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <h4 className="whiteColor">
                    1. It all start with story
                    <br /> telling but...
                  </h4>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <span>
                    <img src={adxStory} alt="adxStory" className="img-fluid" />
                  </span>
                </Col>
              </Row>
            </div>
            <div data-aos="slide-up">
              <Row className="text-center customPadding">
                <Col lg={4} md={4} sm={4} xs={4}>
                  <span>
                    <img
                      src={industryAudience}
                      alt="TwoIndustry"
                      className="img-fluid"
                    />
                  </span>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <h4 className="whiteColor">
                    2. We don’t waste your
                    <br /> budget audience testing
                  </h4>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <span>
                    <img
                      src={adxAudience}
                      alt="adxAudience"
                      className="img-fluid"
                    />
                  </span>
                </Col>
              </Row>
            </div>
            <div data-aos="slide-up">
              <Row className="text-center customPadding">
                <Col lg={4} md={4} sm={4} xs={4}>
                  <span>
                    <img
                      src={industryStrategy}
                      alt="ThreeIndustry"
                      className="img-fluid"
                    />
                  </span>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <h4 className="whiteColor">
                    3. We change the
                    <br /> strategy quickly
                  </h4>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <img src={adxStory} alt="adxStory" className="img-fluid" />
                </Col>
              </Row>
            </div>
            <div data-aos="slide-up">
              <Row className="text-center customPadding">
                <Col lg={4} md={4} sm={4} xs={4}>
                  <span>
                    <img
                      src={industryThumbs}
                      alt="FourIndustry"
                      className="img-fluid"
                    />
                  </span>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <h4 className="whiteColor">
                    4. And we make a
                    <br />
                    difference
                  </h4>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <span>
                    <img src={adxCup} alt="adxCup" className="img-fluid" />
                  </span>
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <Container>
          <div data-aos="fade-left">
            <section className="bg-black">
              <h1 className="consumer-section__heading spacing">
                High impact campaigns,
                <br /> no penny wa
                <span className="orange-color">
                  <img src={Dollar} alt="Dollar" className="img-fluid" />
                </span>
                ted doing testing.
              </h1>
            </section>
          </div>
        </Container>
        <Container>
          <div data-aos="fade-left">
            <section
              className="rotateImageSection bg-black bgImg"
              style={{
                backgroundImage:
                  "url(https://marketwise.io/images/audience/back.webp)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                className="rotateImage img-fluid"
                src={rotateImage}
                alt="rotate"
              />
              <Row className="pb-5 whiteColor">
                <Col lg={6} md={6} sm={6} xs={6}>
                  <h1 className=" spacing  textPadding fontGrand">
                    Grand
                    <br />
                    audience
                    <br />
                    <span className="orange-color">Size</span>
                  </h1>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <h4 className=" costPadding">
                    with optimized
                    <br />
                    conversion cost
                  </h4>
                </Col>
              </Row>
            </section>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Consumer;
