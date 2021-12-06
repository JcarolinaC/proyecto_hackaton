import React from "react";
import { Container } from "react-bootstrap";
import dogcat from "./recursos/dog-cat.jfif";

export default class Promociones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <Container id="promo-container">
                <h1 style={{ marginTop:300, color:"white" }}>Proximamente añadiremos una tienda </h1>
                <h2 style={{ color:"white" }}>Esperalo</h2>
                <div className="container-img" style={{  }}>
                    <img className="dog-cat" src={ dogcat } alt="pet"/>
                </div>
            </Container>
        );
    }
}