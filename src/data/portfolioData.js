// Portfolio data
export const portfolioData = {
  name: "John Doe",
  title: "Full Stack Developer",
  email: "john@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  bio: "Passionate developer with 5+ years of experience building web applications. I love creating elegant solutions to complex problems.",
  
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "AWS",
  ],

  experience: [
    {
      id: 1,
      company: "Tech Company Inc",
      position: "Senior Developer",
      duration: "2021 - Present",
      description: "Lead development of full-stack applications, mentoring junior developers, and architecting scalable solutions.",
    },
    {
      id: 2,
      company: "StartUp Co",
      position: "Full Stack Developer",
      duration: "2019 - 2021",
      description: "Developed and maintained multiple web applications using React and Node.js, improving performance by 40%.",
    },
    {
      id: 3,
      company: "Web Agency",
      position: "Junior Developer",
      duration: "2017 - 2019",
      description: "Created responsive websites and web applications for various clients using modern web technologies.",
    },
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/johndoe/ecommerce",
      image: "/project-1.jpg",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      link: "https://github.com/johndoe/taskapp",
      image: "/project-2.jpg",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application displaying real-time weather data with geolocation and interactive charts.",
      technologies: ["React", "API Integration", "Chart.js"],
      link: "https://github.com/johndoe/weather",
      image: "/project-3.jpg",
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, categories, and comment system.",
      technologies: ["Next.js", "PostgreSQL", "Tailwind CSS"],
      link: "https://github.com/johndoe/blog",
      image: "/project-4.jpg",
    },
  ],

  education: [
    {
      id: 1,
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      year: "2017",
    },
    {
      id: 2,
      institution: "Online Coding Academy",
      degree: "Full Stack Web Development Certification",
      year: "2018",
    },
  ],

  social: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    email: "john@example.com",
  },
};
