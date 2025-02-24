import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-6">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li>
          <button className="w-full text-left px-4 py-2 bg-gray-700 rounded">Dashboard</button>
        </li>
        <li>
          <button className="w-full text-left px-4 py-2 bg-gray-700 rounded">Projects</button>
        </li>
        <li>
          <button className="w-full text-left px-4 py-2 bg-gray-700 rounded">Tasks</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
