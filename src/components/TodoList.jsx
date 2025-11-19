import React from "react";
import TodoItems from "./TodoItems";

export default function TodoList({ tasks, addTasks }) {
  const sortedTasks = tasks
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className="w-full max-w-md mt-6">
      <h2 className="text-lg flex justify-center font-semibold text-gray-700 mb-3">
        Your Tasks
      </h2>
      <div>
        {sortedTasks.map((item) => (
          <TodoItems
            key={item.name}
            item={item}
            tasks={tasks}
            addTasks={addTasks}
          />
        ))}
      </div>
    </div>
  );
}
