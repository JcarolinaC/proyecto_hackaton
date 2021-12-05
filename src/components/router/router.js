import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "../login/login";//ruta del login
import PrivateRoute from "../auth/privateroute";
//import ProductosBuscar from '../productos/productos.buscar'; para los productos
//import empleadoBuscar from '../empleado/crud/buscar';
import empleado from '../empleado_front';
import Home from '../Home/Home';

export default function AppRouter(){
    return(
        <Router>
            <Switch>
                <Route exact path={["/","/login"]} component={Login} />
                <PrivateRoute exact path="/home" component={ Home }/>
                <PrivateRoute exact path="/empleado" component={ empleado }/>
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