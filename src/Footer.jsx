export default function Footer({ completedTasks, totalTasks }) {
  return (
    <div className="w-full mt-6 flex justify-center gap-4">
      <div className="px-5 py-2 bg-gray-800 border border-gray-700 rounded-lg shadow-md text-gray-200 font-semibold">
        Completed Tasks: {completedTasks}
      </div>

      <div className="px-5 py-2 bg-gray-800 border border-gray-700 rounded-lg shadow-md text-gray-200 font-semibold">
        Total Todos: {totalTasks}
      </div>
    </div>
  );
}

