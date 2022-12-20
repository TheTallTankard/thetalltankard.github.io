import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import tankard from '../img/TheTallTankard_Zoomed_NoBackground.png';
import React from 'react';

class Header extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <header>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="https://thetalltankard.github.io/"><img src={tankard}/></Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href={this.props.href}>{this.props.text}</Nav.Link>
                                <NavDropdown title="Tools" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="https://thetalltankard.github.io/ability-calculator/">Ability Calculator</NavDropdown.Item>
                                    <NavDropdown.Item href="https://thetalltankard.github.io/dice-roller/">Dice Roller</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        )
    }

}

export default Header;