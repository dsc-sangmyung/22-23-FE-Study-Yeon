import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import "../css/LoginPage.scss";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [flag, setFlag] = useState(true);
  const linkMain = useNavigate();


  const handleIdInput = (event) => {
    setId(event.target.value);
  };

  
  const handlePwInput = (event) => {
    setPw(event.target.value);
  };

  const isPassedLogin = () => {
    return id.includes("@") && pw.length > 4 ? setFlag(false) : setFlag(true);
  };

  const onClickButton = () => {
    linkMain("/main");
  };

  return (
    <div className="main-container">
      <div>
        <img src="img/mainimage.png" alt="mainimage" className="mainimg" />
        <div className="container">
          <div className="pic" id="pic4" />
          <div className="pic" id="pic3" />
          <div className="pic" id="pic2" />
          <div className="pic" id="pic1" />
        </div>
      </div>

      <div className="totalform">
        <div className="mainform">
          {/*instagram logo */}
          <img
            src="/img/Instagramlogo.png"
            alt="Instagram logo"
            className="logo"
          />
          {/* 1st Form*/}
          <div className="formbackground1">
            <input
              onChange={handleIdInput}
              onKeyUp={isPassedLogin}
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="inputform"
            />
          </div>
          <div className="formbackground2">
            <input
              onChange={handlePwInput}
              onKeyUp={isPassedLogin}
              type="password"
              placeholder="비밀번호"
              className="inputform"
            />
          </div>
          <div className="formbackground">
            <button
              type="button"
              onClick={onClickButton}
              className="loginButton"
              disabled={flag}
            >
              로그인
            </button>
          </div>
          <div className="hr-sect">또는</div>
          <div className="facebook">
            <AiFillFacebook className="icon" /> Facebook으로 로그인
          </div>
          <div className="findpw">비밀번호를 잊으셨나요?</div>
        </div>
        <div className="subform">
          계정이 없으신가요?{" "}
          <a href="" className="a">
            가입하기
          </a>
        </div>
        <div className="downloadtext">앱을 다운로드하세요.</div>
        <div className="downloadimg">
          <img src="img/AppStore.png" alt="appstore" className="downloadimg2" />
          <img
            src="img/GooglePlay.png"
            alt="googleplay"
            className="downloadimg1"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
