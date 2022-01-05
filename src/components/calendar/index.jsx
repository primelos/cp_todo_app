import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import Header from "../header";
import Sidebar from "../sidebar";

const CalendarShow = (props) => {
  const [value, onChange] = useState(new Date());
  console.log("props", props);
  const [sideBarToggle, setSideBarToggle] = useState(false);

  const sidebarTodoList = [
    {
      name: "Personal",
      color: "#fd76a1",
      icon: "fas fa-user",
    },
    {
      name: "Work",
      color: "#70c4be",
      icon: "fas fa-briefcase",
    },
    {
      name: "Profit with React",
      color: "#ab6ddf",
      icon: "fas fa-file-code",
    },
  ];
  return (
    <Wrapper>
      <Header
        sideBarToggle={sideBarToggle}
        setSideBarToggle={setSideBarToggle}
      />
      <Main>
        <Sidebar
          sideBarToggle={sideBarToggle}
          sidebarTodoList={sidebarTodoList}
        />
        <MainContent
          style={{
            width: `calc(100vw - (${sideBarToggle ? "300px" : "70px"}))`,
          }}
        >
          <Calendar
            style={{ height: "50% !important" }}
            onChange={onChange}
            value={value}
            calendarType="Arabic"
            defaultView="year"
          />
        </MainContent>
      </Main>
    </Wrapper>
  );
};

export default CalendarShow;

const Wrapper = styled.div`
  background: #18181f;
  min-height: 100vh;
  min-width: 100vw;
  color: #eee;
`;
const Main = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  transistion: 0.3s;
`;
