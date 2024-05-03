import React, { useState } from "react";

import Todos from "../components/Todos";
import NewTodo from "../components/NewTodo";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((previousTodos) => {
      return [...previousTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodos = (id) => {
    setTodos((previousTodos) => {
      const filteredTodos = previousTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-auto bg-slate-700">
        <h1 className=" bg-white px-5 py-2 text-4xl font-bold rounded-lg mb-5">
          Todo App
        </h1>
        <NewTodo onAddTodos={handleAddTodo} />
        <Todos todos={todos} onRemoveTodos={handleRemoveTodos} />
      </div>
    </>
  );
};

export default Home;
