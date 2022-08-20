import "./detail.css";
import {useState} from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Star from "./Star/star"

function Detail(props){
    //닉네임
    let [userName] = useState('익명');
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
    const day = ('0' + date.getDay()).slice(-2);
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
                            <img id="Cardimg" src="https://shared-comic.pstatic.net/thumb/webtoon/796152/thumbnail/thumbnail_IMAG06_bbcc406c-1158-4a57-b4bf-8aee5dec9bab.jpg" />
                        </div>
                    </div>
                    <div className="infolist">
                        <div><span id="listfont">제목 &nbsp;</span>멀봐 코딩이나 잘해봐</div>
                        <div><span id="listfont">작가 &nbsp;</span>누구게</div>
                        <div><span id="listfont">장르 &nbsp;</span>멍멍이</div>
                        <div><span id="listfont">연재 &nbsp;</span>네이버</div>
                        <div><span id="listfont">작품소개 &nbsp;</span>소개내용내용</div>
                        <br />
                    </div>
                </div>
                <div className="Star">
                    <label>별점</label>
                    <Star />
                    <label id="s1">별점주기</label>
                    <Star />
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

                    <div className="radio">
                        <input
                            type='radio'
                            id='radio'
                            checked={inputStatus === 'radio'}
                            onClick={() => handleClickRadioButton('radio')} />
                        <label htmlFor='radio'>BEST 댓글</label>

                        <input
                            type='radio'
                            id='radio1'
                            checked={inputStatus === 'radio1'}
                            onClick={() => handleClickRadioButton('radio1')} />
                        <label htmlFor='radio1'>최신순</label>
                    </div>

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