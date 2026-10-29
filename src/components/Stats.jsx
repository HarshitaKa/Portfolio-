import { motion } from "framer-motion";

function Stats() {
  const stats = [
    {
      number: "200+",
      title: "DSA Problems"
    },
    {
      number: "CLEAN CODE",
      title: "Maintainable Development"
    },
    {
      number: "SECURITY",
      title: "Secure Authentication"
    },
    {
      number: "SCALABILITY",
      title: "Performance Oriented Systems"
    }
  ];

  return (
    <section
      className="
      py-20
      px-6
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-4
        gap-6
        "
      >
        {stats.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{
              scale: 1.05
            }}
            className="
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-8
            text-center
            "
          >
            <h2
              className="
              text-3xl
              font-bold
              text-cyan-400
              "
            >
              {item.number}
            </h2>

            <p
              className="
              mt-4
              text-gray-400
              "
            >
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;