import React from 'react';
import {AiFillFacebook} from 'react-icons/ai';
import { useState } from 'react';
import './Login.scss';

const Login = () => {
    const footContent = ['Meta ', '소개 ', '블로그 ', '채용 정보 ', '도움말 ', 'API ',
                  '개인정보처리방침 ', '약관 ', '인기 계정 ', '해시태그 ', '위치 ', 'Instagram Lite ', 
                  '연락처 업데이트&비사용자'];
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [flag, setFlag] = useState(true);

    const inputId = e => {
        setId(e.target.value);
    };

    const inputPw = e => {
        setPw(e.target.value);
    };

    const ispassed = () => {
        return id.includes('@') && pw.length > 4
            ? setFlag(false) : setFlag(true);
    };



    return (
        <div className='main'>
            <div className="loginForm">
                <div>
                    <img className='loginlogo' alt = "instalogo" src = "img/instagramlogo.png"/>
                </div>
                <div>
                    <input 
                        type = "text"
                        placeholder = "   전화번호 사용자 이름 또는 이메일"
                        className='loginInput'
                        onChange = {inputId}
                        onKeyUp = {ispassed}
                    />
                </div>
                <div>
                    <input
                        type= "password"
                        placeholder='   비밀번호'
                        className='loginInput'
                        onChange={inputPw}
                        onKeyUp = {ispassed}
                    />
                </div>
                <div>
                    <button
                        type='button'
                        className='loginButton'
                        disabled={flag}
                    >로그인</button>
                </div>
                <div className='loginLine'>또는</div>
                <div className='loginFacebook'><AiFillFacebook /> Facebook으로 로그인</div>
                <div className='loginFindPw'>비밀번호를 잊으셨나요?</div>
            </div>
            <div className='loginJoin'>
                <div className='joinsec'>계정이 없으신가요? <a href="#" className='a'>가입하기</a></div>
            </div>
            <div className='loginFooter'>
                <footer>{footContent}</footer>
            </div>
        </div>
    );
};

export default Login;