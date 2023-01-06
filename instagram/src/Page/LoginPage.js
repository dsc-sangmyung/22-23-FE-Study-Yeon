import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  );
};

export default LoginPage;
