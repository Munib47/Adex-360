import { useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../../assets/img/logo_adex.png";

import "./Navbar.css";

const CustomNavbar = () => {
  useEffect(() => {
    var navbar = document.querySelector("#navbar");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        navbar.style.backgroundColor = "#000000";
      } else {
        navbar.style.backgroundColor = "transparent";
      }
    });
  }, []);
  return (
    <>
      <Navbar
        id="navbar"
        sticky="top"
        className="d-flex  justify-content-between align-items-center w-100 py-4 "
        style={{ background: "transparent" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="adx logo"
              src={Logo}
              width="165"
              height="52"
              className="d-inline-block align-top img-fluid"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="" className="nav-btn text-light">
              Let's Talk
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
