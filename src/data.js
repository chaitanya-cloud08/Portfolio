// src/data.js
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

export const personalInfo = {
  name: "Chaitanya Behl",
  tagline: "Tech Student • Product Enthusiast",
  intro: "I build and design user-centric digital products, bridging the gap between engineering and user needs.",
  profilePicture: "/me.jpg", 
  resumeUrl: "/Chaitanya.resume.pdf", 
  contact: {
    email: "chaitanyabehlforwork@gmail.com",
    github: "https://github.com/chaitanya-cloud08",
    linkedin: "https://www.linkedin.com/in/chaitanya-behl-831932294/",
    Medium :  "https://medium.com/@chaitanyabehlforwork",
  },
};

export const socialLinks = [
  { name: 'Email', url: `mailto:${personalInfo.contact.email}`, icon: Mail },
  { name: 'GitHub', url: personalInfo.contact.github, icon: Github },
  { name: 'LinkedIn', url: personalInfo.contact.linkedin, icon: Linkedin },
  { name: 'Medium', url: personalInfo.contact.Medium, icon: Globe },
];

export const skills = {
  tech: ["React", "JavaScript (ES6+)", "Node.js", "Python", "HTML5 & CSS3", "Tailwind CSS", "Git", "SQL", "Express", "Bootstrap", "PHP", "JQuery", "C", "C++"],
  product: ["Figma", "Notion", "Jira", "AppsFlyer", "GA-4", "User Research", "Agile Methodologies", "A/B Testing", "Excel", "Jenkins","Draw.io","Competitor Analysis"],
};

export const projects = [
  {
    title: "VisionFlow",
    description: "A Productivity oriented website designed to help users stay organized, set goals, and manage time effectively.",
    stack: ["React", "TailwindCSS", "FullCalendarAPI", "Local Storage"],
    links: {
      github: "https://github.com/chaitanya-cloud08/VisionFlow",
      live: "https://vision-flow-theta.vercel.app/",
    },
    category: 'Development'
  },
//   {
//     title: "Product Teardown: Spotify (Product)",
//     description: "A case study on Spotify's Discover Weekly feature, analyzing its UX and proposing enhancements.",
//     stack: ["Figma", "User Journey Mapping"],
//     links: {
//       github: null, // No code for case studies
//       live: "https://your-notion-or-medium-link.com",
//     },
//     category: 'Product'
//   },
  {
    title: "InPhase",
    description: "A minimal, user-friendly web app that empowers women with PCOD to track symptoms, understand hormones, and get personalized wellness tips.",
    stack: ["React", "Local Storage", "Charts.js", "TailwindCSS"],
    links: {
      github: "https://github.com/chaitanya-cloud08/InPhase",
      live: "https://in-phase.vercel.app/",
    },
    category: 'Development'
  },
  {
    title: "DuetLingo",
    description: "A Chrome extension that allows you to instantly swap languages on any website, making content more accessible and enjoyable for users.",
    stack: ["Chrome Extension", "Google Translate API", "Manifest V3", "TailwindCSS"],
    links: {
      github: "https://github.com/chaitanya-cloud08/DuetLingo",
      live: null,
    },
    category: 'Development'
  },
 {
    title: "MedAccess",
    description: "a healthcare appointment system, enabling patients to book appointments, view past records, and manage bookings securely.",
    stack: ["EJS", "MySQL", "NodeJs", "TailwindCSS"],
    links: {
      github: "https://github.com/chaitanya-cloud08/MedAccess",
      live: null,
    },
    category: 'Development'
  },
];

export const experience = [
  {
    role: "Product Management Intern",
    company: "Times Internet",
    duration: "April 2025 - Present",
    description: "I interned in Product Management at Times Internet, where I worked with the Language Apps team on multiple high-impact projects. My work included the Newspoint UX revamp, NBT Games integration, Activity Bar implementation, and strategies to improve WTA installs. I collaborated closely with design, tech, and growth teams to map user journeys, write UX copy, and plan features. Along the way, I received feedback to slow down and focus more on analysis, which helped me develop a more thoughtful approach to problem-solving. The internship gave me hands-on experience in building user-focused features and understanding how product decisions are made at scale.",
  },

];

export const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "GGSIPU",
    duration: "2022 - 2026",
    description: "Relevant Coursework: Data Structures, Algorithms, Artificial Intelligence, DBMS, OOPS, Java, Software Engineering."
  }, 
  {
    degree: "Xth and XIIth",
    institution: "Sumermal Jain Public School",
    duration: "2020-2022",
    //description: "Relevant Coursework: Data Structures, Algorithms, Human-Computer Interaction, Software Engineering."
  }, 
]