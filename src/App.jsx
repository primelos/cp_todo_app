import React, { useState } from "react";
import "./App.css";
import _ from "lodash";

function App() {
  const fakeTasks = ["Eat Dinner", "Go to gym", "Walk the dog"];
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

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
    <>
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
    </>
  );
}

export default App;
