import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

import quizImg from "../assets/quiz.png";
import todoImg from "../assets/todo.png";
import expenseImg from "../assets/expense.png";
import studentImg from "../assets/student.png";
import weatherImg from "../assets/weather.png";

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const projects = [
    {
      title: "Quiz App",
      category: "Frontend",
      description:
        "Interactive quiz application with multiple-choice questions, score tracking, progress indicator, answer validation, and restart functionality.",
      image: quizImg,
      technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
      github: "https://github.com/gayuelango15-web/quiz-app",
      live: "https://quiz-app-demo.vercel.app",
    },

    {
      title: "Expense Tracker",
      category: "Frontend",
      description:
        "Expense management application with category-wise tracking, expense statistics, sorting, searching, and local storage support.",
      image: expenseImg,
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/gayuelango15-web/Expense-Tracker",
      live: "https://Expense-Tracker.vercel.app",
    },

    {
      title: "To-Do App",
      category: "Frontend",
      description:
        "Task management application with CRUD operations, search, completion tracking, local storage support, and task statistics and responsive design.",
      image: todoImg,
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/gayuelango15-web/todo-app",
      live: "https://todo-app-demo.vercel.app",
    },

    {
      title: "Weather App",
      category: "Frontend + API",
      description:
        "Weather application with API integration, city-based search, real-time weather updates, CURD operation and responsive design.",
      image: weatherImg,
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/gayuelango15-web/Weather-App",
      live: "https://Weather-App-demo.vercel.app",
    },

    {
      title: "Student Management System",
      category: "Frontend",
      description:
        "CRUD-based student management system with search, sorting, pass/fail analysis, mark statistics, and local storage support.",
      image: studentImg,
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/gayuelango15-web/Student-System",
      live: "https://Student-System-demo.vercel.app",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = 
      filter === "All" || project.category === filter;

    const matchesSearch = 
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.technologies.some((tech) => 
        tech.toLowerCase().includes(search.toLowerCase())
      );
      return matchesCategory && matchesSearch;
  });
    

  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold mb-4">
            Projects
          </h2>

          <p className="text-gray-600 text-lg">
            Some of my recent work
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["All", "Javascript", "Frontend", "Python"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300
                ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white shadow-lg"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-white shadow"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

           <div className="flex justify-center mt-6">
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                w-full max-w-md
                px-5 py-3
                rounded-xl
                border
                border-gray-300
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-16">

          {filteredProjects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 0.6, delay: index * 0.2,}}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-slate-900 dark:text-white text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mt-5">

                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white py-3 rounded-xl"
                >
                  View Details
                </button>

                <div className="flex gap-4 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-700 transition"
                  >
                    View Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white px-5 py-3 rounded-xl"
                  >
              
                    Live Demo
                  </a>

                </div>



              </div>

            </motion.div>

          ))}

          <div className="col-span-ful text-center py-10">
            <h3 className="text-2xl font-semibold text-gray-500">
              No More projects found
            </h3>
          </div>
        </div>

      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
    
  );
}

export default Projects;