import './genre.css';
import {Nav, Navbar, Container, Col, Row} from 'react-bootstrap'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import WebtInfo from './webt-info.js';


function Genre() {
  let navigate = useNavigate()

  return (
    <div className="Genre">
      {/*메인 로고 및 검색창*/}
      <div className="Logo">
        <Navbar.Brand href="/">
          <img className="flock_logo" src='img/flock_logo.png'
          onClick={()=>{ navigate('/')}}/> {/*클릭하면 홈 이동*/}
        </Navbar.Brand>
        <input id="input" placeholder="검색어를 입력하세요"/>
        <button id="button">검색</button>
      </div>

      {/*가운데 장르 목록 넣기*/}
      <div className = "center_bar">
      <Navbar variant="dark">
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
          <Container>
            <Row className="justify-content-center">
            <Col md="auto"><Cards WebtInfo={WebtInfo[0]}/></Col>
            <Col md="auto"><Cards WebtInfo={WebtInfo[1]}/></Col>
            <Col md="auto"><Cards WebtInfo={WebtInfo[2]}/></Col>
            <Col md="auto"><Cards WebtInfo={WebtInfo[3]}/></Col>
            <Col md="auto"><Cards WebtInfo={WebtInfo[4]}/></Col>
            <Col md="auto"><Cards WebtInfo={WebtInfo[5]}/></Col>
            <Col md="auto"><Cards WebtInfo={WebtInfo[6]}/></Col>
            <Col md="auto"><Cards WebtInfo={WebtInfo[7]}/></Col>
            </Row>
          </Container>
        </div>
 
      </div>
  );
}

function Cards(props){
  let navigate = useNavigate()

  return(
    <div id="box">
      <div className="col-xs-1 col-lg-1 col-md-1">
      <div className="img-wp">
        <img id="Cardimg" src={props.WebtInfo.picture}/>
      </div>
        <h5 id="title">{props.WebtInfo.title}</h5>
        <p id="name">{props.WebtInfo.name}</p>
      </div>
    </div>
  )
}


export default Genre;