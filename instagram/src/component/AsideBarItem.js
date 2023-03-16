import React from 'react';
import "../css/AsideBar.scss";

const AsideBarItem = ({content}) => {
    return (
        <div className='asidebar_main'>
            <img src={content.image} className = 'asidebar_img'/>
            {content.name}
        </div>
    );
};

export default AsideBarItem;