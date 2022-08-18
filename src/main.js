import './genre.css';
import './main.css';
import {Nav, Navbar, Container, Col, Row} from 'react-bootstrap'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'


function Main() {
  let navigate = useNavigate()

  return (
    <div className="Main">
      {/*메인 로고 및 검색창*/}
      <div>
        <Navbar.Brand href="/">
          <img className="M_flock_logo" src='img/flock_logo.png'
          onClick={()=>{ navigate('/')}}/> {/*클릭하면 홈 이동*/}
        </Navbar.Brand>
    </div>
      <div className="Logo">
        <input id="input" placeholder=" 검색어를 입력하세요"/>
        <button id="button">검색</button>
      </div>

      {/*가운데 장르 목록 넣기*/}
      <div className = "M_center_bar">
        <Navbar bg="" variant="light">
        <Container>
          <Nav className="M_me-auto">
            <Nav.Link href="/genre/gag">일상/개그</Nav.Link>
            <Nav.Link href="/genre/love">순정</Nav.Link>
            <Nav.Link href="/genre/action">무협/사극</Nav.Link>
            <Nav.Link href="/genre/fantasy">판타지/SF</Nav.Link>
            <Nav.Link href="/genre/sport">스포츠</Nav.Link>
            <Nav.Link href="/genre/thrill">공포/스릴러</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    </div>
  );
}

export default Main;