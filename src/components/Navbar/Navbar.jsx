import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../../assets/img/logo_adex.png";

import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <>
      <Navbar
        id="navbar"
        sticky="top"
        className="d-flex  justify-content-between align-items-center w-100 py-4 "
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
