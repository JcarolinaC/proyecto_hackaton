import React from 'react';
import { Container, Navbar, Nav, Dropdown, DropdownButton, Row } from "react-bootstrap";
import "./navbar.css";
//import "../../../public/icono-pagina.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

export default class menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    Logout(){
        cookies.remove("_s");
        window.location.reload();
    }

    render() { 
        return ( 
            <Navbar fixed="top" id="navbar" backgroundColor= "#fff" style={{ backgroundColor: "indigo" }}>
                <Container>
                    <Navbar.Brand href="/home">
                {/* para imagenes con react es mejor manejarlas desde la web con un link ya que demora menos en cargar*/}
                            <img className="icono" src="https://i.pinimg.com/originals/e1/30/46/e13046f09d44da8e32afdd5712d84032.jpg" alt="Logo"/>
                        Pet Care
                        <span id="usuario-sub-branm">
                        
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>*/}
                    </Nav>
                    <DropdownButton id="dropdown-basic-button" title="Usuario">
                        <Dropdown.Header>
                            <Row>
                            <FontAwesomeIcon icon={ faUserCircle } />
                            </Row>
                            <Row>
                                USUARIO
                            </Row>
                        </Dropdown.Header>
                        <Dropdown.Divider/>
                        <Dropdown.Item onClick={()=> this.Logout()}>Cerrar Sesión</Dropdown.Item>
                            {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                        </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

