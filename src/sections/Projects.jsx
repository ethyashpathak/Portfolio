import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useMediaQuery } from "react-responsive";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Projects = () => {
  // Mouse-follow motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="projects"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.h2 className="relative text-heading hover:text-white
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-full after:bg-white
        after:scale-x-0 after:origin-left
        after:transition-transform after:duration-300
        hover:after:scale-x-31" variants={itemVariants}>
        My Selected Projects
      </motion.h2>

      {/* Divider */}
      <motion.div
        className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full"
        variants={itemVariants}
      />

      {/* Project list */}
      <motion.div className="mt-12" variants={containerVariants}>
        {myProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Project {...project} setPreview={setPreview} />
          </motion.div>
        ))}
      </motion.div>

      {/* Hover preview */}
      {!isMobile && preview && (
        <motion.img
          src={preview}
          className="fixed top-0 left-0 z-50 object-cover h-56 w-80 rounded-lg shadow-lg pointer-events-none"
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.section>
  );
};

export default Projects;
