import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import Login from "../login/login";//ruta del login
//import PrivateRoute from "../auth/privateroute";
//import ProductosBuscar from '../productos/productos.buscar'; para los productos
import GatosPet from "../pets/gato/gato";
import PerrosPet from '../pets/perro/perro';
import Promociones from '../pets/promociones';
import Home from '../Home/Home';


export default function AppRouter(){
    return(
        <Router>
            <Switch>
                {/*<Route exact path={["/","/login"]} component={Login} />*/}
                <Route exact path={["/", "/home"]} component={ Home }/>
                <Route exact path={["/GATO"]} component={ GatosPet }/>
                <Route exact path={["/PERRO"]} component={ PerrosPet }/>
                <Route exact path={["/PROMOCIONES"]} component={ Promociones }/>
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