import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Menu.scss";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import {
  IoIosCompass,
  IoIosPaperPlane,
  IoMdHeartEmpty,
  IoIosRadioButtonOff,
  IoIosReorder,
} from "react-icons/io";
import { GoDiffAdded } from "react-icons/go";

const Menu = () => {
  const linkMain = useNavigate();
  const linkRand = useNavigate();
  const linkDm = useNavigate();
  const linkInbox = useNavigate();
  const linkProfile = useNavigate();

  const onClickMain = () => {
    linkMain("/main");
  };

  const onClickRand = () => {
    linkRand("/rand");
  };

  const onClickDm = () => {
    linkDm("/dm");
  };

  const onClickInbox = () => {
    linkInbox("/inbox");
  };
  const onClickProfile = () => {
    linkProfile("/profile");
  };

  return (
    <div className="menu">
      <li>
        <button onClick={onClickMain}> 
          <AiFillHome className="homeicon" />
          <a className="text">홈</a>
        </button>
      </li>
      <li>
        <button>
          <AiOutlineSearch className="searchicon" />
          <a className="text">검색</a>
        </button>
      </li>
      <li>
        <button onClick={onClickRand}>
          <IoIosCompass className="compassicon" />
          <a className="text">탐색 탭</a>
        </button>
      </li>
      <li>
        <button onClick={onClickDm}>
          <IoIosPaperPlane className="planeicon" />
          <a className="text">메시지</a>
        </button>
      </li>
      <li>
        <button onClick={onClickInbox}>
          <IoMdHeartEmpty className="hearticon" />
          <a className="text">알림</a>
        </button>
      </li>
      <li>
        <button >
          <GoDiffAdded className="addicon" />
          <a className="text">만들기</a>
        </button>
      </li>
      <li>
        <button onClick={onClickProfile}>
          <IoIosRadioButtonOff className="profileicon" />
          <a className="text">프로필</a>
        </button>
      </li>
      <li>
        <button>
          <IoIosReorder className="extraicon" />
          <a className="text">더보기</a>
        </button>
      </li>
    </div>
  );
};

export default Menu;
