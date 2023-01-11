import React from 'react';
import {useNavigate} from 'react-router-dom';
import "../css/Menu.scss";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { IoIosCompass, IoIosPaperPlane,IoMdHeartEmpty, IoIosRadioButtonOff, IoIosReorder } from "react-icons/io";
import { GoDiffAdded } from "react-icons/go";

const Menu = () => {
    return (
     <div className='menu'>
        <li> <AiFillHome className='icon'/><a className='text'>홈</a></li>
        <li> <AiOutlineSearch /><a className='text'>검색</a></li>
        <li><IoIosCompass /><a className='text'>탐색 탭</a></li>
        <li><IoIosPaperPlane /><a className='text'>메시지</a></li>
        <li><IoMdHeartEmpty /><a className='text'>알림</a></li>
        <li><GoDiffAdded /><a className='text'>만들기</a></li>
        <li><IoIosRadioButtonOff /><a className='text'>프로필</a></li>
        <li><IoIosReorder /><a className='text'>더보기</a></li>
     </div>
    );
};

export default Menu;