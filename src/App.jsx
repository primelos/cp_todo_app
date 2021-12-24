import React, { useState } from "react";
import "./App.css";

function App() {
  const fakeTasks = ["Eat Dinner", "Go to gym", "Walk the dog"];
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const checkTodo = (data) => {
    if (tasks.includes(data)) {
      console.log("its in here");
    }
  };
  const addTaskHandler = (e) => {
    // setTasks((task) => (task = e.target.value));
    checkTodo(task);
    setTasks((x) => (x = [...tasks, task]));
  };

  return (
    <>
      <h2 style={{ color: "white" }}>TODO LIST APP 🤙</h2>

      <input
        type="text"
        style={{ outline: "none" }}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={(e) => addTaskHandler(e)}>Add task</button>

      {tasks.map((task) => (
        <h2>{task}</h2>
      ))}
    </>
  );
}

export default App;
