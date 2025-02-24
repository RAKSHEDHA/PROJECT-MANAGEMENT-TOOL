import React from "react";

const ProjectDropdown = ({ projects, onSelect }) => {
  return (
    <div className="relative">
      <select
        className="bg-gray-200 px-4 py-2 rounded"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">Select a Project</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectDropdown;
