import './App.css';
import {Nav, Navbar, Container, Col, Row} from 'react-bootstrap'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'


function App() {
  let navigate = useNavigate()

  return (
    <div className="App">
      {/*상단바; '마이페이지 로그인 가입' 페이지 이동 기능 추가 예정*/}
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
      
      {/*메인 로고 및 검색창*/}
      <div className="Logo">
        <Navbar.Brand href="#home">
          <img className="flock_logo" src='img/flock_logo.png'
          onClick={()=>{ navigate('/')}}/> {/*클릭하면 홈 이동*/}
        </Navbar.Brand>
        <input id="input" placeholder="검색어를 입력하세요"/>
        <button id="button">검색</button>
      </div>

      {/*가운데 장르 목록 넣기*/}
      <div className = "center_bar">
      <Navbar  variant="dark">
        <Container>
          <Nav className="wkdfm">
            <Nav.Link href="#1">일상/개그</Nav.Link>
            <Nav.Link href="#2">순정</Nav.Link>
            <Nav.Link href="#3">무협/사극</Nav.Link>
            <Nav.Link href="#4">판타지/SF</Nav.Link>
            <Nav.Link href="#5">스포츠</Nav.Link>
            <Nav.Link href="#6">공포/스릴러</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>


      {/*웹툰 들어갈곳*/}
      <div className="Tooncontainer">
        <Row xs={2} md={4} lg={6}>
          <Col><Cards/></Col>
          <Col><Cards/></Col>
          <Col><Cards/></Col>
          <Col><Cards/></Col>
        </Row>       
      </div> 
      <div className="Tooncontainer2">
        <Row xs={2} md={4} lg={6}>
          <Col><Cards/></Col>
          <Col><Cards/></Col>
          <Col><Cards/></Col>
          <Col><Cards/></Col>
        </Row>       
      </div> 
    </div>
  );
}

function Cards(){
  return(
    <div className="col-md-1">
      <div className="img-wp">
        <img id="Cardimg" src="https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg"/>
      </div>
      <h5 id="title">웹툰명</h5>
      <p id="name">작가명</p>
    </div>
  )
}

export default App;
