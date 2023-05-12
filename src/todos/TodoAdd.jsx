import React, { useState } from "react";

export default function TodoAdd({
  onAddTodo,
  placeholder = "New Todo",
  heading = "New Todo",
}) {
  const [inputText, setInputText] = useState("");

  function addButtonClickHandler(evt) {
    if (inputText !== "") {
      if (typeof onAddTodo === "function") {
        onAddTodo(inputText);
      }
      setInputText("");
    }
  }

  function enterHandler(evt) {
    if (evt.key === "Enter") {
      addButtonClickHandler(evt);
    }
  }
  return (
    <div className="TodoAdd">
      {heading && <h2>{heading}</h2>}
      <input
        value={inputText}
        placeholder={placeholder}
        className="border border-sky-500 focus:border-sky-700 p-2 text outline-none transition-all"
        type="text"
        onChange={(evt) => setInputText(evt.target.value)}
        onKeyUp={enterHandler}
      />
      <button onClick={addButtonClickHandler} className="btn-primary">
        Add Todo
      </button>
    </div>
  );
}
