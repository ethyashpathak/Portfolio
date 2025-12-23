import { useRef } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { Globe } from "../components/Globe.jsx";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks.jsx";

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  const grid2Container = useRef(null);

  return (
    <section className="c-space section-spacing" id="about">
      {/* Heading */}
      <motion.h2
        className="text-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* Grid container */}
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Grid 1 */}
        <motion.div className="flex items-end grid-default-color grid-1" variants={fadeUp}>
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt=""
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Shaswat Pathak!</p>
            <p className="subtext">
              Over the last few years, I’ve developed strong frontend and backend
              skills to build dynamic software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </motion.div>

        {/* Grid 2 */}
        <motion.div className="grid-default-color grid-2" variants={fadeUp}>
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>

            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="Competitive Programming" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="DBMS" containerRef={grid2Container} />
            <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="Development" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="DSA" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="Design" containerRef={grid2Container} />

            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="/assets/logos/C++ (CPlusPlus).png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="/assets/logos/React.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="/assets/logos/Node.js.png" containerRef={grid2Container} />
          </div>
        </motion.div>

        {/* Grid 3 */}
        <motion.div className="grid-black-color grid-3" variants={fadeUp}>
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Kolkata and open to remote work worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </motion.div>

        {/* Grid 4 */}
        <motion.div
          className="grid-special-color grid-4 relative bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/shaswat.jpg')" }}
          variants={fadeUp}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext text-white">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </motion.div>

        {/* Grid 5 */}
        <motion.div className="grid-default-color grid-5" variants={fadeUp}>
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I work with a wide range of languages, frameworks, and tools to
              build scalable applications — and I’m always learning more.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
