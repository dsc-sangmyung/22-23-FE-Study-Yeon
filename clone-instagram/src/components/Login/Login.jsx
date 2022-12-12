import React from 'react';
import { useState } from 'react';
import './Login.scss';

const Login = () => {
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
                        placeholder = " 전화번호 사용자 이름 또는 이메일"
                        className='loginInput'
                        onChange = {inputId}
                        onKeyUp = {ispassed}
                    />
                </div>
                <div>
                    <input
                        type= "password"
                        placeholder=' 비밀번호'
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
            </div>
        </div>
    );
};

export default Login;