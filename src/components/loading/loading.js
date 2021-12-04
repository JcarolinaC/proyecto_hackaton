import React from "react";
import { Spinner } from "react-bootstrap";
import "./loading.css";

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            Loading: false,
        };
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.show !== this.state.show){
            this.setState({ show: nextProps.show});
        }
    }
    render() { 
        return ( 
            <>
            {this.state.show ?(
            <div id="loading-backdrop">
                <Spinner animation="grow" variant="primary" />
                <p>Cargando . . .</p>
            </div>
            ) : null}
            </>
        );
    }
}
//<Spinner animation="border" variant="primary" /> otro estilo de animacion