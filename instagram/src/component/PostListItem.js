import React, { useState } from "react";
import CommentList from "./CommentList";
import "../css/PostList.scss";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import Heart from "react-heart";

const PostListItem = ({ content }) => {
  const [active, setActive] = useState(false);
  const [comment, setComment] = useState("");
  const [flag, setFlag] = useState(true);

  const cnt = active === true ? content.count + 1 : content.count;

  const handleCommentInput = (event) => {
    setComment(event.target.value);
  };
  const isPassed = () => {
    return comment.length > 0 ? setFlag(false) : setFlag(true);
  };

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
      <div className="option_bar">
        <div className="heart">
          <Heart isActive={active} onClick={() => setActive(!active)} />
        </div>
        <div className="commenticon">
          <BiMessageRounded />
        </div>
        <div className="plane">
          <IoPaperPlaneOutline />
        </div>
        <div className="bookmarkicon">
          <BsBookmark />
        </div>
      </div>
      <div className="cnt">좋아요 {cnt}개</div>
      <div className="under_nav">
        <div className="nickname">{content.name}</div>
        <div className="feedtext">{content.main_text}</div>
      </div>
      <div className="comment">
        <div className="imogeicon">
          <BsEmojiSmile />
        </div>
        <input
          placeholder="댓글 달기..."
          className="comment_input"
          type="text"
          onChange={handleCommentInput}
          onKeyUp={isPassed}
        />
        <button type="button" className="submitbutton" disabled={flag}>
          게시
        </button>
      </div>
    </div>
  );
};

export default PostListItem;
