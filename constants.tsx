import React from 'react';
import { Project, Skill, EducationItem, Tool } from './types';
import { Github, Figma, Code, Palette } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Fathima",
  title: "I Design & Build Websites That Stand Out",
  email: "mohammedfathima274@gmail.com",
  phone: "9061330255",
  linkedin: "https://www.linkedin.com/in/fathima-muhammed-b0a946290/",
  github: "https://github.com/Fathima274",
};

export const ABOUT_TEXT = "I’m a Computer Science student passionate about UI/UX design, web development, and creating simple, intuitive digital experiences. I enjoy learning new tools, solving problems, and building real-world projects that are visually appealing and user friendly.";

export const EDUCATION: EducationItem[] = [
  {
    degree: "Computer Science Engineering",
    period: "2023 - 2027",
    institution: "P.A. College Of Engineering",
  },
  {
    degree: "PUC",
    period: "2021 - 2023",
    institution: "Yenepoya PU College",
  },
];

export const SKILLS: Skill[] = [
  { name: "HTML", category: "hard" },
  { name: "CSS", category: "hard" },
  { name: "JavaScript", category: "hard" },
  { name: "React Basics", category: "hard" },
  { name: "Python Basics", category: "hard" },
  { name: "Git/GitHub", category: "hard" },
  { name: "Communication", category: "soft" },
  { name: "Teamwork", category: "soft" },
  { name: "Problem Solving", category: "soft" },
  { name: "Creativity", category: "soft" },
  { name: "Time Management", category: "soft" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "CareNexus",
    description: "smart healthcare assistant that helps users understand their symptoms and quickly find the right hospitals, doctors, and medical support.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Healthcare", "Web Application"],
    image: "carenexus.png",
  },
  {
    id: 2,
    title: "MediTracker",
    description: "MediTracker helps users track medicines, symptoms, and health records in one place.It keeps everything organized and easy to access.",
    tags: ["React Native", "Firebase", "UX Design","HTML","CSS"],
     image: "med.png",
  },
  {
    id: 3,
    title: "Cherry 'on' Top (Figma)",
    description: "A warm, donut-themed bakery hero section designed in Figma with a clean layout, bold typography, and an inviting CTA.",
    tags: ["Figma", "UI Design", "Landing Page"],
    image: "figma.png",

  },
];

export const TOOLS: Tool[] = [
  { name: "Figma", icon: <Figma className="w-8 h-8" /> },
  { name: "VS Code", icon: <Code className="w-8 h-8" /> },
  { name: "GitHub", icon: <Github className="w-8 h-8" /> },
  { name: "Canva", icon: <Palette className="w-8 h-8" /> },
];