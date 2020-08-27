import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavBar = () => {
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">COTIZ.AR</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">Dolar</Nav.Link>
                    <Nav.Link href="#pricing">Cripto</Nav.Link>
                    <NavDropdown title="Desplegable" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Seccion 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Seccion 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Seccion 3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Seccion 4</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavBar;

