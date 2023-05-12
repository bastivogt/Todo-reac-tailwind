import { useEffect, useState } from "react";
import TodoAdd from "./todos/TodoAdd";
import TodoList from "./todos/TodoList";

let mount = false;

function App() {
  const [todos, setTodos] = useState([
    /*{ id: 1, title: "React lernen", done: false },
    { id: 2, title: "Training", done: true },*/
  ]);

  // mount
  useEffect(() => {
    //mount = true;
    console.log("MOUNT");
    console.log(loadTodos());
    const storageTodos = loadTodos();
    if (storageTodos) {
      setTodos([...storageTodos]);
    } else {
    }
  }, []);

  // update todos
  useEffect(() => {
    if (mount) {
      onUpdateTodos();
    }
    mount = true;
  }, [todos]);

  function onUpdateTodos() {
    console.log("ON UPDATE TODOS");
    saveTodos(todos);
  }

  function onAddTodoHandler(title) {
    /*let newTodos = [];
    let maxID = 1;
    newTodos = todos.map((todo) => {
      if (maxID <= todo.id) {
        maxID = todo.id + 1;
      }
      return { ...todo };
    });

    setTodos([{ id: maxID, title: title, done: false }, ...newTodos]);*/
    let maxID = 1;
    todos.map((todo) => {
      if (maxID <= todo.id) {
        maxID = todo.id + 1;
      }
    });
    setTodos((prev) => [{ id: maxID, title: title, done: false }, ...prev]);
  }

  function onRemoveHandler(id) {
    let newTodos = todos.filter((todo) => {
      if (todo.id !== id) {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  }

  function doneHandler(id, done) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: done };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  }

  return (
    <>
      <div className="container mx-auto p-2">
        <h1>My Todolist</h1>
        <br />
        <TodoAdd onAddTodo={onAddTodoHandler}></TodoAdd>
        <br />
        <TodoList
          todos={todos}
          onRemove={onRemoveHandler}
          onDone={doneHandler}
        ></TodoList>
      </div>
    </>
  );
}

function saveTodos(todos) {
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const storageTodos = window.localStorage.getItem("todos");
  return JSON.parse(storageTodos);
}

export default App;
