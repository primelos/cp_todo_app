import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ sideBarToggle, setSideBarToggle }) => {
  return (
    <Wrapper>
      <HeaderItem>
        <i
          className="fas fa-bars"
          onClick={() => setSideBarToggle(!sideBarToggle)}
        />
      </HeaderItem>
      <HeaderItem>
        <i className="fas fa-border-all" />
        <Link to="/">
          <span>Dashboard</span>
        </Link>
      </HeaderItem>
      <HeaderItem>
        <i className="fas fa-images" />
        <span>Collections</span>
      </HeaderItem>
      <HeaderItem>
        <Link to="/calendar">
          <i className="fa fa-calendar" />
          <span>Calendar</span>
        </Link>
      </HeaderItem>
      <PlaceHolder />
      <HeaderItem>
        <Profile>
          <img
            src="https://carlosfvenegas.com/images/gitPic.jpg"
            alt="user_image"
          />
        </Profile>
      </HeaderItem>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  background-color: #20212d;
  padding: 0 20px;
  -webkit-box-shadow: 0px 4px 15px 0px #121212;
  box-shadow: 0px 4px 15px 0px #121212;
  position: sticky;
  top: 0;
`;

const HeaderItem = styled.div`
  color: #eee;
  padding: 10px 16px;
  border-radius: 4px;
  a {
    text-decoration: none;
    color: #eee;
  }
  span {
    margin-left: 10px;
    font-weight: 500;
  }
  &:hover {
    background-color: #18181f;
    transistion: 0.3s;
    cursor: pointer;
  }
`;

const PlaceHolder = styled.div`
  flex: 1;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 35px;
    border-radius: 50%;
  }
`;
