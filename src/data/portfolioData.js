import {
  FaPython,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaBrain,
  FaServer,
} from "react-icons/fa";

import {
  SiMysql,
  SiStreamlit,
  SiOpencv,
  SiTailwindcss,
  SiVite,
  SiFramer,
  SiPytorch,
  SiTensorflow,
  SiFastapi,
  SiPandas,
} from "react-icons/si";

export const profile = {
  name: "Aditya Khare",
  logo: "AK",
  role: "Python Developer | Data Engineer | AI/ML Enthusiast | Web Developer",
  location: "India",
  email: "khareaditya0812@gmail.com",
  resumePath: "/resume.pdf",
  profileImage: "/profile.jpg",

  heroTitle: "Python Data AI Dev.",
  heroSubtitle:
    "I build intelligent, scalable, and user-focused digital solutions using Python, AI, data engineering, automation, and modern web technologies.",

  about:
    "I am a technology enthusiast focused on building real-world software systems, AI-powered applications, automation tools, data pipelines, and modern web applications. I enjoy solving practical problems and turning ideas into clean, scalable products.",

  currentlyLearning:
    "Currently improving my skills in advanced data engineering, AI applications, cloud deployment, backend APIs, and modern frontend animation.",

  socials: {
    github: "https://github.com/Adityakhare123",
    linkedin: "https://www.linkedin.com/in/adityakhare0812/",
    email: "mailto:khareaditya0812@gmail.com",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "04", label: "projects_loaded" },
  { value: "20+", label: "skills_indexed" },
  { value: "ON", label: "system_status" },
];

export const skills = [
  {
    category: "Programming",
    icon: FaPython,
    items: [
      { name: "Python", icon: FaPython },
      { name: "SQL", icon: FaDatabase },
      { name: "JavaScript", icon: FaJs },
      { name: "APIs", icon: FaServer },
    ],
  },
  {
    category: "AI / ML",
    icon: FaBrain,
    items: [
      { name: "Machine Learning", icon: FaBrain },
      { name: "OCR", icon: FaBrain },
      { name: "OpenCV", icon: SiOpencv },
      { name: "YOLOv8", icon: FaBrain },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
    ],
  },
  {
    category: "Data Engineering",
    icon: FaDatabase,
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "ETL", icon: FaDatabase },
      { name: "Pandas", icon: SiPandas },
      { name: "Data Cleaning", icon: FaDatabase },
      { name: "Database Loading", icon: FaDatabase },
      { name: "API Integration", icon: FaServer },
    ],
  },
  {
    category: "Web Development",
    icon: FaReact,
    items: [
      { name: "React", icon: FaReact },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },
  {
    category: "Tools",
    icon: FaGitAlt,
    items: [
      { name: "GitHub", icon: FaGithub },
      { name: "Streamlit", icon: SiStreamlit },
      { name: "Vite", icon: SiVite },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
];

export const projects = [
  {
    title: "AI Document Verification & Extraction System",
    description:
      "A production-style AI system that verifies and extracts data from documents using OCR, Python, Streamlit, MySQL, EasyOCR, Tesseract, PaddleOCR, OpenCV, and role-based admin review.",
    tech: ["Python", "Streamlit", "MySQL", "OCR", "OpenCV", "EasyOCR"],
    github: "https://github.com/Adityakhare123",
    live: "#",
    featured: true,
  },
  {
    title: "Cricket Bat Toe Detection using YOLOv8",
    description:
      "A computer vision project that detects cricket bats and bat toe regions using YOLOv8 and OpenCV for sports equipment analysis.",
    tech: ["Python", "YOLOv8", "OpenCV", "Computer Vision"],
    github: "https://github.com/Adityakhare123",
    live: "#",
    featured: true,
  },
  {
    title: "Data Pipeline / ETL Project",
    description:
      "A data engineering project involving Python, SQL, APIs, data cleaning, transformation, validation, and structured database loading.",
    tech: ["Python", "SQL", "APIs", "ETL", "Data Engineering"],
    github: "https://github.com/Adityakhare123",
    live: "#",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A terminal-inspired, responsive personal portfolio built using React, Vite, Tailwind CSS, and Framer Motion.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Adityakhare123",
    live: "#",
    featured: false,
  },
];

export const experience = [
  {
    title: "Data Engineering / Python Development",
    period: "Present",
    description:
      "Worked on data pipelines, API integrations, SQL-based transformations, automation scripts, and structured database workflows.",
  },
  {
    title: "AI / OCR Project Development",
    period: "Project Experience",
    description:
      "Built document extraction and verification workflows using OCR engines, OpenCV preprocessing, MySQL storage, and admin review logic.",
  },
  {
    title: "Computer Vision Development",
    period: "Project Experience",
    description:
      "Developed computer vision workflows using YOLOv8 and OpenCV for object detection and visual analysis use cases.",
  },
  {
    title: "Web Development Projects",
    period: "Project Experience",
    description:
      "Created responsive web applications and portfolio interfaces using React, JavaScript, Tailwind CSS, Vite, and modern frontend practices.",
  },
];

export const socialIcons = [
  { label: "GitHub", href: profile.socials.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: FaLinkedin },
  { label: "Email", href: profile.socials.email, icon: FaEnvelope },
];