import React from "react";
import "../css/MainPage.scss";
import AsideBar from "../component/AsideBar";
import PostList from "../component/PostList";
import Menu from "../component/Menu";
import StoryList from "../component/StoryList";

const MainPage = () => {
  const contents = [
    {
      id: 1,
      name : 'y_eonjae',
      image: "./img/Dog1.jpeg",
      location: "pyeontaek, gyeongi"
    },
    {
      id: 2,
      name : 'jeong_yeon_jae',
      image: "./img/Dog2.jpeg",
      location: "pyeontaek, gyeongi"
    },
    {
      id: 3,
      name : 'ash_jae',
      image: "./img/Dog3.jpeg",
      location: "suwon, gyeongi"
    },
    {
      id: 4,
      name : 'yeon_0818',
      image: "./img/Dog4.jpeg",
      location: "jongro, seoul"
    },
    {
      id: 5,
      name: 'yeon_yeon',
      image: "./img/Dog5.jpeg",
      location: "pyeontaek, gyeongi"
    },
  ];
  return (
    <div className="main">
      <div className="menu">
        <Menu />
      </div>
      <div className="feed">
        <div className="story">
          <StoryList />
        </div>
        <div className="post">
          <PostList contents={contents} />
        </div>
      </div>
      <div className="aside">
        <AsideBar />
      </div>
    </div>
  );
};

export default MainPage;
