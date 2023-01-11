import React from 'react';
import PostListItem from './PostListItem';
import "../css/PostList.scss";
const PostList = ({contents}) => {
    return (
        <div>
            {contents.map(content => (
                <PostListItem content={content} key={content.id}/>
            ))}
        </div>
    );
};

export default PostList;