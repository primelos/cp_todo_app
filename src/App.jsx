import React, { useState } from "react";
import "./App.css";
import _ from "lodash";
import Header from "./components/header";
import styled from "styled-components";
import TodoItem from "./components/todoItem";
import TodoList from "./components/todoList";

function App() {
  const fakeTasks = ["Eat Dinner", "Go to gym", "Walk the dog"];
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const checkTodoExists = (data) => {
    return _.some(tasks, ["task", data]);
  };

  const createId = () => {
    return Math.random() * 10;
  };

  const addTaskHandler = (e) => {
    e.preventDefault();
    if (!checkTodoExists(task)) {
      setTasks((x) => (x = [...tasks, { id: createId(), task: task }]));
    }
  };

  const deleteTask = (e) => {
    setTasks((x) => (x = tasks.filter((del) => del.id !== e)));
  };

  return (
    <Wrapper>
      <Header />

      <Main>
        <MainContent style={{ width: "100vw" }}>
          <TodoContent>
            <Title>Dashboard</Title>
            <Greeting>Good morning, Carlos</Greeting>

            <TodoList />
          </TodoContent>
        </MainContent>
      </Main>

      <h2 style={{ color: "white" }}>TODO LIST APP 🤙</h2>
      <form>
        <input
          type="text"
          style={{ outline: "none" }}
          value={task}
          onChange={(e) => setTask((ev) => (ev = e.target.value))}
        />

        <button onClick={(e) => addTaskHandler(e)}>Add task</button>
      </form>

      {tasks.map((task) => (
        <>
          <h2 key={task.id} onClick={(e) => deleteTask(task.id)}>
            - {task.task}
          </h2>
        </>
      ))}
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
