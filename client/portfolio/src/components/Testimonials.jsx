import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      name: "College Mentor",
      role: "Faculty",
      feedback:
        "Gayathri is a dedicated learner with strong problem-solving skills and a passion for web development.",
    },
    {
      name: "Project Teammate",
      role: "Developer",
      feedback:
        "Worked effectively in team projects and consistently delivered quality work on time.",
    },
    {
      name: "Peer Reviewer",
      role: "Student Developer",
      feedback:
        "Quick learner who builds clean, responsive, and user-friendly web applications.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Testimonials
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4">
            What people say about me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg"
            >
              <p className="text-gray-600 dark:text-gray-300 italic leading-7">
                "{item.feedback}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-xl dark:text-white">
                  {item.name}
                </h3>

                <p className="text-blue-500">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;