import React from "react";
import "./gato.css";
import { Container } from "react-bootstrap";
import gatito from "../recursos/gatito.jpg";
import tabla1 from "../recursos/tabla-general.jpg";
import tabla2 from "../recursos/tabla-gato-comida.jpg";

export default class GatosPet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <Container id="gatos-container">
                <h1>ALIMENTACION DE TU GATO</h1>
                <div className="p-container">
                    <p>
                    A partir de los 12 meses, nuestro gato ya será adulto y, 
                    como hemos mencionado anteriormente, la cantidad de comida diaria 
                    dependerá del peso, la actividad física y la personalidad de la raza.
                    Los felinos silvestres hacen pequeñas comidas según las presas, que cazan por instinto.
                    Por el contrario, los gatos domésticos pueden hacer entre 10 y 20 comidas diarias, 
                    ingiriendo aproximadamente 5 gramos en cada comida. Es muy importante para el gato tener comida 
                    a disposición siempre que lo necesite, un sistema denominado "ad libitum".
                    </p>
                    <p>
                    La cantidad en gramos de comida diaria para gatos dependerá 
                    de la fórmula nutricional del producto, 
                    no se puede saber con exactitud los gramos. 
                    No olvides que estos gramajes están indicados para gatos con una 
                    actividad física moderada y sin ningún problema de alimentación o de salud, 
                    por eso, si por ejemplo tienes una gata embarazada, es recomendable proporcionarle la 
                    cantidad de comida que nos pida, ya que necesita una mayor cantidad de proteínas, 
                    grasas y calcio para el correcto desarrollo del embarazo.
                    </p>
                </div>
                <div className="img-container">
                    <div>
                    <img src={ gatito } alt="pet"/>
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
