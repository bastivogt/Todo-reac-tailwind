import React from "react";

export default function TodoListItem({
  todo,
  onDone,
  onRemove,
  removeText = "x",
  done = false,
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

  return (
    <li
      key={todo.id}
      //className="p-4 border border-sky-500 border-b-0 last:border-b text-xl"
      className={
        done
          ? "p-4 border border-green-500 border-b-0 last:border-b text-xl"
          : "p-4 border border-red-500 border-b-0 last:border-b text-xl"
      }
    >
      <div className="flex flex-row">
        <div className="basis-5">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={(evt) => {
              fireOnDone(todo.id, evt.target.checked);
            }}
          />
        </div>
        <div className="basis-full">
          <p
            onClick={() => {
              fireOnDone(todo.id, !todo.done);
            }}
            /*className={`mx-2 cursor-pointer text-sky-500 ${
          todo.done ? "line-through" : ""
        }`}*/
            className={`mx-2 cursor-pointer ${todo.done ? "line-through " : " "}
          ${done ? "text-green-500" : "text-red-500"}`}
          >
            #{todo.id} <strong>{todo.title}</strong>
          </p>
        </div>
        <div className="basis-2">
          <a
            //className="text-lg text-sky-500 hover:underline hover:text-sky-700 transition-all"
            className={`text-lg hover:underline transition-all 
          ${
            done
              ? "text-green-500 hover:text-green-700"
              : "text-red-500 hover:text-red-700"
          }`}
            href="#"
            title={`[${removeText}] #${todo.id} ${todo.title}`}
            onClick={(evt) => {
              evt.preventDefault();
              removeTodoClickHandler(todo.id);
            }}
          >
            [{removeText}]
          </a>
        </div>
      </div>
    </li>
  );
}
