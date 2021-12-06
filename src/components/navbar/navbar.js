import React from 'react';
import { Container, Navbar, Nav, Button, Form,FormControl, NavDropdown  } from "react-bootstrap";
import "./navbar.css";

/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';*/
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

export default class menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    Logout() {
        cookies.remove("_s");
        window.location.reload();
    }

    render() {
        return (
            <Navbar fixed="top" id="navbar" backgroundColor="#fff" style={{ backgroundColor: "indigo" }}>
                <Container fluid>
                    <Navbar.Brand href="/home">
                        <img className="icono" src="https://i.pinimg.com/originals/e1/30/46/e13046f09d44da8e32afdd5712d84032.jpg" alt="Logo" />

                        <span id="usuario-sub-branm">

                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <h1 class="display-2">Pet Care</h1>
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', backgroundColor: "indigo" }}
                            navbarScroll>

                            <Nav.Link href="/home"></Nav.Link>

                            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                            <NavDropdown.Item  href="PERRO">PERRO</NavDropdown.Item>
                                <img className="PERRO" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeva5nHq1Q-HIpFRN---omoq3HB3VbjFPrFGl1sLiEQSeZhFcMaGsmhgHaD7YhbeN5sk&usqp=CAU" alt="PERRO" />
                                
                                <NavDropdown.Item href="GATO">GATO</NavDropdown.Item>
                                <img className="GATO" src="https://phantom-expansion.unidadeditorial.es/2f87033555d26483c0dc80c06caf5e48/resize/640/assets/multimedia/imagenes/2021/03/23/16164882584432.jpg" alt="GATO" />
                                
                                <NavDropdown.Item href="PROMOCIONES">PROMOCIONES</NavDropdown.Item>
                                <img className="PROMOCIONES" src=" https://thumbs.dreamstime.com/b/animales-dom%C3%A9sticos-que-se-colocan-delante-del-fondo-blanco-11785222.jpg" alt="PROMOCIONES" />

                            </NavDropdown>
                    
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }    
   
}