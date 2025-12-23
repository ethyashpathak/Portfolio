import { useState } from "react";
import { motion } from "motion/react";

/* ---------------- Navigation Links ---------------- */
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
    <a
      href="#hero"
      className="relative nav-link text-neutral-400 transition-colors hover:text-white
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-full after:bg-white
        after:scale-x-0 after:origin-left
        after:transition-transform after:duration-300
        hover:after:scale-x-100"
    >
      Home
    </a>
  </li>

  <li className="nav-li">
    <a className="relative nav-link text-neutral-400 transition-colors hover:text-white
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-full after:bg-white
        after:scale-x-0 after:origin-left
        after:transition-transform after:duration-300
        hover:after:scale-x-100" href="#about">About</a>
  </li>

  <li className="nav-li">
    <a className="relative nav-link text-neutral-400 transition-colors hover:text-white
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-full after:bg-white
        after:scale-x-0 after:origin-left
        after:transition-transform after:duration-300
        hover:after:scale-x-100" href="#projects">Work</a>
  </li>

  <li className="nav-li">
    <a className="relative nav-link text-neutral-400 transition-colors hover:text-white
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-full after:bg-white
        after:scale-x-0 after:origin-left
        after:transition-transform after:duration-300
        hover:after:scale-x-100" href="#contact">Contact</a>
  </li>

      {/* Resume link for MOBILE */}
      <li className="nav-li sm:hidden">
        <a
          href="https://drive.google.com/file/d/1-On59Sf8Z5HY1tVYnrWQNZ5Ar8MshGgI/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

/* ---------------- Navbar ---------------- */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">

          {/* LEFT: Name + Resume */}
          <div className="flex items-center gap-10">
            <a
              href="/"
            className="relative text-xl font-bold text-neutral-400 transition-colors hover:text-white
               after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
               after:scale-x-0 after:bg-white after:origin-left
               after:transition-transform after:duration-300
               hover:after:scale-x-100"
            >
              Shaswat
            </a>

            {/* Resume (Desktop) */}
            <a
              href="https://drive.google.com/file/d/1-On59Sf8Z5HY1tVYnrWQNZ5Ar8MshGgI/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center rounded-md border border-neutral-500 px-3 py-1 text-sm text-neutral-300 transition hover:border-white hover:text-white"
            >
             My Resume
            </a>
          </div>

          {/* RIGHT: Menu + Nav */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                className="w-6 h-6"
                alt="toggle"
              />
            </button>

            <nav className="hidden sm:flex">
              <Navigation />
            </nav>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
