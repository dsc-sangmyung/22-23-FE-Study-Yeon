import React from 'react';
import {useNavigate} from 'react-router-dom';
import "../css/Menu.scss";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { IoIosCompass, IoIosPaperPlane,IoMdHeartEmpty, IoIosRadioButtonOff, IoIosReorder } from "react-icons/io";
import { GoDiffAdded } from "react-icons/go";

const Menu = () => {
    return (
     <div className='menu'>
        <li> <AiFillHome className='react-icon'/>홈</li>
        <li> <AiOutlineSearch className='react-icon'/>검색</li>
        <li><IoIosCompass className='react-icon'/>탐색 탭</li>
        <li><IoIosPaperPlane className='react-icon'/>메시지</li>
        <li><IoMdHeartEmpty className='react-icon'/>알림</li>
        <li><GoDiffAdded className='react-icon'/>만들기</li>
        <li><IoIosRadioButtonOff className='react-icon'/>프로필</li>
        <li><IoIosReorder className='react-icon'/>더보기</li>
     </div>
    );
};

export default Menu;