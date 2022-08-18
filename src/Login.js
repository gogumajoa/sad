import React, {useState, sueEffect} from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

//state 생성 후 state를 value로 넣어준다.

export default function Login() {

  let navigate = useNavigate();

  const [loginId, setId] = useState(''); //const [state저장변수, state 갱신 함수 ] = useState(상태 초기 값);
  const [passwd, setPassword] = useState('');

    return(
        <div className="Login">      
            <form>
                <h1 className='Logo'>
                    <img type="button" src='img/flock_logo.png'  onClick={()=>{ navigate('/')}}/>
                </h1>
                <div className='section1'>  
                    <div>
                        <input
                            type='text' 
                            onChange={(e) => {
                                setId(e.target.value); //Id
                              }}
                            placeholder='아이디를 입력하세요'
                            className='input_id' 
                            value={loginId}
                            />
                    </div>
                    <div>
                        <input
                            type='password' 
                            onChange={(e) => {
                                setPassword(e.target.value); 
                              }}
                            placeholder='비밀번호를 입력하세요'
                            className='input_password' 
                            value={passwd} 
                            
                            />
                        
                    </div>
                    <div>
                        <a href="/" className='join'
                         //onClick={navigate('/Join')}
                       >회원가입</a>
                        <a href="/" className='find'>아이디/비밀번호 찾기</a>

                    </div>
                    <div style={{paddingTop: 60}}>
                        <button className='Log_btn'   //로그인 버튼
                        //onSubmit={handleLogin}
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