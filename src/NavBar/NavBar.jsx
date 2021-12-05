import {Navbar,Image,NavDropdown,Nav,Badge} from "react-bootstrap"
import React from "react"
import { BsFillPersonFill } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
const NavBar = () => {
    return (
        <div className="home"> 
            <header>
                <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" sticky="top">
                    <div className="container-fluid">
                        <Navbar.Brand href="#home"><Image src="https://via.placeholder.com/80" roundedCircle /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            <Nav.Link href="#work">Work</Nav.Link>
                            <Nav.Link href="#pricing">Resume</Nav.Link>
                            <NavDropdown title="About" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#contact_us">Contact us</Nav.Link>
                            </Nav>
                            <Nav>
                            <Nav.Link href="#"><BsBag /><Badge pill bg="danger">9</Badge></Nav.Link>   
                            <Nav.Link eventKey={2} href="#memes">User name <BsFillPersonFill /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div> 
                </Navbar>
            </header>
        </div>
    )
}
export default NavBar;