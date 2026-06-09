import { FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";
function About() {
  const cards = [
    {
      icon: <FaCode size={30} />,
      title: "Frontend",
      desc: "Building responsive and interactive user interfaces using React, HTML, CSS and JavaScript."
    },
    {
      icon: <FaLaptopCode size={30} />,
      title: "Backend",
      desc: "Developing scalable REST APIs with Node.js, Express and Python Flask."
    },
    {
      icon: <FaDatabase size={30} />,
      title: "Database",
      desc: "Managing data efficiently using MongoDB and modern database practices."
    }
  ];

  return (
    <section
      id="about"
      className="bg-white dark:bg-slate-900 py-24 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div 
          className="text-center"
          initial={{ opacity:0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold mb-6">
            About Me
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            I am a passionate Full Stack Developer
            specializing in MERN Stack development.
            I enjoy building modern, scalable and
            user-friendly applications while learning
            new technologies every day.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-8"
            >



              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white flex items-center justify-center mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {card.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-7">
                {card.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;