import React, { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [tasks, addTasks] = useState([]);
  return (
    <div className="min-h-screen flex flex-col items-center pt-20 bg-gray-100 px-4">
      <Form tasks={tasks} addTasks={addTasks} />
      <TodoList tasks={tasks} addTasks={addTasks}/>
    </div>
  );
}
