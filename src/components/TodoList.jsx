import React from "react";
import TodoItems from "./TodoItems";

export default function TodoList({ tasks, addTasks }) {
  return (
    <div className="w-full max-w-md mt-6">
      <h2 className="text-lg flex justify-center font-semibold text-gray-700 mb-3">Your Tasks</h2>

      <div className="space-y-3">
        {tasks.map((item, index) => (
          <div
            key={index}
            className="bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-200"
          >
            <TodoItems item={item} tasks={tasks} addTasks={addTasks}/>
          </div>
        ))}
      </div>
    </div>
  );
}
