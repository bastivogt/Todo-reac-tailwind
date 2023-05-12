import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  onRemove,
  onDone,
  removeText = "x",
  heading = "Todo List",
  noTodosText = "No Todos...",
}) {
  function removeTodoClickHandler(id) {
    if (typeof onRemove === "function") {
      onRemove(id);
    }
  }

  function fireOnDone(id, done) {
    if (typeof onDone === "function") {
      onDone(id, done);
    }
  }

  if (todos.length <= 0) {
    return (
      <div className="TodoList">
        {heading && <h2>{heading}</h2>}
        <p>{noTodosText}</p>
      </div>
    );
  } else {
    return (
      <div className="TodoList">
        {heading && <h2>{heading}</h2>}
        <ul>
          {todos
            .filter((todo) => !todo.done)
            .map((todo) => {
              return (
                <TodoListItem
                  todo={todo}
                  done={false}
                  key={todo.id}
                  removeText={removeText}
                  onDone={(id, done) => {
                    if (typeof onDone === "function") onDone(id, done);
                  }}
                  onRemove={() => removeTodoClickHandler(todo.id)}
                ></TodoListItem>
              );
            })}
        </ul>
        <br />
        <p className="text-green-500"></p>
        <ul>
          {todos
            .filter((todo) => todo.done)
            .map((todo) => {
              return (
                <TodoListItem
                  todo={todo}
                  done={true}
                  key={todo.id}
                  removeText={removeText}
                  onDone={(id, done) => {
                    if (typeof onDone === "function") onDone(id, done);
                  }}
                  onRemove={() => removeTodoClickHandler(todo.id)}
                ></TodoListItem>
              );
            })}
        </ul>
      </div>
    );
  }
}
