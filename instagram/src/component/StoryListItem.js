import React from "react";
import "../css/StoryList.scss";

const StoryListItem = ({ content }) => {
  return (
    <div>
        <img src={content.image} alt={content.id} className="circles" />
        <div className="storytext">{content.name}</div>
    </div>
  );
};

export default StoryListItem;
