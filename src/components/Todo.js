import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { BsFillTrashFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

export const Todo = ({ todos, removeTodo, updateTodo, completeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((item, idx) => {
    return (
      <div
        key={idx}
        className={item.isCompleted ? "todo-item complete" : "todo-item"}
      >
        <div key={item.id} onClick={() => completeTodo(item.id)}>
          {item.text}
        </div>
        <div className="icons">
          <FaRegEdit
            onClick={() =>
              setEdit({
                id: item.id,
                value: item.text,
              })
            }
            className="edit"
          />
          <BsFillTrashFill
            onClick={() => removeTodo(item.id)}
            className="delete"
          />
        </div>
      </div>
    );
  });
};
