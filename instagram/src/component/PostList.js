import React from 'react';
import PostListItem from './PostListItem';
import StoryList from './StoryList';
import "../css/PostList.scss";
const PostList = ({contents}) => {
    return (
        <div>
            <div><StoryList/></div>
            {contents.map(content => (
                <PostListItem content={content} key={content.id}/>
            ))}
        </div>
    );
};

export default PostList;