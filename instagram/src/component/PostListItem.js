import React from "react";
import CommentList from "./CommentList";
import "../css/PostList.scss";

const PostListItem = ({ content }) => {
  return (
    <div className="postlist">
      <div className="navbar">
        <div className="navbar_img"></div>
        <div className="navbar_m">
          <div className="navbar_name">{content.name}</div>
          <div className="navbar_location">{content.location}</div>
        </div>
      </div>
      <div>
        <img src={content.image} alt={content.id} className="img" />
      </div>
      <div>
        <CommentList />
      </div>
    </div>
  );
};

export default PostListItem;
