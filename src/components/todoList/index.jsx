import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "../todoItem";
import _ from "lodash";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const checkTodoExists = (data) => {
    return _.some(todos, ["todo", data]);
  };

  const createId = () => {
    return Math.random() * 10;
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (todo.length > 0) {
      if (!checkTodoExists(todo.toLowerCase())) {
        setTodos(
          (x) => (x = [{ id: createId(), todo, completed: false }, ...todos])
        );
      }
    }
    setTodo("");
  };

  const changeCompleted = (e) => {
    console.log("e", e);
    // return e ? true : false;
    return;
  };

  const deleteTask = (e) => {
    setTodos((x) => (x = todos.filter((del) => del.id !== e)));
  };
  // console.log("todos", todos);
  return (
    <Wrapper>
      <TodoCategoryHeader>
        <CategoryIcon style={{ background: "#FD76A1" }}>
          <i className="fas fa-user" />
        </CategoryIcon>
        <Title>Personal</Title>
        <TodoInput value={todo} onChange={(e) => setTodo(e.target.value)} />
        <AddTodo className="fas fa-plus" onClick={(e) => addTodoHandler(e)} />
      </TodoCategoryHeader>
      {todos.map((data) => (
        <TodoItem
          key={data.id}
          data={data}
          todos={todos}
          setTodo={setTodo}
          setTodos={setTodos}
          deleteTask={deleteTask}
          changeCompleted={changeCompleted}
        />
      ))}
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  background: #20212d;
  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hidden;
`;

const TodoCategoryHeader = styled.div`
  background: #272833;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
`;

const CategoryIcon = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const Title = styled.div`
  flex: 1;
  font-size: 18px;
  font-weight: 600;
`;

const TodoInput = styled.input`
  height: 30px;
  font-size: 18px;
  outline: none;
  border: none;
  background: #20212d;
  border-radius: 4px;
  padding: 4px 10px;
  margin-right: 4px;
  color: white;
`;

const AddTodo = styled.i`
  padding: 10px 16px;
  border-radius: 4px;
  margin-right: -12px;
  &:hover {
    cursor: pointer;
    background: #20212d;
    transition: 0.3s;
  }
`;
