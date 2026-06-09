import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiFlask,
} from "react-icons/si";

import { motion } from "framer-motion";

function Skills() {

  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 size={50} />,
      color: "text-orange-500"
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={50} />,
      color: "text-blue-500"
    },
    {
      name: "JavaScript",
      icon: <FaJs size={50} />,
      color: "text-yellow-500"
    },
    {
      name: "React",
      icon: <FaReact size={50} />,
      color: "text-cyan-500"
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={50} />,
      color: "text-green-600"
    },
    {
      name: "Express",
      icon: <SiExpress size={50} />,
      color: "text-gray-700"
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={50} />,
      color: "text-green-500"
    },
    {
      name: "Python",
      icon: <FaPython size={50} />,
      color: "text-blue-600"
    },
    {
      name: "Flask",
      icon: <SiFlask size={50} />,
      color: "text-black"
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-slate-900"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold mb-4">
            My Skills
          </h2>

          <p className="text-gray-600 text-lg">
            Technologies I use to build modern web applications
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1}}
              transition={{ duration: 0.4, delay: index * 0.1,}}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-3xl shadow-md p-8 flex flex-col items-center hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >

              <div className={skill.color}>
                {skill.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                {skill.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;