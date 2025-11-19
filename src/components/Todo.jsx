import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "../Footer";


export default function Todo() {
  const [tasks, addTasks] = useState([]);
  const completedTasks = tasks.filter((task) => task.done).length;
  const totalTasks = tasks.length

  return (
    <div className="min-h-screen flex flex-col items-center pt-20 bg-gray-100 px-4">
      <Form tasks={tasks} addTasks={addTasks} />
      <TodoList tasks={tasks} addTasks={addTasks} />
      <Footer completedTasks={completedTasks} totalTasks={totalTasks}/>
    </div>
  );
}
