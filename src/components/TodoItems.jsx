import React from "react";

export default function TodoItems({ item, tasks, addTasks }) {
  function handleDelete(item) {
    console.log("deleted", item);

    addTasks(tasks.filter((task) => task !== item));
  }
  return (
    <div className="flex items-center justify-between w-full border-l-4 border-blue-500 bg-white pl-3 pr-3 py-2 rounded hover:bg-blue-50 transition">
      <h3 className="text-gray-800 font-semibold">{item}</h3>

      <button
        onClick={() => handleDelete(item)}
        className="text-red-500 hover:text-red-700 font-bold text-lg cursor-pointer"
      >
        X
      </button>
    </div>
  );
}
