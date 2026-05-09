// importing the owner's photo for use in the portfolio
import myPhoto from "../assets/photo.jpg";
// Centralized data for the portfolio website
export const OWNER = {
  name: "Waseem Sajjad",
  initials: "WS",
  tagline: "Full Stack Web Developer — building with the MERN Stack.",
  bio: "I'm a Full Stack Web Developer from Pakistan with 1 year of experience building real-world applications using the MERN Stack (MongoDB, Express.js, React, Node.js). I craft complete solutions — from responsive frontends in React to robust REST APIs in Node/Express and scalable MongoDB databases.",
  location: "Pakistan 🇵🇰",
  email: "waseem2gk@gmail.com",
  github: "https://github.com/Waseem78612",

  photo: myPhoto,
  phone: "+923239958485",
  whatsapp: "+923219378212",
};
// Titles for the typing animation on the homepage
export const TYPING_TITLES = [
  "Full Stack Web Developer",
  "MERN Stack Developer",
  "React & Node.js Developer",
  "Open to Opportunities 🚀",
];

// React Router paths
export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];
// Skills data with icons, colors, proficiency levels, and descriptions
export const SKILLS = [
  { id: "mongodb", name: "MongoDB", icon: "🍃", color: "#47A248", level: 75, tag: "Designing schemas, CRUD operations, and integrating with Mongoose ORM." },
  { id: "express", name: "Express.js", icon: "🚂", color: "#FFFFFF", level: 78, tag: "Building RESTful APIs, middleware, routing, and server-side logic." },
  { id: "react", name: "React", icon: "⚛️", color: "#61DAFB", level: 82, tag: "Building dynamic UIs with hooks, state management, and React Router v6." },
  { id: "node", name: "Node.js", icon: "🟢", color: "#68A063", level: 78, tag: "Server-side JavaScript — event loop, async/await, REST APIs, and npm." },
  { id: "js", name: "JavaScript", icon: "✨", color: "#F7DF1E", level: 85, tag: "ES6+, async/await, DOM manipulation, array methods, and OOP patterns." },
  { id: "html", name: "HTML5", icon: "🌐", color: "#E34F26", level: 90, tag: "Semantic, accessible, well-structured markup for modern web pages." },
  { id: "css", name: "CSS3", icon: "🎨", color: "#1572B6", level: 85, tag: "Responsive layouts with Flexbox, Grid, animations and media queries." },
  { id: "tailwind", name: "Tailwind CSS", icon: "💨", color: "#38BDF8", level: 82, tag: "Rapid UI development using utility-first classes and custom theming." },
  { id: "bootstrap", name: "Bootstrap", icon: "⚡", color: "#7952B3", level: 80, tag: "Prototyping and building UIs quickly with Bootstrap's component system." },
  { id: "git", name: "Git & GitHub", icon: "🐙", color: "#F05032", level: 78, tag: "Version control, branching, pull requests, and collaborative workflows." },
];
// Projects data with descriptions, technologies used, and links to GitHub and live demos
export const PROJECTS = [
  {
    id: "react-router",
    title: "React Router App",
    description: "A multi-page React app built while learning client-side routing with React Router v6. Clean navigation, dynamic routes, the works.",
    tech: ["React", "React Router", "CSS"],
    accent: "#A78BFA",
    emoji: "🗺️",
    github: "https://github.com/Waseem78612/react-router",
    live: "https://react-router-es0.pages.dev/",
  },
  {
    id: "dom-with-ref",
    title: "DOM with useRef",
    description: "Hands-on project exploring React's useRef hook — manipulating the DOM directly without triggering unnecessary re-renders.",
    tech: ["React", "useRef", "Hooks"],
    accent: "#818CF8",
    emoji: "🎯",
    github: "https://github.com/Waseem78612/manipulating-dom-with-useref",
    live: "https://manipulating-dom-with-ref.pages.dev/",
  },
  {
    id: "updating-arrays",
    title: "Updating Arrays in State",
    description: "A focused React project practicing immutable array updates in state — adding, removing, and editing items the React way.",
    tech: ["React", "useState", "Immutability"],
    accent: "#67E8F9",
    emoji: "📋",
    github: "https://github.com/Waseem78612/updating-arrays",
    live: "https://updating-arrays.pages.dev/",
  },
];
// Stats for the homepage or about section
export const STATS = [
  { value: "1+", label: "Year Experience" },
  { value: "3", label: "Live Projects" },
  { value: "10", label: "Tech Skills" },
];
// Tags for the about section to highlight key skills and attributes
export const ABOUT_TAGS = [
  "⚛️ React Developer",
  "🟢 Node.js Developer",
  "🍃 MongoDB",
  "🚂 Express.js",
  "🔥 MERN Stack",
  "🤝 Team Player",
  "🇵🇰 From Pakistan",
];
// A favorite quote to display on the portfolio, perhaps in the about section or as a personal motto
export const FAVORITE_QUOTE = {
  text: "First, solve the problem. Then, write the code.",
  author: "John Johnson",
};
