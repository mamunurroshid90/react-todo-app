import React from "react";

import { MdDelete } from "react-icons/md";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;

  const handleClick = (id) => {
    props.onRemoveTodos(id);
  };

  return (
    <article
      className=" flex justify-between items-center bg-slate-900 text-white w-[450px]
     h-[100px] px-5 py-4 rounded-md"
    >
      <div>
        <h2 className=" text-xl font-semibold">Title: {title}</h2>
        <p>
          <span className=" font-bold">Description:</span> {desc}
        </p>
      </div>
      <button onClick={() => handleClick(id)}>
        <MdDelete className=" text-2xl" />
      </button>
    </article>
  );
};

export default Todo;
