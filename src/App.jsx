import React, { useState } from "react";
import {
  User,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Phone,
  Github,
  Linkedin,
  Layers,
} from "lucide-react";

// === DATA STRUCTURE ===
const data = {
  header: {
    name: "Anuradha Lohar",
    title: "Full Stack Developer (MERN Stack)",
    location: "Kolhapur, Maharashtra",
    phone: "9579185713",
    email: "loharanuradha644@gmail.com",
    github: "https://github.com/AnuradhaLohar",
    linkedin: "https://www.linkedin.com/in/anuradhalohar/",
  },
  summary:
    "Motivated Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) with hands-on experience in REST API development, UI design, and deployment using GitHub and Vercel. Skilled in crafting responsive, user-friendly web applications with a focus on performance and clean code. Strong foundation in JavaScript (ES6+), OOP, debugging, and agile collaboration.",
  skills: {
    Frontend: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
    Backend: ["Node.js", "Express.js", "RESTful APIs"],
    Database: ["MongoDB", "MySQL"],
    Tools: ["Git/GitHub", "Netlify"],
    Other: ["C Programming", "OOP", "Debugging"],
  },
  experience: [
    {
      title: "Development Intern",
      company: "Revolution IT Solution",
      duration: "Jun 2024 - Oct 2024",
      details: [
        "Developed responsive web applications using React.js, HTML, CSS, and JavaScript.",
        "Built and integrated REST APIs using Node.js & Express.js.",
        "Debugged and optimized multiple modules, boosting performance by 25%.",
        "Collaborated in Agile teams to design and deliver scalable UI components.",
      ],
    },
  ],
  projects: [
    {
      name: "Todo List App (React)",
      date: "Mar 2025",
      description:
        "A task management app with add, edit, and delete features using React Hooks and Local Storage for persistence.",
      technologies: ["React Hooks", "Local Storage", "State Management"],
      demoLink: "https://anuradhalohar-todoapp.netlify.app/",
    },
    {
      name: "50+ Mini Projects",
      date: "Jul 2024 - Sep 2024",
      description:
        "A collection of small projects including calculators, games, and form validations to strengthen core logic and frontend skills.",
      technologies: ["JavaScript", "HTML", "CSS"],
      demoLink: "https://anuradhalohar.github.io/All_Projects/",
    },
  ],
  education: [
    {
      degree: "B. Tech (Information Technology)",
      institution: "Dr. JJ Magdum College of Engineering, Jaysingpur",
      year: "2021 - 2024",
    },
    {
      degree: "Diploma (Computer Science & Engineering)",
      institution: "DKTE's Yashwantrao Chavan Polytechnic, Ichalkaranji",
      year: "2017 - 2020",
    },
  ],
  certifications: [
    "MERN Stack Development - TechRel Institute (2024 - 2025)",
    "Web Development - Revolution IT Solution (2023)",
    "Innovating with ChatGPT - Mirasung Technologies (2023)",
  ],
};

// === REUSABLE COMPONENTS ===
const SectionTitle = ({ children, Icon }) => (
  <h2 className="text-3xl font-extrabold text-teal-400 mb-8 border-b-4 border-teal-600/50 pb-2 flex items-center">
    <Icon className="w-7 h-7 mr-3 text-teal-400" />
    {children}
  </h2>
);

