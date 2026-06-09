import { FaCode, FaProjectDiagram, FaLaptopCode } from "react-icons/fa";

function Stats() {

  const stats = [
    {
      icon: <FaCode />,
      number: "10+",
      title: "Technologies"
    },
    {
      icon: <FaProjectDiagram />,
      number: "15+",
      title: "Projects"
    },
    {
      icon: <FaLaptopCode />,
      number: "1000+",
      title: "Hours Coding"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 text-center shadow-lg"
            >

              <div className="text-5xl text-blue-500 flex justify-center mb-4">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold dark:text-white">
                {item.number}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;