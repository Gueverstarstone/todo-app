import React from "react";

export default function TodoItems({ item, tasks, addTasks }) {
  function handleDelete(item) {
    addTasks(tasks.filter((task) => task !== item));
  }
  function handleClick(name) {
    addTasks(
      tasks.map((task) =>
        task.name === name ? { ...task, done: !task.done } : task
      )
    );
    console.log(tasks);
  }
  const className = item.done ? "line-through text-gray-400" : "text-gray-800";
  return (
    <div className="flex items-center justify-between w-full border-l-4 border-blue-500 bg-white pl-3 pr-3 py-2 rounded hover:bg-blue-50 transition">
      <h3
        onClick={() => handleClick(item.name)}
        className={`font-semibold cursor-pointer ${className}`}
      >
        {item.name}
      </h3>

      <button
        onClick={() => handleDelete(item)}
        className="text-red-500 hover:text-red-700 font-bold text-lg cursor-pointer"
      >
        X
      </button>
    </div>
  );
}
