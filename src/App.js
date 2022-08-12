import './App.css';
import {Nav, Navbar, Container, Col, Row} from 'react-bootstrap'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Genre from './genre.js'
import Main from './main.js'
import Search from './search.js';

function App() {
  let navigate = useNavigate()

  return (
    <div className="App">
      <div className = "Nave_bar">
        <Navbar bg="" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#MYPAGE">MYPAGE</Nav.Link>
            <Nav.Link href="#LOGIN">LOGIN</Nav.Link>
            <Nav.Link href="#JOIN">JOIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>

      <Routes>
        <Route path="/genre" element={ <Genre/>} />
      </Routes>

      <Routes>
        <Route path="/" element={ <Main/>} />
      </Routes>

      <Routes>
        <Route path="/search" element={ <Search/>} />
      </Routes>


    </div>
  );
}

export default App;
