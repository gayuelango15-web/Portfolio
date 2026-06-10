import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 p-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
          >

            <span className="bg-purple-100 text-purple-600 px-5 py-2 rounded-full font-medium">
              👋 Hello, I'm
            </span>

            <h1 className="mt-6 text-6xl lg:text-8xl font-black leading-tight">

              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
                Gayathri
              </span>

            </h1>

            <TypeAnimation
              sequence={[
              "MERN Stack Developer",
              2000,
              "Full Stack Developer",
              2000,
              "Web Developer",
              2000,
              ]}
                wrapper="h3"
                speed={50}
                repeat={Infinity}
                className="text-3xl text-blue-600 font-semibold mt-2"
            />

            <p className="text-gray-600  dark:text-gray-300 mt-8 text-lg max-w-xl leading-8">

              Building modern, scalable and user-friendly web
              applications using React, Node.js,
              Express, MongoDB and Python.

            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-white px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-white px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition"
              >
                Contact Me
              </a>
              
              <a 
                href="/Gayathri_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition"
              >
                View Resume
              </a>

              <a
                href="/Gayathri_Resume.pdf"
                download
                className="bg-black text-white px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition">
                  Resume
              </a>

            </div>

            <div className="flex gap-6 mt-10 text-3xl">

              <a 
                href="https://github.com/gayuelango15-web"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black text-white rounded-xl"
              > 
                <FaGithub className="hover:text-blue-700 dark:text-white hover:text-blue-600 transition" />
              </a>

              <a 
                href="https://www.linkedin.com/in/gayathri-e-01b224336"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl"
              >
                <FaLinkedin className="hover:text-blue-700 dark:text-white hover:text-blue-600 transition" />
              </a>

              <a 
                href="mailto:gayuelango15@gmail.com"
                target="_blank"
                rel="noonpener noreferrer"
                className="px-6 py-3 bg-black text-white rounded-xl"
              >
                <FaEnvelope className="hover:text-blue-700 dark:text-white hover:text-blue-600 transition" />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
          >

            <div className="relative">

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full blur-3xl opacity-30 scale-110"></div>

              <div className="relative w-[320px] h-[320px] lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 p-2">

                <img
                  src="/photos.jpeg"
                  alt="Gayathri"
                  className="w-full h-full object-cover rounded-full border-8 border-white"
                />

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;