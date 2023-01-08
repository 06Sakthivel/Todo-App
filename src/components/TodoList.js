import React, { useEffect, useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";

const getFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

const TodoList = () => {
  const [todos, setTodos] = useState(getFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }
    const newValues = [todo, ...todos];
    setTodos(newValues);
  };

  const updateTodo = (id, updatedValue) => {
    const newValue = todos.map((item) =>
      item.id === id ? updatedValue : item
    );
    setTodos(newValue);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((item) => item.id !== todoId));
  };
  return (
    <div>
      <h1>What's Your Plan Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
};

export default TodoList;
