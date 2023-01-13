import React from 'react';
import {useNavigate} from 'react-router-dom';
import "../css/Menu.scss";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { IoIosCompass, IoIosPaperPlane,IoMdHeartEmpty, IoIosRadioButtonOff, IoIosReorder } from "react-icons/io";
import { GoDiffAdded } from "react-icons/go";

const Menu = () => {
    return (
     <div className='menu'>
        <li> <button><AiFillHome className='homeicon'/><a className='text'>홈</a></button></li>
        <li> <button><AiOutlineSearch className='searchicon'/><a className='text'>검색</a></button></li>
        <li><button><IoIosCompass className='compassicon'/><a className='text'>탐색 탭</a></button></li>
        <li><button><IoIosPaperPlane className='planeicon'/><a className='text'>메시지</a></button></li>
        <li><button><IoMdHeartEmpty className='hearticon'/><a className='text'>알림</a></button></li>
        <li><button><GoDiffAdded className='addicon'/><a className='text'>만들기</a></button></li>
        <li><button><IoIosRadioButtonOff className='profileicon'/><a className='text'>프로필</a></button></li>
        <li><button><IoIosReorder className='extraicon'/><a className='text'>더보기</a></button></li>
     </div>
    );
};

export default Menu;