import React, { useState } from "react";
import styled from "styled-components";

const TodoItem = ({ data, deleteTask, changeCompleted, saveTodos, color }) => {
  const [edit, setEdit] = useState(data.todo);
  // console.log("edit", edit);
  return (
    <TodoListItem>
      <Checkbox
        className={data.completed ? "far fa-check-circle" : "far fa-circle"}
        style={{ color: color }}
        onClick={() => changeCompleted(data)}
      />
      <input
        value={edit}
        type="text"
        style={{ textDecoration: data.completed ? "line-through" : "" }}
        onChange={(e) => setEdit(e.target.value)}
      />

      {data.todo !== edit && (
        <SaveTodo
          className="fas fa-check"
          onClick={() => saveTodos({ data, edit })}
        />
      )}

      <DeleteTodo
        className="fas fa-trash-alt"
        onClick={() => deleteTask(data)}
      />
    </TodoListItem>
  );
};

export default TodoItem;

const TodoListItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  transition: 0.3s;

  input {
    flex: 1;
    font-size: 22px;
    outline: none;
    background: none;
    border: none;
    color: #eee;
  }
`;

const Checkbox = styled.i`
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
  /* border-radius: 50%; */
  /* background: #18181f; */
`;

const DeleteTodo = styled.i`
  color: #ff1605;
  padding: 10px 16px;
  margin-left: 14px;
  border-radius: 4px;
  margin-right: -12px;

  &:hover {
    background: #7e2601;
    transistion: 0.3s;
    cursor: pointer;
  }
`;

const SaveTodo = styled.i`
  padding: 10px 16px;
  border-radius: 4px;
  margin-right: -12px;
  color: #42c732;

  &:hover {
    background: #2b6127;
    cursor: pointer;
    transition: 0.3s;
  }
`;
