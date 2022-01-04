import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TodoItem = ({ data, deleteTask, changeCompleted, saveTodos }) => {
  const [edit, setEdit] = useState(data.todo);
  // useEffect(() => {
  //   console.log("data", data);
  //   saveTodos({ data, edit });
  // }, [edit]);

  return (
    <TodoListItem>
      {data.completed ? (
        <>
          <Checkbox
            className="far fa-check-circle"
            onClick={() => changeCompleted(data)}
          />
          <input
            value={edit}
            type="text"
            style={{ textDecoration: "line-through" }}
            onChange={(e) => setEdit(e.target.value)}
          />
        </>
      ) : (
        <>
          <Checkbox
            className="far fa-circle"
            onClick={() => changeCompleted(data)}
          />

          <input
            value={edit}
            type="text"
            // style={{ textDecoration: "line-through" }}
            onChange={(e) => setEdit(e.target.value)}
          />
        </>
      )}
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

  transistion: 0.3s;

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
