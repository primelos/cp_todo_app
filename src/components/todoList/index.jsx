import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import TodoItem from "../todoItem";
import _ from "lodash";

const TodoList = ({ list }) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const baseUrl = `https://api.airtable.com/v0/appryVZqreB455nuS/${list.name}`;

  const myKey = process.env.REACT_APP_AT_KEY;

  const getTodos = useCallback(async () => {
    try {
      const todoData = await fetch(baseUrl, {
        method: "get",
        headers: {
          Authorization: `Bearer ${myKey}`,
        },
      });
      const todoJson = await todoData.json();
      console.log("API", todoJson.records);
      setTodos(todoJson.records);
    } catch (err) {
      console.log(err);
    }
  }, [myKey, baseUrl]);

  useEffect(() => {
    getTodos();
  }, [todo, getTodos]);

  const checkTodoExists = (data) => {
    return _.some(todos, ["todo", data]);
  };

  const addTodoHandler = async (e) => {
    e.preventDefault();
    if (todo.length > 0) {
      if (!checkTodoExists(todo.toLowerCase())) {
        try {
          await fetch(baseUrl, {
            method: "post",
            headers: {
              Authorization: `Bearer ${myKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              records: [
                {
                  fields: {
                    title: todo,
                    completed: false,
                  },
                },
              ],
            }),
          });
          setTodo("");
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const updateTodos = async (e) => {
    try {
      await fetch(`${baseUrl}/${e.data.id}`, {
        method: "put",
        headers: {
          Authorization: `Bearer ${myKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            title: e.edit,
            completed: e.data.fields.completed,
          },
        }),
      });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const changeCompleted = async (e) => {
    try {
      await fetch(`${baseUrl}/${e.id}`, {
        method: "put",
        headers: {
          Authorization: `Bearer ${myKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            title: e.fields.title,
            completed: !e.fields.completed,
          },
        }),
      });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (e) => {
    if (e.fields.completed) {
      try {
        await fetch(`${baseUrl}/${e.id}`, {
          method: "delete",
          headers: {
            Authorization: `Bearer ${myKey}`,
          },
        });
        getTodos();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Wrapper>
      <TodoCategoryHeader>
        <CategoryIcon style={{ backgroundColor: list.color }}>
          <i className={list.icon} />
        </CategoryIcon>
        <Title>{list.name}</Title>
        <TodoInput value={todo} onChange={(e) => setTodo(e.target.value)} />
        <AddTodo className="fas fa-plus" onClick={(e) => addTodoHandler(e)} />
      </TodoCategoryHeader>
      {todos.map((data) => (
        <TodoItem
          key={data.id}
          data={data}
          color={list.color}
          deleteTask={deleteTask}
          updateTodos={updateTodos}
          changeCompleted={changeCompleted}
        />
      ))}
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  background-color: #20212d;
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
  color: white;
  padding: 4px 10px;
  margin-right: 4px;
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
