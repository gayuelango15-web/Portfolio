import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fqryl15",
        "template_6sx6xrh",
        form.current,
        "GPOUZTK7hoRuLBahU"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
        }
      );
  };
  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold mb-4">
            Contact Me
          </h2>

          <p className="text-gray-600 text-lg">
            Let's build something amazing together.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Get In Touch
            </h3>

            <p className="text-gray-600 leading-8 mb-8">
              I'm currently looking for opportunities as a
              Full Stack Developer, Web Developer and MERN Stack Developer.
              Feel free to contact me.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-500 text-2xl" />
                <a
                  href="mailto:gayuelango15@gmail.com"
                  className="hover:text-blue-500"
                >
                  gayuelango15@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-green-500 text-2xl" />
                <span>+91 7695864266</span>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-blue-700 text-2xl" />
                <a
                  href="https://www.linkedin.com/in/gayathri-e-01b224336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 break-all"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-black text-2xl" />
                <a
                  href="https://github.com/gayuelango15-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  GitHub Profile
                </a>
              </div>
        
              <div className="flex items-center gap-4">
                📍
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>

          </div>

          {/* Right Side */}

          <div>

            <form 
              ref={form}
              onSubmit={sendEmail}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl shadow-lg">

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full p-4 mb-4 rounded-xl border border-gray-300 dark:bg-slate-700 dark:text-white dark:border-slate-600 focus:outline-none"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full p-4 mb-4 rounded-xl border border-gray-300 dark:bg-slate-700 dark:text-white dark:border-slate-600 focus:outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-4 mb-4 rounded-xl border border-gray-300 dark:bg-slate-700 dark:text-white dark:border-slate-600 focus:outline-none"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                className="w-full p-4 mb-6 rounded-xl border border-gray-300 focus:outline-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;