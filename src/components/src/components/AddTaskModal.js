import React from "react";

const AddTaskModal = ({ isOpen, onClose, onAdd }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <input
          type="text"
          placeholder="Task Name"
          className="w-full border p-2 rounded mb-4"
        />
        <textarea
          placeholder="Task Description"
          className="w-full border p-2 rounded mb-4"
        />
        <div className="flex justify-end gap-2">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={onAdd}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
