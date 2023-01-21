import React from 'react';
import "../css/AsideBar.scss";

const AsideBarItem = ({content}) => {
    return (
        <div>
            {content.name}
        </div>
    );
};

export default AsideBarItem;