const SocialLink = ({ href, Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-gray-400 hover:text-teal-400 transition duration-300 transform hover:scale-105"
  >
    <Icon className="w-5 h-5 mr-2" />
    <span className="text-sm font-medium">{label}</span>
  </a>
);

// === SECTIONS ===
const Hero = ({ header, summary }) => (
  <section
    id="home"
    className="py-24 md:py-36 min-h-screen flex items-center justify-center"
  >
    <div className="text-center max-w-4xl px-4">
      <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-4">
        {header.name}
      </h1>
      <p className="text-2xl md:text-4xl font-bold text-teal-400 mb-8 tracking-wide">
        {header.title}
      </p>
      <p className="text-lg md:text-xl text-gray-300 font-light mb-10 leading-relaxed bg-gray-800/70 p-6 rounded-xl shadow-lg border border-teal-800/50">
        {summary}
      </p>
      <div className="flex justify-center space-x-6">
        <SocialLink href={header.github} Icon={Github} label="GitHub" />
        <SocialLink href={header.linkedin} Icon={Linkedin} label="LinkedIn" />
      </div>
    </div>
  </section>
);

const Skills = ({ skills }) => (
  <section
    id="skills"
    className="py-20 md:py-28 px-4 bg-gray-900/50 rounded-xl shadow-2xl"
  >
    <SectionTitle Icon={Code}>Technical Skills</SectionTitle>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
      {Object.entries(skills).flatMap(([category, list]) =>
        list.map((skill, index) => (
          <div
            key={`${category}-${index}`}
            className="bg-gray-800 p-4 rounded-lg text-center shadow-lg transition duration-300 hover:bg-teal-900/40 hover:scale-105 transform cursor-default border border-gray-700"
          >
            <p className="text-white font-medium text-sm md:text-base">
              {skill}
            </p>
            <p className="text-teal-400 text-xs mt-1 opacity-75">{category}</p>
          </div>
        ))
      )}
    </div>
  </section>
);

const Experience = ({ experience }) => (
  <section
    id="experience"
    className="py-20 md:py-28 px-4 bg-gray-900/50 rounded-xl shadow-2xl"
  >
    <SectionTitle Icon={Briefcase}>Experience</SectionTitle>
    {experience.map((exp, index) => (
      <div key={index} className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
        <p className="text-teal-400">{exp.company}</p>
        <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
        <ul className="list-disc ml-6 text-gray-300 space-y-1">
          {exp.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

const Projects = ({ projects }) => (
  <section
    id="projects"
    className="py-20 md:py-28 px-4 bg-gray-900/50 rounded-xl shadow-2xl"
  >
    <SectionTitle Icon={Layers}>Projects</SectionTitle>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 border border-gray-700"
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            {project.name}
          </h3>
          <p className="text-gray-400 text-sm mb-3">{project.date}</p>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-teal-700/40 text-teal-300 text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            View Demo →
          </a>
        </div>
      ))}
    </div>
  </section>
);

const Education = ({ education }) => (
  <section
    id="education"
    className="py-20 md:py-28 px-4 bg-gray-900/50 rounded-xl shadow-2xl"
  >
    <SectionTitle Icon={GraduationCap}>Education</SectionTitle>
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
          <p className="text-teal-400">{edu.institution}</p>
          <p className="text-gray-400 text-sm">{edu.year}</p>
        </div>
      ))}
    </div>
  </section>
);

const Certifications = ({ certifications }) => (
  <section
    id="certifications"
    className="py-20 md:py-28 px-4 bg-gray-900/50 rounded-xl shadow-2xl"
  >
    <SectionTitle Icon={Award}>Certifications</SectionTitle>
    <ul className="space-y-3 text-gray-300">
      {certifications.map((cert, index) => (
        <li
          key={index}
          className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:bg-teal-900/40 transition duration-300"
        >
          {cert}
        </li>
      ))}
    </ul>
  </section>
);

const Contact = ({ header }) => (
  <section
    id="contact"
    className="py-20 md:py-28 px-4 bg-gray-900/50 rounded-xl shadow-2xl"
  >
    <SectionTitle Icon={Mail}>Get In Touch</SectionTitle>
    <p className="text-center text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
      I'm currently open to new opportunities and collaboration. Feel free to
      reach out!
    </p>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-xl mx-auto">
      <a
        href={`mailto:${header.email}`}
        className="w-full md:w-auto flex items-center justify-center px-8 py-4 border-2 border-teal-500 text-lg font-semibold rounded-lg text-white bg-teal-600/20 hover:bg-teal-600 hover:text-gray-900 transition duration-300 shadow-lg shadow-teal-500/30"
      >
        <Mail className="w-5 h-5 mr-2" /> loharanuradha644@gmail.com
      </a>
      <a
        href={`tel:${header.phone}`}
        className="w-full md:w-auto flex items-center justify-center px-8 py-4 border-2 border-gray-500 text-lg font-semibold rounded-lg text-gray-300 hover:border-white transition duration-300"
      >
        <Phone className="w-5 h-5 mr-2" /> {header.phone}
      </a>
    </div>
  </section>
);

// === MAIN APP ===
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    "home",
    "skills",
    "experience",
    "projects",
    "education",
    "certifications",
    "contact",
  ];

  return (
    <div className="min-h-screen bg-gray-900 font-[Inter] text-gray-500">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm shadow-xl">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="text-xl font-extrabold text-white">
            <span className="text-teal-400">&lt;</span>Anuradha
            <span className="text-teal-400">/&gt;</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white text-sm font-medium capitalize"
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden px-2 pb-3 space-y-2 bg-gray-900">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Sections */}
      <main className="max-w-7xl mx-auto pt-16 space-y-16">
        <Hero header={data.header} summary={data.summary} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Education education={data.education} />
        <Certifications certifications={data.certifications} />
        <Contact header={data.header} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-950/70 border-t border-teal-800/50 mt-12 py-6 text-center text-sm text-gray-500">
        Designed & Built by{" "}
        <span className="text-teal-400">{data.header.name}</span>
      </footer>
    </div>
  );
};

export default App;
