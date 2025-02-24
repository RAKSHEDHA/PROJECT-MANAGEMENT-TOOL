import React from "react";

const Task = ({ task }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <div className="mt-2 flex justify-between">
        <span className="text-sm text-gray-500">Status: {task.status}</span>
        <button className="bg-primary text-white px-3 py-1 rounded">Edit</button>
      </div>
    </div>
  );
};

export default Task;
