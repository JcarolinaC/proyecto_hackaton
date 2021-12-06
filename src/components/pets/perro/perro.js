import React from "react";
import "./perro.css";
import tabla1 from "../recursos/tabla-perro1.jpg";
import tabla2 from"../recursos/tabla-perro2.jpg";
import perro from "../recursos/perro-1.jpg";
import { Container } from "react-bootstrap";

export default class PerrosPet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <Container id="perros-container">
                <h1>ALIMENTACION DE TU PERRO</h1>
                <div className="content">
                    <p>
                    hasta las 8 semanas de edad, los cachorros se alimentan de leche materna, 
                    por lo que deben estar con su madre y sus hermanos. Separarles de forma prematura es perjudicial 
                    para una buena socialización además de que el alimento artificial, como es la leche maternizada 
                    artificial, no aporta la protección adecuada al pequeño.
                    </p>
                    <p>
                    A partir de las seis semanas ya puedes ofrecerles a los cachorros comida para 
                    cachorros unas 4 veces al día (consulta con el veterinario para elegir la comida),
                    pero deben seguir teniendo la posibilidad de tomar leche materna.
                    Recuerda elegir siempre un alimento de calidad y adaptado a su tamaño.
                    </p>
                </div>
                <div className="img-container">
                    <div>
                    <img src={ perro } alt="pet"/>
                    <img src={ tabla1 } alt="pet"/>
                    <img src={ tabla2 } alt="pet"/>
                    </div>
                </div>
                <div className="references">
                    <h2>Referencias</h2>
                    <p>
                        General. K. (2013) Manual de la medicina médica para los perros y los gatos. Elsivier.
                    </p>
                    <p>
                    Adaptado de: http://www.animalmedicalcenterofchicago.com
                    </p>
                </div>
            </Container>
        );
    }
}