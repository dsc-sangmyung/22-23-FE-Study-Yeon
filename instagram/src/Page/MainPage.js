import React from "react";
import "../css/MainPage.scss";
import AsideBar from "../component/AsideBar";
import PostList from "../component/PostList";
import Menu from "../component/Menu";

const MainPage = () => {
  const contents = [
    {
      id: 1,
      image: "../img/Dog1.jpeg",
    },
    {
      id: 2,
      image: "../img/Dog2.jpeg",
    },
    {
      id: 3,
      image: "../img/Dog3.jpeg",
    },
    {
      id: 4,
      image: "../img/Dog4.jpeg",
    },
    {
      id: 5,
      image: "../img/Dog5.jpeg",
    },
  ];
  return (
    <div className="main">
      <div className="menu">
        <Menu />
      </div>
      <div className="feed">
        <PostList contents={contents} />
      </div>
      <div className="aside">
        <AsideBar />
      </div>
    </div>
  );
};

export default MainPage;
