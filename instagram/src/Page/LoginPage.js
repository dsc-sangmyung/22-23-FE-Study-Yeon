import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoginPage.scss';
 
const LoginPage = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [flag, setFlag] = useState(true);
    const linkMain = useNavigate();

    const handleIdInput = event => {
        setId(event.target.value);
    };

    const handlePwInput = event => {
        setPw(event.target.value);
    };

    const isPassedLogin = () => {
        return id.includes('@') && pw.length > 4
                ? setFlag(false) : setFlag(true);
    };

    const onClickButton = () => {
        linkMain("/main");
    };

    return (
        <div className='main'>
            <div className='box'>
                {/*img*/}
                <img src="/img/Mainimage.png" alt = "mainimage" className='mainimage'/>
                {/*loginform*/}
                <form className='loginform'>
                    {/*instagram logo */}
                    <img src="/img/Instagramlogo.png" alt="Instagram logo" className='logo'/>
                    {/* 1st Form*/}
                    <div>
                        <input
                            onChange={handleIdInput}
                            onKeyUp={isPassedLogin}
                            type="text"
                            placeholder="전화번호, 사용자 이름 또는 이메일"
                            className='inputform'
                        />
                    </div>
                    <div>
                        <input
                            onChange={handlePwInput}
                            onKeyUp={isPassedLogin}
                            type="text"
                            placeholder="비밀번호"
                            className='inputform'
                        />
                    </div>
                    <div>
                        <button
                            type='button'
                            onClick={onClickButton}
                            className = 'loginButton'
                            disabled= {flag}
                        >로그인</button>
                    </div>
                    <div>또는</div>
                    <div>Facebook으로 로그인</div>
                    <div>비밀번호를 잊으셨나요?</div>
                </form>
                {/* 2nd Form */}
                <div>
                    계정이 없으신가요?<a>가입하기</a>
                </div>
                <div>앱을 다운로드하세요</div>
                {/* Download img */}
                <div>
                    <img></img>
                    <img></img>
                </div>
            </div>

            {/*Footer*/}
            <footer>
                <div></div>
                <div>
                    <select name = "language">
                        <option>한국어</option>
                        <option>English</option>
                        <option>English(UK)</option>
                    </select>
                    &copy; {new Date().getFullYear()} Instagram from Meta
                </div>
            </footer>
        </div>
    );

};

export default LoginPage;