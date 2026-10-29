import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="
      relative
      min-h-[70vh]
      flex
      items-center
      justify-center
      px-6
      py-24
      overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
        max-w-5xl
        w-full
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        shadow-2xl
        p-12
        text-center
        "
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Let's <span className="text-cyan-400">Connect</span>
        </h2>

        <p className="text-gray-400 text-lg mb-12">
        Have a project, idea, or opportunity you'd like to discuss?
        I'm always open to meaningful conversations and professional collaborations.
        Feel free to get in touch, and let's explore how we can create something impactful together.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="mailto:harshitakanaujiya29@gmail.com"
            className="
            flex
            items-center
            gap-3
            px-8
            py-4
            rounded-full
            bg-cyan-500
            text-black
            font-semibold
            hover:scale-105
            transition
            duration-300
            "
          >
            <FaEnvelope />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/harshita-kanaujiya-a180093a5?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-3
            px-8
            py-4
            rounded-full
            border
            border-cyan-500
            hover:bg-cyan-500/10
            transition
            duration-300
            "
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/pradumang84"
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-3
            px-8
            py-4
            rounded-full
            border
            border-cyan-500
            hover:bg-cyan-500/10
            transition
            duration-300
            "
          >
            <FaGithub />
            GitHub
          </a>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;