import React from "react";
import { Row, Col } from "react-bootstrap";
import Logo from "../../assets/img/logo_adex.png";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer bg-black py-5 px-5 ">
      <Row>
        <Col className="" md={4} lg={4} sm={12} xs={12}>
          <img
            alt=""
            src={Logo}
            width="165"
            height="52"
            className="d-inline-block align-top img-fluid"
          />
          <div className="pt-5 d-flex justify-content-between align-items-center w-75 ">
            <a target="_blank" href="https://www.linkedin.com/company/adex360/">
              <FaLinkedin style={{ color: "#fff" }} />
            </a>
            <a target="_blank" href="https://twitter.com/adex_360">
              <FaTwitter style={{ color: "#fff" }} />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCkDwow6DlPIJnF8aI89zeUQ"
            >
              <FaYoutube style={{ color: "#fff" }} />
            </a>
            <a target="_blank" href="https://www.instagram.com/adex.360/">
              <FaInstagram style={{ color: "#fff" }} />
            </a>
            <a target="_blank" href="https://www.facebook.com/360.adex/">
              <FaFacebookF style={{ color: "#fff " }} />
            </a>
          </div>
        </Col>
        <Col
          className="footerPadding text-light"
          md={{ span: 4, offset: 4 }}
          lg={{ span: 4, offset: 4 }}
          sm={12}
          xs={12}
        >
          <h5>
            Contact: <br />
            info@adex360.com <br />
            +92 (301) 822-0878 <br />
            8th Floor, Aashiyana Shopping Center <br />
            Main Boulevard, Gulberg III, <br />
            Lahore, Punjab, Pakistan - 54000
          </h5>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
