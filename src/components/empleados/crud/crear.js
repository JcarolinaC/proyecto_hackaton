import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';
import "../empleados.css";


export default class EmpleadosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rediret:false,
            message:{
                text:"",
                show:false,
            },
            Loading:false,
            empleado: {
                nombre: "",
                apellido_p:"",
                apellido_m:"",
                telefono:"",
                mail:"",
                direccion:""
            },
        }
        this.onExitedMessage = this.onExitedMessage.bind(this);
    }

    setValue(index, value){
        this.setState({
            empleado:{
                ...this.state.empleado,
                [index] : value,
            },
        });
    }

    guardarEmpleados(){
        this.setState({ loading:true });
        request
        .post('/empleados', this.state.empleado)
        .then((response)=>{
            if(response.data.exito){
                this.setState({
                    rediret: response.data.exito,
                    message:{
                        text: response.data.msg,
                        show:true,
                    },
                });
                this.reloadPage();
            }
            this.setState({ loading:false });
        })
        .catch((err)=>{
            console.error(err);
            this.setState({ loading:true });
        });
    }

    onExitedMessage(){
        if(this.state.rediret){
            this.props.changeTab("Buscar");
        }
    }

    reloadPage(){
        setTimeout(()=>{
            window.location.reload();
        }, 2500);
    }

    render() { 
        return (
            <Container id="empleados-crear-container">
                <MessagePrompt 
                text={this.state.message.text}
                show={this.state.message.show}
                duration={2500}
                onExited={this.onExitedMessage}
                />
                <Loading show={ this.state.Loading }/>
                <Row>
                    <h2>CREAR EMPLEADOS</h2>
                </Row>
                <Row className="form-container">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            onChange={(e)=> this.setValue("nombre", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Primer Apellido</Form.Label>
                        <Form.Control 
                            onChange={(e)=> this.setValue("apellido_p", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Segundo Apellido</Form.Label>
                        <Form.Control 
                            onChange={(e)=> this.setValue("apellido_m", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control 
                            onChange={(e)=> this.setValue("telefono", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control 
                            onChange={(e)=> this.setValue("mail", e.target.value)}
                        />
                        <Form.Group className="mb-3" >
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control 
                            onChange={(e)=> this.setValue("direccion", e.target.value)}
                        />
                    </Form.Group>
                    </Form.Group>
                    <Button variant="primary" onClick={()=> console.log(this.guardarEmpleados())}>
                        Guardar empleado
                    </Button>
                </Form>
                </Row>
            </Container>
        );
    }
}

