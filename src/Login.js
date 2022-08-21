import {BrowserRouter,  Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import {useState} from 'react';
import {Nav, Navbar, Container, Col, Row} from 'react-bootstrap'


import axios from 'axios'

//state 생성 후 state를 value로 넣어준다.


export default function Login() {
  const navigate=useNavigate();
  const [loginId, setId] = useState(''); //const [state저장변수, state 갱신 함수 ] = useState(상태 초기 값);
  const [passwd, setPassword] = useState('');

  //asyns : 비동기함수

  const loginDB = () => {  //로그인 서버 연결

    fetch('http://43.200.205.215:8080/auth/login',{

    method : "POST",
    headers: {
        'Content-Type': 'application/json',
    },
  
    body : JSON.stringify({
        loginId: loginId,
        passwd: passwd
        }),
    })

    .then(response => response.json())
    .then(response=> localStorage.setItem('accessToken', response.accessToken))
    //.then(response=> localStorage.setItem('refreshToken', response.refreshToken))
    
    .then(navigate('/'))

};




/*const loginDB = (loginId, passwd) => {
        const data={
            loginId,
            passwd,
        };
        axios.post('http://43.200.205.215:8080/auth/login',JSON.stringify(data))
        .then(response => {const {accessToken}=response.data;
            axios.defaults.headers.common['Authorization'] = 'Bearer ${accessToken}';
        })
        .then(navigate('/Join'))
        .catch(error=> alert(error));
    }*/
 

    return(
        <div className="Login">      
            <form>
                <h1 className='Logo'>
                    <Navbar.Brand href="/">
                        <img className="M_flock_logo" src='img/flock_logo.png'
                        onClick={()=>{ navigate('/')}}/> {/*클릭하면 홈 이동*/}
                    </Navbar.Brand>
                </h1>
                <div className='section1'>  
                    <div>
                        <input
                            type='text' 
                            value={loginId}
                            onChange={(e) => {
                                setId(e.target.value); //Id
                              }}
                            placeholder='아이디를 입력하세요'
                            className='input_id' 
                  
                            />
                    </div>
                    <div>
                        <input
                            type='password' 
                            value={passwd} 
                            onChange={(e) => {
                                setPassword(e.target.value); 
                              }}
                            placeholder='비밀번호를 입력하세요'
                            autoComplete="off"
                            className='input_password' 
                            
                            
                            />
                        
                    </div>
                    <div>

                    <div>
                        <a className='join'
                         onClick={()=>{navigate('/Join')}}
                       >회원가입</a>
                        <a href="/" className='find'>아이디/비밀번호 찾기</a>

                    </div>

                    </div>
                    <div style={{paddingTop: 60}}>
                        <button className='Log_btn'   //로그인 버튼
                        onClick={loginDB}
                        style={{
                            width: 320,
                            height: 45,
                            backgroundColor: '#1F3E1B',
                            borderRadius: 10,
                            fontSize : 18,
                            color: 'white'
                        }} >로그인</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

