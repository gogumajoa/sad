import './genre.css';
import {Nav, Navbar, Container, Col, Row} from 'react-bootstrap'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import WebtInfo from './webt-info.js';
import Review from './review.js';

function Genre() {
  let [WebInfo] = useState(WebtInfo)

  let [search, setSearch] = useState(null)
  let [btClick, setbtClick] = useState(0)

  let navigate = useNavigate()

  const items = WebtInfo.filter((data) => {
    if (btClick == 1) {
      if (search == null)
        return data
      else if (data.title.toLowerCase().includes(search.toLowerCase()) || data.name.toLowerCase().includes(search.toLowerCase())) {
        return data
      }
    }
    else if (btClick == 0)
      return data
  }).map(data => {
    return (
      <div id="box">
        <div className="col-xs-1 col-lg-1 col-md-1">
          <div className="img-wp">
            <img type="button" id="Cardimg" src={data.picture}/>
          </div>
          <h5 type="button" id="title">{data.title}</h5>
          <p type="button" id="name">{data.name}</p>
        </div>
      </div>
    )
  })

  return (
    <div className="Genre">
      {/*메인 로고 및 검색창*/}
      <div className="Logo">
        <Navbar.Brand href="/">
          <img className="flock_logo" src='img/flock_logo.png'
          onClick={()=>{ navigate('/')}}/> {/*클릭하면 홈 이동*/}
        </Navbar.Brand>

        <input id="input" placeholder="검색어를 입력하세요"
        onChange={(e)=>{setSearch(e.target.value)}}
        onClick={()=>{setbtClick(0)}}/>
        <button id="button" onClick={()=>{setbtClick(1)}}>검색</button>
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
              {items}
              {/* {WebInfo.map((a,i)=>{
                return(<Col md="auto"><Cards WebtInfo={WebtInfo[i]}/></Col>)
              })} */}
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
        <img type="button" id="Cardimg" src={props.data.picture}  onClick={()=>{ navigate('/')}} />
      </div>
        <h5 type="button" id="title" onClick={()=>{ navigate('/')}} >{props.data.title}</h5>
        <p type="button" id="name" onClick={()=>{ navigate('/')}}>{props.data.name}</p>
      </div>
    </div>
  )
}

export default Genre;