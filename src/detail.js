import "./detail.css";
import { useCallback, useEffect, useState} from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import Star from "./Star/star"
import Avgstar from "./Star/avgstar";

import Action from './Genrepage/genreAction';
import Love from './Genrepage/genreLove';
import Gag from './Genrepage/genreGag';
import Fantasy from './Genrepage/genreFantasy';
import Sport from './Genrepage/genreSport';
import Thrill from './Genrepage/genreThrill';

function Detail(){
    let {id} = useParams();

    let [info_data,setInfo_data] = useState([])

    //데이터 불러옴
    useEffect(() => {
        fetch(`http://43.200.205.215:8080/webtoons/${id}`,{
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')//엑세스 토큰 필요
            },
            
        })
          .then((res) => res.json()) 
          .then((info_data) => setInfo_data(info_data));
    }, []); 

    //별점 받기
    
    //보냈던 별점 기록
    
    
   //별점 보내기
    const[starvalue, setStar] = useState('');
    const getvalue= starvalue1=>{setStar(starvalue1)};

    const star_click=()=> {
            
        fetch('http://43.200.205.215:8080/webtoons/'+id+'/star',{

        method : "POST",
        headers: {

            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')//엑세스 토큰 필요
        },
              
        body : JSON.stringify({
            score : Number(starvalue)
            }),
        })

        .then(response => response.json())
        .then(window.location.replace('/detail/'+id)) //평균 별점 반영을 위해서 새로고침
        .then(alert('별점 주기 성공!'))
        }

    //댓글 등록
    const comment_click=()=> {
            
        fetch('http://43.200.205.215:8080/webtoons/'+id+'/comment',{

        method : "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')//엑세스 토큰 필요
        },
              
        body : JSON.stringify({
            score : value
            }),
        })

        .then(response => response.json())
        .then(window.location.replace('/detail/'+id)) 
        }


    //닉네임
    let [userName] = useState('이름');
    //댓글 목록 state
    let [comment, setComment]=useState([]);
    //Input 값 저장하는 state = 사용자가 입력하는 댓글
    let [value, changeValue] = useState('');
    //댓글 게시 가능 유효성 검사 (댓글 길이가 1 넘어야 게시)
    let [isValid, setIsValid] = useState(false);
    //시간&날짜 저장
    let [comTime, setComTime] = useState([]);
    let [comDate, setComDate] = useState([]);

    //댓글 입력 기능
    let post = e => {
        let comment_copy = [...comment];
        comment_copy.unshift(value);
        setComment(comment_copy);
        changeValue('');
        setIsValid(false);
    };

    let postTime = () => {
        let comTime_copy = [...comTime];
        comTime_copy.unshift(timeStr);
        setComTime(comTime_copy);
    }

    let postDate = () => {
        let comDate_copy = [...comDate];
        comDate_copy.unshift(dateStr);
        setComDate(comDate_copy);
    }

    /*날짜랑 시간*/
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const dateStr = year + '-' + month + '-' + day;

    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const timeStr = hours + ':' + minutes;

    let [inputStatus, setInputStatus ] = useState('')
    const handleClickRadioButton = (radioBtnName) => {setInputStatus(radioBtnName)}

    let navigate = useNavigate()

    return(
        <div className="Detail">
            {/*메인 로고 및 검색창*/}
            <div className="Logo">
                <Navbar.Brand href="/">
                    <img className="flock_logo" src='../img/flock_logo.png'
                        onClick={() => { navigate('/') }} /> {/*클릭하면 홈 이동*/}
                </Navbar.Brand>
                <input id="input" placeholder=" 검색어를 입력하세요" />
                <button id="button">검색</button>
            </div>

            {/*웹툰 정보 표시 박스*/}
            <div className="InfoBox">
                <div className="infosection">
                    <div id="imgBox">
                        <div className="img-wp">
                            <img id="Cardimg" src={info_data.image} />
                        </div>
                    </div>
                    <div className="infolist">
                        <div><span id="listfont">제목 &nbsp;</span>{info_data.name}</div>
                        <div><span id="listfont">작가 &nbsp;</span>{info_data.author}</div>
                        <div><span id="listfont">장르 &nbsp;</span>{info_data.genre}</div>
                        <div><span id="listfont">연재 &nbsp;</span>{info_data.platform}</div>
                        <div><span id="listfont">작품소개 &nbsp;</span>{info_data.details}</div>
                        <br />
                    </div>
                </div>
                <div className="Star">
                <label>별점</label>
                    <Avgstar data={info_data.avgScore} />
                    <label className="s1">별점주기</label>
                    <Star starvalue1={getvalue} data2={info_data.starScore}></Star>
                    <button className="OK" onClick={star_click}>확인</button>
                </div>
            </div>

            {/* 댓글 박스 */}
            <div className="ComtBox">
                <div className="Comtsection">
                    <p className="commentText">댓글</p>

                    {/* 댓글 입력 칸 */}
                    <input id='input_comment'
                        placeholder='댓글을 입력하세요'
                        onChange={(e) => { changeValue(e.target.value); }}
                        onKeyUp={e => {
                            e.target.value.length > 0
                            ? setIsValid(true)
                            : setIsValid(false);
                        }}
                        value={value}
                    />

                    <button id="Up_comment"
                        onClick={() => {
                            post()
                            postTime()
                            postDate()
                            
                        }}
                        disabled={isValid ? false : true}
                        
                    >등록</button>

                    {/* 댓글을 목록으로 나타대는 태그 */}
                    <div className="commentList">
                        {
                            comment.map(function (a, i) {
                                return (
                                    <div className="commentList2" key={i}>
                                        <div className="userName">{userName}</div>
                                        <div className="userComment">{comment[i]}</div>
                                        <div className="commentTime">{comDate[i]} &nbsp;{comTime[i]}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Detail;