import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "../login/login";//ruta del login
import PrivateRoute from "../auth/privateroute";
//import ProductosBuscar from '../productos/productos.buscar'; para los productos
//import EmpleadosBuscar from '../empleados/crud/buscar';
import Empleados from '../empleados';
import Home from '../Home/Home';

export default function AppRouter(){
    return(
        <Router>
            <Switch>
                <Route exact path={["/","/login"]} component={Login} />
                <PrivateRoute exact path="/home" component={ Home }/>
                <PrivateRoute exact path="/empleados" component={ Empleados }/>
                {/*<PrivateRoute exact path="/productos" component={ ProductosBuscar }/>*/}
                <Route 
                    path={'*'}
                    component={()=>(
                        <h2 style={{ marginTop:200 }}>
                            404
                            <br/>
                            PAGINA NO ENCONTRADA
                        </h2>
                    )} 
                    />
            </Switch>
        </Router>
    );
}

/*function Home() {
    return(
        <h2 style={{ marginTop:300 }}>Bienvenidos a Home</h2>
    ); 
} */