import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';


function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Mi Portafolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/sobre-mi">Sobre Mí</Nav.Link>
            <Nav.Link as={Link} to="/proyectos">Proyectos</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
