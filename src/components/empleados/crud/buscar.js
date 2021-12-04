import React from "react";
import "../empleados.css";
import { request } from "../../helper/helper";
import { Container, Row } from "react-bootstrap";
import DataGrid from "../../grid/grid";
import ConfirmationPrompts from "../../prompts/confirmation";
import MessagePrompt from "../../prompts/message";
import Loading from "../../loading/loading";

const columns = [
{
    dataField: '_id',
    text: 'ID',
    hidden: true,
}, 
{
    dataField: 'nombre',
    text: 'Nombre'
}, 
{
    dataField: 'apellido_p',
    text: 'Primer Apellido'
},
{
    dataField: 'apellido_m',
    text: 'Segundo Apellido'
},
{
    dataField: 'telefono',
    text: 'Telefono'
},
{
    dataField: 'mail',
    text: 'Correo Electronico'
},
{
    dataField: 'direccion',
    text: 'Direccion'
}
];

export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Loading:false,
            idEmpleado:null,
            confirmation:{
                title:"Eliminar empleado",
                text: "¿Seguro que desea eliminar el empleado?",
                show: false,
            },
            message:{
                text:"",
                show:false,
            },
        };
        this.onClickEditButton= this.onClickEditButton.bind(this);
        this.onClickDeleteButton= this.onClickDeleteButton.bind(this);
        this.onCancel=this.onCancel.bind(this);
        this.onConfirm= this.onConfirm.bind(this);
    }
    componentDidMount(){}

    onClickEditButton(row){
        this.props.setIdEmpleado(row._id);
        this.props.changeTab("Editar");
    }

    onClickDeleteButton(row){
        this.setState({
            idEmpleado: row._id,
            confirmation:{
                ...this.state.confirmation,
                show: true,
            },
        });
    }

    onCancel(){
        this.setState({
            confirmation:{
                ...this.state.confirmation,
                show: false,
            },
        });
    }

    onConfirm(){
        this.setState(
        {
            confirmation:{
                ...this.state.confirmation,
                show: false,
            },
        },
        this.eliminarEmpleado()
        );
    }

    eliminarEmpleado(){
        this.setState({ Loading: true });
        request
        .delete(`/empleados/${this.state.idEmpleado}`)
        .then((response)=>{
            this.setState({
                Loading:false,
                message:{
                    text: response.data.msg,
                    show: true,
                },
            });
            if(response.data.exito){
                this.reloadPage();
            }
            this.setState({ Loading: false });
        })
        .catch((err)=>{
            console.error(err);
            this.setState({ Loading: false });
        })
    }

    reloadPage(){
        setTimeout(()=>{
            window.location.reload();
        }, 2500);
    }

    render() {
        return ( 
            <Container id="empleados-buscar-container">
                <ConfirmationPrompts
                show={this.state.confirmation.show}
                title={this.state.confirmation.title}
                text={this.state.confirmation.text}
                onCancel={this.onCancel}
                onConfirm={this.onConfirm}
                />
                <MessagePrompt 
                text={this.state.message.text}
                show={this.state.message.show}
                duration={2500}
                onExited={this.onExitedMessage}
                />
                <Loading show={this.state.Loading}/>

                <Row>  
                <h2>BUSCAR EMPLEADOS</h2>
                </Row>
                <Row>
                
                    <DataGrid url="/empleados" 
                    columns={columns}
                    showEditButton={true}
                    showDeleteButton={true}
                    onClickEditButton={this.onClickEditButton}
                    onClickDeleteButton={this.onClickDeleteButton}
                    />
                
                </Row>
            </Container>
        );
    }
}
