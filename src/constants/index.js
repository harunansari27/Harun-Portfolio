import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from "../assets";

import tekisky from "../assets/company/tekisky.png";

export const navLinks = [
  
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    external: true,
    link: "/Harun Ansari 8052201243.pdf", // ✅ Clean file name, placed inside /public
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "GSAP", icon: gsap },
  { name: "Framer", icon: framer },
  { name: "Three JS", icon: threejs },
  { name: "Figma", icon: figma },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Material UI", icon: mui },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: express },
  { name: "AWS", icon: aws },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "Git", icon: git },
];

const experiences = [
  {
    title: "Java Trainee",
    company_name: "Astu Global Tech",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Sep 2022 - Jan 2023",
    points: [
      "Optimized inventory algorithms using Java 8 streams & multithreading, improving data speeds by 40%.",
      "Developed a modular MVC app with Spring DI/IoC, reducing redundancy by 35% through SOLID principles.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Astu Global Tech",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jul 2023 - Aug 2023",
    points: [
      "Built a full-stack e-commerce platform with Spring Boot microservices, React.js, and MySQL.",
      "Implemented JWT-based Spring Security, reducing unauthorized access by 60%.",
      "Used WebSocket for real-time inventory tracking and improved order accuracy by 45%.",
      "Boosted API performance by 55% with Hibernate caching and MySQL indexing.",
    ],
  },
  {
    title: "Virtual Intern - Software Engineering",
    company_name: "HPE (via Forage)",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jun 2025",
    points: [
      "Developed a Spring Boot RESTful web service for managing employee records.",
      "Handled HTTP requests and JSON uploads; tested performance with JUnit.",
    ],
  },
  {
    title: "Virtual Intern - Data Analytics",
    company_name: "Deloitte Australia (via Forage)",
    icon: tekisky,
    iconBg: "#383E56",
    date: "May 2025",
    points: [
      "Built Tableau dashboard to derive insights from raw business datasets.",
      "Used Excel for data classification and business recommendation generation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Harun is a quick learner with strong backend development skills. He built REST APIs using Spring Boot that were clean, efficient, and secure.",
    name: "Virtual Internship Reviewer",
    designation: "Manager",
    company: "HPE Simulation",
    image: firstTestimonial,
  },
  {
    testimonial:
      "He's consistent, dedicated, and always ready to take on new challenges. His IoT-based final year project was a smart and innovative solution.",
    name: "Sahina Anjum",
    designation: "Project Guide",
    company: "IEC College of Engineering & Technology",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Harun's problem-solving approach stands out. With 1200+ problems solved across platforms, his logic and code structure are top-notch.",
    name: "Gulfam Alam",
    designation: "Peer Reviewer",
    company: "Coding Community",
    image: thirdTestimonial,
  },
  {
    testimonial:
      "During the Deloitte job simulation, Harun demonstrated great attention to detail and delivered high-quality solutions aligned with business needs.",
    name: "Virtual Project Feedback",
    designation: "Employee",
    company: "Deloitte Simulation",
    image: secondTestimonial,
  },
];

const projects = [
  {
    name: "Real-Time Task Management Tool",
    description:
      "A Trello-like task management platform with live updates using WebSocket, JWT-based auth, and Redis caching. Deployed with Docker on AWS EC2 for 99.9% uptime.",
    tags: [
      { name: "spring boot", color: "green-text-gradient" },
      { name: "websocket", color: "blue-text-gradient" },
      { name: "redis", color: "pink-text-gradient" },
      { name: "aws", color: "white-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/harunansari27/task-manager",
  },
  {
    name: "Live E-Commerce Tracker",
    description:
      "Built a real-time order tracking system using Kafka, Spring Boot, MongoDB, and Redis. Handled 1000+ updates/sec with 40% faster response time.",
    tags: [
      { name: "spring boot", color: "green-text-gradient" },
      { name: "kafka", color: "orange-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "redis", color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/harunansari27/ecom-tracker",
  },
  {
    name: "Distributed E-Commerce Backend",
    description:
      "Scaled backend to support 10k+ users and 5k orders/sec using Kafka and Redis, deployed with Jenkins CI/CD on AWS EKS with 99.95% uptime.",
    tags: [
      { name: "spring boot", color: "green-text-gradient" },
      { name: "kafka", color: "orange-text-gradient" },
      { name: "aws eks", color: "white-text-gradient" },
      { name: "jenkins", color: "blue-text-gradient" },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/harunansari27/distributed-backend",
  },
  {
    name: "Job Posting Board with Email Automation",
    description:
      "Full-stack MERN app with secure JWT auth, session-based login, and automated email alerts using Nodemailer. Used for virtual job simulations.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "express", color: "white-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/harunansari27/job-board",
  },
  {
    name: "Smart Garbage Management System (IoT)",
    description:
      "IoT-based smart bin monitor using Arduino and SIM800L. Sends SMS alerts when bins are full and displays real-time levels on a web dashboard.",
    tags: [
      { name: "iot", color: "green-text-gradient" },
      { name: "arduino", color: "blue-text-gradient" },
      { name: "sim800l", color: "pink-text-gradient" },
      { name: "html/css", color: "white-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/harunansari27/garbage-system",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
