const portfolioContent = {
  logoName: "Ikhsan",
  hero: {
    greeting: "Hi, I'm",
    name: "Ikhsanul Ahnaf Fauzan",
    firstName: "IKHSAN",
    title: "Software Engineer & System Analyst",
    description: "A Software Engineer & System Analyst dedicated to crafting seamless digital experiences that bridge the gap between user needs and business growth.",
    resumeLink: "",
    typingTexts: [
      "Driven by curiosity, powered by code.",
      "Analyze. Code. Optimize.",
      "Shaping code into meaningful user journeys."
    ]
  },
  about: {
    title: "About Me",
    textParagraphs: [
      "I'm a fresh graduate in Information Systems with hands-on experience in {software engineering and system analysis}. I bridge the gap between user requirements and technical execution by utilizing UML modeling, database design, and structured system analysis. Combined with strong technical skills in PHP/Laravel, Tailwind CSS, JavaScript, and MySQL. I love analyzing complex business processes and transforming them into scalable, web-based applications.",
      "Beyond my main projects, I dedicate my time to learning new tech stacks, building hands-on side projects, and staying informed about current industry trends."
    ],
    stats: [
      { value: "2", label: "Projects Completed" },
      { value: "10k+", label: "Lines of Code" },
      { value: "2", label: "Github Repositories" }
    ]
  },
  skills: {
    title: "Skills",
    description: "Languages, libraries, frameworks, and tools I've used & learn.",
    list: [
      { name: "Laravel",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "React",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Python",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "HTML5",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Node.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "VS Code",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Diagram.net", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Diagrams.net_Logo.svg" },
    ]
  },
  projects: {
    title: "My Projects",
    subtitle: "Some of the systems and applications I've built",
    list: [
      {
        title: "E-letter ITI",
        date: "January 2026",
        description: "A web app to help all members of the academic community to manage, track, follow up and archiving letters at ITI. Designed the system architecture using UML diagrams before developing the backend with laravel",
        liveLink: "",
        githubLink: "https://github.com/ikhsanulahnaf/E-letter-ITI",
        tags: ["Laravel", "Tailwind Css", "MySQL"],
        previewImage: "/e-letter.jpeg"
      },
      {
        title: "Shelbys Company (GIS App Final Project)",
        date: "December 2024",
        description: "A web app to help users finds coffee shop in West Jakarta area with accurated location mapping using GeoJSON data processed through QGIS.",
        liveLink: "",
        githubLink: "https://github.com/ikhsanulahnaf/Shelbys-Company",
        tags: ["Laravel", "CodeIgniter", "QGIS"],
        previewImage: "Shelbys.jpeg"
      },
    ]
  },
  contact: {
    title: "Let's Connect",
    description: "Feel free to reach out!",
    email: "Ikhsanulahnaf32@gmail.com",
    phone: "+62 819 5948 2002",
    whatsappLink: "https://wa.me/6281959482002",
    githubUrl: "https://github.com/ikhsanulahnaf",
    linkedinUrl: "https://www.linkedin.com/in/ikhsanulahnaf/"
  }
};

export default portfolioContent;
