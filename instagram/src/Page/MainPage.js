import React from 'react';
import '../css/MainPage.scss';
import AsideBar from '../component/AsideBar';
import PostList from '../component/PostList';
import Menu from '../component/Menu';
import StoryList from '../component/StoryList';

const MainPage = () => {
    return (
        <div>
            <Menu/>
            <StoryList/>
            <PostList/>
            <AsideBar/>
        </div>
    );
};

export default MainPage;