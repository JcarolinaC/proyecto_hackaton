import React from 'react';
import { Container } from 'react-bootstrap';
import "./Home.css";
/*-------------------------IMAGENES DE SLIDER------------------------- */
import combo_2x1 from "./Assets/combo_2x1.jpg";
import FastFoodCombo1 from "./Assets/Fast-food-combo.jpg";
import FastFoodCombo2 from "./Assets/Fast-food-combo-1.jpg";

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
                    <h1>LA MEJOR COMIDA ESTA AQUI!</h1>
                    <p className="subtitulo">
                        Te Antojaste de comer algo delicioso?, aqui lo encuentras!
                    </p>
                    </div>
                    <div className="slider-container">
                        <div className="slider">
                        
                            <div className="slider-section">
                                <img className="img-slider" src={ combo_2x1 } alt="combo 2x1" />
                            </div>
                            <div className="slider-section">
                                <img className="img-slider" src={ FastFoodCombo1 } alt="Combo fast food"/>
                            </div>
                            <div className="slider-section">
                                <img className="img-slider" src={ FastFoodCombo2 } alt="Combo fast food 1"/>
                            </div>
                            <div className="navigation">
                                <label className="navigation-item" htmlFor="1">
                                <img className="img-slider" src={ combo_2x1 } alt="combo_2x1" />
                                </label>
                                <label className="navigation-item" htmlFor="2">
                                    <img className="img-slider" src={ FastFoodCombo1 } alt="Combo fast food" />
                                </label>
                                <label className="navigation-item" htmlFor="3">
                                    <img className="img-slider" src={ FastFoodCombo2 } alt="Combo fast food 1" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="section1-footer">
                            <h3>Fast Food s.a</h3>
                            <i className="fas fa-hamburger"></i>
                        </div>
                        <div className="section2-footer">
                            <h3>SOBRE NOSOTROS</h3>
                            <p> 
                                Somos una empresa dispuesta a dar confianza y tranquilidad a nuestros clientes para
                                tener un acceso facil a nuestros servicios en el menor tiempo posible para su dia a dia 
                                en conjunto con una buena economia para su bolsillo.
                                <br/>
                                Todos los derechos reservados 2021 
                            </p>
                        </div>
                        <div className="icons">
                            <a href="https://www.youtube.com/watch?v=1pyAEssrFiY" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
                            <a href="https://github.com/jhonpalechor/proyecto_ciclo_4/tree/Andres" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

