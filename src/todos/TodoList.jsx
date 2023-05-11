import React from "react";

export default function TodoList({
  todos,
  onRemove,
  onDone,
  removeText = "x",
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
        <h2>TodoList</h2>
        <p>{noTodosText}</p>
      </div>
    );
  }
  return (
    <div className="TodoList">
      <h2>TodoList</h2>
      <ul>
        {todos
          .filter((todo) => !todo.done)
          .map((todo) => {
            return (
              <li
                key={todo.id}
                className="p-4 border border-red-500 border-b-0 last:border-b text-xl"
              >
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={(evt) => {
                    /*evt.target.checked = !todo.done;
                  console.log(evt.target.checked);
                  if (typeof onDone === "function") {
                    onDone(todo.id, evt.target.checked);
                  }*/
                    fireOnDone(todo.id, evt.target.checked);
                  }}
                />
                <span
                  onClick={() => {
                    fireOnDone(todo.id, !todo.done);
                  }}
                  className={`mx-2 cursor-pointer text-red-500 ${
                    todo.done ? "line-through" : ""
                  }`}
                >
                  #{todo.id} {todo.title}
                </span>
                <a
                  className="text-lg text-red-500 hover:underline hover:text-red-700 transition-all"
                  href="#"
                  title={`[${removeText}] #${todo.id} ${todo.title}`}
                  onClick={(evt) => {
                    evt.preventDefault();
                    removeTodoClickHandler(todo.id);
                  }}
                >
                  [{removeText}]
                </a>
              </li>
            );
          })}
      </ul>
      <br />
      <ul>
        {todos
          .filter((todo) => todo.done)
          .map((todo) => {
            return (
              <li
                key={todo.id}
                className="p-4 border border-green-500 border-b-0 last:border-b text-xl"
              >
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={(evt) => {
                    /*evt.target.checked = !todo.done;
                  console.log(evt.target.checked);
                  if (typeof onDone === "function") {
                    onDone(todo.id, evt.target.checked);
                  }*/
                    fireOnDone(todo.id, evt.target.checked);
                  }}
                />
                <span
                  onClick={() => {
                    fireOnDone(todo.id, !todo.done);
                  }}
                  className={`mx-2 cursor-pointer text-green-500 ${
                    todo.done ? "line-through" : ""
                  }`}
                >
                  #{todo.id} {todo.title}
                </span>
                <a
                  className="text-lg text-green-500 hover:underline hover:text-green-700 transition-all"
                  href="#"
                  title={`[${removeText}] #${todo.id} ${todo.title}`}
                  onClick={(evt) => {
                    evt.preventDefault();
                    removeTodoClickHandler(todo.id);
                  }}
                >
                  [{removeText}]
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
