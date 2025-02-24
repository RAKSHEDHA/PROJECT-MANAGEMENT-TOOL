import React from "react";

const TaskModal = ({ task, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">{task.title}</h2>
        <p className="text-gray-600 mb-4">{task.description}</p>
        <div className="flex justify-end space-x-2">
          <button className="bg-gray-400 px-4 py-2 rounded" onClick={onClose}>
            Close
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
