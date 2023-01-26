import React from "react";
import AsideBarItem from "./AsideBarItem";

const AsideBar = ({ contents }) => {
  return (
    
    <div className="box">
      <div className="profilebox">
        <div className="profilebox-image"></div>
        <div>
          <div>nickname</div>
          <div>name</div>
        </div>

        <div>전환</div>
      </div>
      {contents.map((content) => (
        <AsideBarItem content={content} key={content.id} />
      ))}
    </div>
  );
};

export default AsideBar;
