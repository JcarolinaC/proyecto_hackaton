import { Container } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/navbar/navbar";
import AppRouter from "./components/router/router";
import Home from "./components/Home/Home";


function App() {
  return (
    <div className="App">
      <Container>
        <Menu />
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
