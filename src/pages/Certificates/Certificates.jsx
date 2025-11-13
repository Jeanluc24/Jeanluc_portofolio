import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const certficate = [
  {
    title: "Certificate of completion in Full-Stack Software Engineering  💻",
    description:
      "Completed an intensive Full-Stack Software Engineering program covering HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Developed multiple projects demonstrating proficiency in both frontend and backend development.",
    src: "water.jpg",
    link: "https://i.postimg.cc/50Hsf8Yw/Certificate-of-Completion-in-Full-stack-software-engineering.jpg",
    color: "#f4f6f7ff",
  },
  {
    title: "Certificate of completion in AI-Augmented Professional Skills 🤖",
    description:
      "Completed a comprehensive course on AI-Augmented Professional Skills, focusing on leveraging AI tools to enhance productivity, communication, and problem-solving in the workplace. Gained practical experience in integrating AI solutions into daily professional tasks.",
    src: "rock.jpg",
    link: "https://i.postimg.cc/0QjMKf9v/Certificate-of-Completion-in-Ai-Augmented-Professional-Skills.jpg",
    color: "#0357ffff",
  },
  {
    title: "Certificate of completion in Virtual Assistant Assistance Skills 🧑‍💼",
    description:
      "Successfully completed a course in Virtual Assistant Assistance Skills, acquiring expertise in managing administrative tasks, scheduling, communication, and utilizing virtual assistant technologies to support business operations effectively.",
    src: "tree.jpg",
    link: "https://i.postimg.cc/Dwz8M6bL/Certificate-of-Completion-in-Virtual-Assistant.jpg",
    color: "#12bb06ff",
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % certficate.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + certficate.length) % certficate.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  return (
    <main className="bg-black min-h-screen">
      <section className="text-white w-full bg-slate-950 min-h-screen flex flex-col">
        {/* Project Display Area */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] relative">
            <AnimatePresence mode="wait">
              <Card
                key={currentProject}
                project={certficate[currentProject]}
                projectIndex={currentProject}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="pb-4 md:pb-8">
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-3 md:gap-8 px-4">
            {/* Previous Button */}
            <motion.button
              onClick={prevProject}
              className="group relative flex items-center gap-2 md:gap-3 px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-black to-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              disabled={certficate.length <= 1}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                className="relative z-10 flex items-center gap-2 md:gap-3"
                whileHover={{ x: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span className="text-white font-semibold text-sm md:text-lg">Prev</span>
              </motion.div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 rounded-full transition-opacity duration-150" />
            </motion.button>

            {/* Project Counter */}
            <div className="flex flex-col items-center gap-1 md:gap-2 px-3 md:px-6">
              <div className="text-gray-400 text-xs md:text-sm font-medium">Certificate</div>
              <div className="text-white text-lg md:text-xl font-bold">
                {currentProject + 1} / {certficate.length}
              </div>
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextProject}
              className="group relative flex items-center gap-2 md:gap-3 px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              disabled={certficate.length <= 1}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                className="relative z-10 flex items-center gap-2 md:gap-3"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-white font-semibold text-sm md:text-lg">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 rounded-full transition-opacity duration-150" />
            </motion.button>
          </div>

          {/* Mobile Dot Indicators (optional alternative navigation) */}
          <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
            {certficate.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'bg-white scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({ project, projectIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.4, 0, 0.2, 1],
        scale: { duration: 0.3 }
      }}
      className="w-full"
    >
      <motion.div
        className="w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-xl"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[80%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden bg-zinc-800">
            <motion.img
              src={project.link}
              alt={project.title}
              className="w-full h-full object-contain"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: project.color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <motion.div
              className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Certificate {projectIndex + 1}
            </motion.div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <motion.div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: project.color }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
                />
                <motion.div 
                  className="h-[1px] bg-gray-600"
                  initial={{ width: 0 }}
                  animate={{ width: "3rem" }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                />
              </div>

              <motion.h2 
                className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {project.title}
              </motion.h2>
              <motion.p 
                className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {project.description}
              </motion.p>
            </motion.div>

            <motion.div 
              className="mt-4 md:mt-auto pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={project.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color: project.color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={project.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color: project.color }}
                  >
                    Live
                  </span>
                </motion.a>
                </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
  }).isRequired,
  projectIndex: PropTypes.number.isRequired,
};