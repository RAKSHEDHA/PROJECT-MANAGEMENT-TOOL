import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Project Management Tool</h1>
        <div className="space-x-4">
          <button className="bg-secondary px-4 py-2 rounded">Dashboard</button>
          <button className="bg-secondary px-4 py-2 rounded">Profile</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
