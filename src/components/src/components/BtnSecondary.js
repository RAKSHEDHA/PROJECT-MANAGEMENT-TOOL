import React from "react";

const BtnSecondary = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-80"
    >
      {children}
    </button>
  );
};

export default BtnSecondary;
