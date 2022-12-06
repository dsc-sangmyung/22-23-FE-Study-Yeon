import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css';

const Login = () =>{

    const myId = '@123'
    const myPw = '12345';
    //useState를 사용하여 초기화
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [flag, setFlag] = useState(false);

    //useNavigate를 사용함.
    const navigateMain = useNavigate();
    const navigateJoin = useNavigate();
    const navigateFind = useNavigate();

    //함수 설정
    const inputId = e => {
        setId(e.target.value);
    };
    const inputPw = e => {
        setPw(e.target.value);
    };

    //Flag(Boolean)을 사용하여 로그인 가능 여부 확인
    //id에 @가 없거나 비밀번호가 4자리 이하면 로그인 불가능
    //조건 성립 시 true return /  성립 안하면 false return
    const testLogin = () => {
        return id.includes("@") && pw.length > 4
        ? setFlag(true)
        : setFlag(false);
    };
    
    //로그인 성공 시 메인 화면 이동
    const GoToMain = () => {
        navigateMain('/main');
    }

    //가입하기 누르면 회원가입 이동
    const GoToJoin = () => {
        navigateJoin('/join');
    };

    //비밀번호 찾으러 가는 거
    const GoToFind = () => {
        navigateFind('/find');
    };

    /* rendering Part */
    return (
        <div className='LoginTotal'>
            <form className='LoginForm'>
                <div className='LoginInstagram'>instagram</div>
                    {/*이메일 입력*/}
                    <div>
                        <input 
                            onChange={inputId}
                            onKeyUp = {testLogin}
                            type="text"
                            placeholder="Phone, username or email"
                            className='LoginInput'
                        />
                    </div>
                    {/*비밀번호 입력*/}
                    <div>
                        <input 
                                onChange={inputPw}
                                onKeyUp = {testLogin}
                                type="text"
                                placeholder="password"
                                className='LoginInput'
                        />
                    </div>
                    {/*로그인 버튼*/}
                    <div>
                        <button 
                            className={flag ? 'active':'unactive'}
                            onClick = {e => {
                                if(id == myId){
                                    if(pw == myPw){
                                        e.stopPropagation();
                                        GoToMain();
                                    }
                                }
                                else{
                                    alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
                                }
                            }}
                            disabled= {id === '' || pw === '' ? true : false}
                        >로그인</button>
                    </div>
                    {/*---------- 또는 ----------- */}
                    <div class="wrap">
                        <hr class="bar"></hr>
                        <span class="txt">또는</span>
                        <hr class="bar"></hr>
                    </div>
                    {/* 페이스북으로 로그인 하는 링크 */}
                    <div><a href = 'https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25224ot1ts1f82ylqu799bm1bzk2y8jf387t104s98hr4eniqrf0gdg%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dko_KR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dc23dbc3a-f7af-4fd2-893a-2f0e18b3a68c%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25224ot1ts1f82ylqu799bm1bzk2y8jf387t104s98hr4eniqrf0gdg%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0'
                            target = '_blank'>Facebook으로 로그인</a></div>

                    {/* 비밀번호 찾으러 가는 거 */}
                    <div onClick={GoToFind}>비밀번호를 잊으셨나요?</div>
            </form>
            <div>
                계정이 없으신가요?
                {/* 회원가입 */}
                <a href=''>가입하기</a>
            </div>
            <div>앱을 다운로드하세요.</div>
            <div>
                <ui>
                    <img src='https://static.cdninstagram.com/rsrc.php/v3/yi/r/cWx_hQBPmbo.png'
                        className='Loginimg'></img>
                    <img src='https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png'
                        className='Loginimg'></img>
                </ui>
            </div>
        </div>
    );
}

export default Login;