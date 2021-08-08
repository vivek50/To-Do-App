import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <a
            href="javascript:void(0);"
            className="delete"
            onClick={() => deleteTodo(todo.id)}>
            <i className="material-icons">delete</i>
          </a>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left, yup!!</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
