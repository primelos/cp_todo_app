import React, { useState } from "react";
import "./App.css";
import _ from "lodash";
import Header from "./components/header";
import styled from "styled-components";
import TodoList from "./components/todoList";
import Sidebar from "./components/sidebar";

function App() {
  const [sideBarToggle, setSideBarToggle] = useState(true);
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
      name: "Profut with React",
      color: "#ab6ddf",
      icon: "fas fa-file-code",
    },
  ];

  return (
    <Wrapper>
      <Header />

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
          <TodoContent>
            <Title>Dashboard</Title>
            <Greeting>Good morning, Carlos</Greeting>

            <TodoList />
          </TodoContent>
        </MainContent>
      </Main>
    </Wrapper>
  );
}

export default App;

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

const TodoContent = styled.div`
  max-width: 700px;
  width: 100%;
`;

const Title = styled.div`
  margin: 50px;
  font-size: 30px;
  font-weight: 700;
`;

const Greeting = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 800;
`;
