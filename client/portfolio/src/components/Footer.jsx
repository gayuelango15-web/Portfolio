import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Projects from "./Projects";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
              Gayathri
            </h2>

            <p className="mt-4 text-gray-400">
              Full Stack Developer | MERN Stack Developer
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">
              <a 
                href="https://github.com/gayuelango15-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a 
                href="https://www.linkedin.com/in/gayathri-e-01b224336"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              
              <a href="mailto:gayuelago15@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">
          © 2026 Gayathri. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;