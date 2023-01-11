import React from 'react';
import CommentList from './CommentList';
import NavBar from './NavBar';
import "../css/PostList.scss";

const PostListItem = ({content}) => {
    return (
        <div className='postlist'>
            <div className='navbar'><NavBar/></div>
            <div><img src={content.image} alt={content.id} className='img'/></div>
            <div><CommentList/></div>
        </div>
    );
};

export default PostListItem;