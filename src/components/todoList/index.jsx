import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoItem from "../todoItem";
import _ from "lodash";
import { db } from "../../firbase";
import {
  collection,
  orderBy,
  onSnapshot,
  query,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const TodoList = ({ list }) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // const docRef = doc(db, 'todoCategories', list.name, 'todos', .id )

  useEffect(() => {
    const todoListQuery = query(
      collection(db, "todoCategories", list.name, "todos"),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(todoListQuery, (querySnapshot) => {
      const todoItems = [];

      querySnapshot.forEach((doc) => {
        todoItems.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setTodos(todoItems);
    });

    return unsub;
  }, [list.name]);

  const getTodos = async () => {};

  useEffect(() => {
    getTodos();
  }, [todo]);

  const checkTodoExists = (data) => {
    return _.some(todos, ["todo", data]);
  };

  // const createId = () => {
  //   return Math.random() * 10;
  // };

  const addTodoHandler = async (e) => {
    if (todo.length > 0) {
      if (!checkTodoExists(todo.toLowerCase())) {
        const collectionRef = collection(
          db,
          "todoCategories",
          list.name,
          "todos"
        );
        await addDoc(collectionRef, {
          title: todo,
          completed: false,
          createdAt: serverTimestamp(),
        });
        setTodo("");
      }
    }
  };

  const updateTodos = async (e) => {
    const docRef = doc(db, "todoCategories", list.name, "todos", e.data.id);
    await updateDoc(docRef, {
      title: e.edit,
      completed: e.data.completed,
      createdAt: serverTimestamp(),
    });
  };

  const changeCompleted = async (e) => {
    const docRef = doc(db, "todoCategories", list.name, "todos", e.id);
    await updateDoc(docRef, {
      completed: !e.completed,
    });
  };

  const deleteTask = async (e) => {
    if (e.completed) {
      await deleteDoc(doc(db, "todoCategories", list.name, "todos", e.id));
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
