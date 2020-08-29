import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./NavBar.css"

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="justify-content-center">
        <Navbar.Brand href="#home">
          <img
            src="https://mameluc.com.ar/logo-economiargentina.png"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default NavBar;
