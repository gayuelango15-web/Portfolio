import { FaTimes } from "react-icons/fa";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-8 relative">

        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-2xl"
        >
          <FaTimes />
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-2xl"
        />

        <h2 className="text-3xl font-bold mt-6 dark:text-white">
          {project.title}
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

    </div>
  );
}

export default ProjectModal;