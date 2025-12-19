export const myProjects = [
  {
    id: 1,
    title: "CivicFix",
    description:
      "A full-stack civic engagement platform that allows citizens to report public issues with media and GPS evidence.",
    subDescription: [
      "Built a cross-platform mobile app using React Native and Node.js.",
      "Handled large-scale media uploads (images, videos, audio) using Cloudinary.",
      "Implemented multi-role authentication (Citizen, Department, Authority) using JWT.",
      "Designed a real-time analytics dashboard with Mapbox for geographic insights.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/CivicFix.png",
    tags: [
      { id: 1, name: "React Native" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Mapbox" },
      { id: 5, name: "JWT" },
    ],
  },

  {
    id: 2,
    title: "ViroNex",
    description:
      "A secure video streaming platform supporting video upload, playback, and management.",
    subDescription: [
      "Developed using React, Node.js, Express, and MongoDB.",
      "Implemented JWT-based authentication and protected routes.",
      "Optimized MongoDB aggregation pipelines to improve API performance.",
      "Designed a responsive UI using Tailwind CSS.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Vironex.png",
    tags: [
      { id: 1, name: "react" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "JWT" },
    ],
  },

  {
    id: 3,
    title: "BlogApp",
    description:
      "A full-stack blogging platform with authentication, rich-text editing, and media uploads.",
    subDescription: [
      "Built using React, Appwrite, and Redux Toolkit.",
      "Integrated image uploads and rich-text editor.",
      "Implemented global state management using Redux Toolkit.",
      "Added dark/light mode with responsive design using Tailwind CSS.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Blogapp.png",
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "Appwrite" },
      { id: 3, name: "Redux Toolkit" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
];

// =========================
// SOCIAL LINKS
// =========================
export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ethyashpathak",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/ethyashpathak",
    icon: "/assets/socials/github.svg",
  },
];

// =========================
// EXPERIENCE (STUDENT / FRESHER SAFE)
// =========================
export const experiences = [
  {
    title: "B.Tech Student",
    job: "Computer Science & Engineering",
    date: "2023 – 2027 (Expected)",
    contents: [
      "Pursuing B.Tech in Computer Science and Engineering at Techno India University.",
      "Strong focus on full-stack web development and problem-solving.",
      "Solved 250+ DSA problems across multiple platforms.",
      "Built production-grade projects using modern web technologies.",
    ],
  },
  {
    title: "Core Member & Coordinator",
    job: "University Music Club",
    date: "2023 – Present",
    contents: [
      "Coordinated and organized large-scale university events including Sahotsava’24.",
      "Led teams and handled logistics for cultural and technical programs.",
    ],
  },
  {
    title: "Member",
    job: "Google Developer Groups (GDG) On Campus",
    date: "2024 – Present",
    contents: [
      "Participated in developer meetups, workshops, and technical sessions.",
      "Engaged with peers to learn and share modern development practices.",
    ],
  },
];
