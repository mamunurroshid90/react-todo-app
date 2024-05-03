import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo({ title: "", desc: "" });
    props.onAddTodos(todo);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-slate-800 px-5 py-3 rounded w-[450px] h-[170px] mb-6"
    >
      <div>
        <label htmlFor="title" className=" text-white font-semibold pr-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter a title"
          value={title}
          onChange={handleChange}
          className=" w-[80%] p-1 rounded border-2 bg-inherit text-white"
        />
      </div>
      <div className=" mt-2 flex items-start">
        <label htmlFor="description" className=" text-white font-semibold pr-2">
          Description:
        </label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          placeholder="Enter a description"
          value={desc}
          onChange={handleChange}
          className=" w-[70%] p-1 border-2 rounded bg-inherit text-white"
        />
      </div>
      <div className=" flex justify-center mt-3">
        <button
          className=" py-1 px-3 bg-slate-900 rounded-md text-white font-semibold capitalize"
          type="submit"
        >
          add todo
        </button>
      </div>
    </form>
  );
};

export default NewTodo;
