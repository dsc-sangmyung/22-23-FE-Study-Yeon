import React from 'react';
import CommentList from './CommentList';
import NavBar from './NavBar';
import "../css/PostList.scss";

const PostListItem = ({content}) => {
    return (
        <div >
            <NavBar/>
            <img src={content.image} alt={content.id}/>
            <CommentList/>
        </div>
    );
};

export default PostListItem;