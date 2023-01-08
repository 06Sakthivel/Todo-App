import React, { useState, useEffect, useRef } from "react";
import "../App.css";

export const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSumbit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSumbit} className="todo-form">
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            name="text"
            value={input}
            onChange={handleChange}
            className="todo-input edit"
            ref={inputRef}
          />
          <button className="todo-btn edit">Update Todo</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            name="text"
            value={input}
            onChange={handleChange}
            autoComplete="off"
            className="todo-input"
            ref={inputRef}
          />
          <button className="todo-btn">Add Todo</button>
        </>
      )}
    </form>
  );
};
