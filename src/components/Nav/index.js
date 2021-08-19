import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

function NavHeader(props) {
    const {
        setPrevWorksSelected
    } = props;

    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Tyler's Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-na" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" onClick={() => setPrevWorksSelected(false)}>Home</Nav.Link>
                            <Nav.Link href="#link" onClick={() => setPrevWorksSelected(true)}>Previous Works</Nav.Link>
                            <NavDropdown title="Contact Me" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://github.com/TylerEvans-hash">GitHub</NavDropdown.Item>
                                <NavDropdown.Item href="mailto:tyler.bradley117@gmail.com">Email</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.linkedin.com/in/tyler-bradley-0b0946190">LinkedIn</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavHeader;