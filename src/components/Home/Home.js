import React from 'react';
import { Container } from 'react-bootstrap';
import "./Home.css";
/*-------------------------IMAGENES DE SLIDER------------------------- */
import pets from "./Assets/pets.jpg";
import pets1 from "./Assets/pet.jpg";
import pet from "./Assets/pets1.jpg";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Container id="Container">
                <div className="main">
                    <div className="text">
                    <h1>LA MEJOR ASESORIA PARA TU MASCOTAS!</h1>
                    <p className="subtitulo">
                        Sabemos lo importante que es tu mascota para ti y tu familia por ello trabajamos en esta pagina para que encuentres la medidas y requerimientos necesesarios de alimento para los consentidos de la casa
                    </p>
                    </div>
                    <div className="slider-container">
                        <div className="slider">
                        
                            <div className="slider-section">
                                <img className="img-slider" src={ pets } alt="pets" />
                            </div>
                            <div className="slider-section">
                                <img className="img-slider" src={ pets1 } alt="pets1"/>
                            </div>
                            <div className="slider-section">
                                <img className="img-slider" src={ pet } alt="pet"/>
                            </div>
                            <div className="navigation">
                                <label className="navigation-item" htmlFor="1">
                                <img className="img-slider" src={ pets } alt="pets" />
                                </label>
                                <label className="navigation-item" htmlFor="2">
                                    <img className="img-slider" src={ pets1 } alt="pets1" />
                                </label>
                                <label className="navigation-item" htmlFor="3">
                                    <img className="img-slider" src={ pet } alt="pet" />
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer">
                        <div className="section1-footer">
                            <h3>Pet Care S.A</h3>
                            <i className="mascotas"></i>
                        </div>
                        <div className="section2-footer">
                            <h3>SOBRE NOSOTROS</h3>
                            <p> 
                                Somos una empresa creada para brindar informacion de fuentes confiables acerca de las necesidades 
                                nutricionales de tu mascotas, creemos que tu mascota es tan importante en tu familia como lo es para 
                                nosotros por ello queremos que siempre puedas contar con nosotros y puedas encontrar la informacion
                                que necesitas.
                                <br/>
                                Todos los derechos reservados 2021 
                            </p>
                        </div>
                        <div className="icons">
                            <a href="https://youtu.be/IRvn-is9xjo" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
                            <a href="https://github.com/jhonpalechor/proyecto_ciclo_4/tree/Andres" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

