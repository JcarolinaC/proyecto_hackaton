import React from 'react';
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { APIHOST as host } from "../../app.json";
import './login.css'
import { isNull } from "util";
import Cookies from "universal-cookie";
import { calcularExpiracionSesion } from "../helper/helper";
import  Loading from "../loading/loading"

const cookies = new Cookies(); 

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            Loading: false,
            usuario:'',
            pass:'',
        };
    }
    iniciarSesion(){
        this.setState({ Loading: true});

        axios.post(`${host}/usuarios/login`, {
            usuario: this.state.usuario,
            pass: this.state.pass
        })
        .then((response)=>{
            if(isNull(response.data.token)){
                alert("usuario y/o contraseña invalidas");
                console.log(response);
            }
            else{
                cookies.set('_s', response.data.token, {
                    path: "/",
                    expires: calcularExpiracionSesion(),
                });
                this.props.history.push('/empleados');
            }
            this.setState({ Loading: false});
        })
        .catch((err) =>{
            console.log(err);
            this.setState({ Loading: false});
        }); 
    }
    render() { 
        return ( 
            <Container id="login-container">
                <Loading  show={this.state.Loading}/>
                <Row>
                    <Col>
                    <Row>
                        <h2>Inicio de Sesión</h2>
                    </Row>
                    <Row>
                    <Col
                        sm="12"
                        xs="12"
                        md={{span: 4, offset:4}}
                        lg={{span: 4, offset:4}}
                        xl={{span: 4, offset:4}}
                        >
                <Form>
                    <Form.Group >
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control className="input" placeholder="Usuario" 
                    onChange={(e)=>
                        this.setState({usuario: e.target.value})
                    }
                    />
                    </Form.Group>
                    <Form.Group >
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control className="input" type="password" placeholder="Contraseña"
                    onChange={(e)=>
                        this.setState({pass: e.target.value})
                    }
                    />
                    </Form.Group>
                    <Button 
                    variant="primary" 
                    style={{ 
                        marginTop: 20,
                        width: "100%"
                    }}
                    onClick={()=>{
                        this.iniciarSesion();
                    }}
                    >
                        Iniciar Sesión
                    </Button>
                </Form>
                </Col>
                </Row>
                </Col>
                </Row>
            </Container>
        );
    }
}

