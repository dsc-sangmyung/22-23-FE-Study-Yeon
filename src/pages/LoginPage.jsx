import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.scss'

function LoginPage(){
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [button, setButton] = useState(true);
    const navigate = useNavigate();

    const realId = '@naver.com';
    const realPw = '123456789';

    const changeButton = () => {
        id.includes('@') && pw.length >= 5 ? setButton(false) : setButton(true);
    };

    const goToMain = () =>{
        navigate('/postlist');
    };

    return(
        <div className='loginPage'>
            <form className='loginForm'>
                <div className='loginString'>instagram</div>
                <div>
                    <input 	
                        placeholder="전화번호 사용자 이름 또는 이메일"
                        id="id"
                        className="loginInput"
                        onChange={e => {
                        setId(e.target.value);
                        }}
                        onKeyUp={changeButton}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="비밀번호"
                        id="password"
                        className="loginInput"
                        onChange={e => {
                        setPw(e.target.value);
                        }}
                        onKeyUp={changeButton}
                    />
                </div>
                <button
                    type="button"
                    className="loginButton"
                    disabled={button}
                    onClick={e => {
                    if (realId === id) {
                        if (realPw === pw) {
                        console.log("Success");
                        e.stopPropagation();
                        goToMain();
                        }
                    } else {
                        alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
                    }
                    }}
                    >로그인</button>
                    <div>
                        <div>또는</div>
                        <div>FaceBook으로 로그인</div>
                        <div>비밀번호를 잊으셨나요?</div>
                    </div>
            </form>
            <form className='loginEtc'>
                <div>
                    게정이 없으신가요? 
                    <a href={"/register"}>가입하기</a>
                </div>
            </form>
            <div>
                앱을 다운로드하세요.
            </div>
            <div>
                <img className = 'loginimg' src = 'https://static.cdninstagram.com/rsrc.php/v3/yi/r/cWx_hQBPmbo.png' alt = '앱스토어'></img>    
                <img className = 'loginimg' src = 'https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png' alt = '구글 플레이'></img>
            </div>
            <footer>
                <ui>
                    <ui><a href='https://about.meta.com/' target = "_blank">Meta </a></ui>
                    <ui><a href='https://about.instagram.com/' target = "_blank">소개 </a></ui>
                </ui>
            </footer>
        </div>
    );
}

export default LoginPage;