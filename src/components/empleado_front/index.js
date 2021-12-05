import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import empleadoBuscar from './crud/buscar';
import empleadoCrear from './crud/crear';
import empleadoEditar from "./crud/editar";
import "./empleado.css";


export default class empleado extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "Buscar",
            _id:null,
        };
        this.changeTab= this.changeTab.bind(this);
        this.setIdEmpleado= this.setIdEmpleado.bind(this);
        this.getIdEmpleado= this.getIdEmpleado.bind(this);
    }
    changeTab (tab){
        this.setState({ currentTab: tab });
    }

    setIdEmpleado(id){
        this.setState({ _id: id });
    }

    getIdEmpleado(){
        return this.state._id;
    }

    render() { 
        return (
            <Container id="empleado-container">
                <Row>
                    <Nav fill variant="tabs" 
                        defaultActiveKey="/Buscar"
                        onSelect={(eventKey)=> 
                        this.setState({ currentTab: eventKey })
                        }
                        >
                            <Nav.Item>
                                <Nav.Link  eventKey="Buscar">Buscar</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Crear">Crear</Nav.Link>
                            </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currentTab === "Buscar" ? (
                    <empleadoBuscar 
                        changeTab={this.changeTab}
                        setIdEmpleado={this.setIdEmpleado}
                    />
                    ) : this.state.currentTab === "Crear" ? (
                        <empleadoCrear changeTab={this.changeTab}/>
                    ) : (
                        <empleadoEditar 
                        changeTab={this.changeTab}
                        getIdEmpleado={this.getIdEmpleado}
                        />
                    )}
                </Row>
            </Container>
        );
    }
}

