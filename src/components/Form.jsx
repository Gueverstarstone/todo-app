import React from "react";
import { useState } from "react";

export default function Form({ tasks, addTasks }) {
  const [task, addTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
     if (!task.trim()) return;
    addTasks([...tasks, task]);
    addTask("");
  }
  return (
    <div>
      {/* Input Form */}
      <form
        className="bg-white w-full max-w-md flex items-center gap-2 px-4 py-3 rounded-xl shadow-md border border-gray-200"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Add your task..."
          className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
          onChange={(e) => addTask(e.target.value)}
          value={task}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition cursor-pointer"
        >
          Add +
        </button>
      </form>
    </div>
  );
}
