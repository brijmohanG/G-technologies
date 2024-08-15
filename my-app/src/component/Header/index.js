import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import "./index.css"
import Nav from 'react-bootstrap/Nav';


class Header extends Component{
    render() {
        return(
            <div className="header-bg-container">
                <Navbar expand="lg" className="bg-body-tertiary header-bg-container">
                    <Container>
                        <Navbar.Brand href="#home" className="brand"><span className="brand-g">G</span> <span className="brand-technologies">Technologies</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/aboutus">About Us</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/industries">Industries</Nav.Link>
                            <Nav.Link href="#technology">Technology</Nav.Link>
                            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}


export default Header