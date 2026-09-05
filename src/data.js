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
    title: "Raah Sakhi",
    description: "A women-centric micro-mobility and safety platform for Delhi, addressing last-mile mobility, safety and accessibility challenges through a technology-driven solution. I designed and developed the MVP, implementing core product flows and functionality while simultaneously owning the product strategy, UX and technical execution from problem discovery through prototype development.",
    stack: ["Flutter", "Dart", "Firebase", "Google Maps API", "Figma"],
    links: {
      github: "https://github.com/chaitanya-cloud08/raah-sakhi.git",
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
    role: "Product Consultant",
    company: "Times Internet",
    duration: "Mar 2026 - Present",
    description: "• Led Regional App Product & Growth: Served as the primary Product SPOC for 6+ regional-language apps while also owning the 0→1 product launch of Quickie by NBT, a Gen-Z focused digital news platform, driving product strategy, distribution, acquisition, engagement and monetization initiatives end-to-end, from feature planning and launch execution to experimentation and performance analysis.\n• Scaled Web-to-app Acquisition: Drove WTA and app acquisition initiatives across MWeb, AMP and app surfaces, optimizing floating CTAs, bottom-navigation placements, App Exclusive nudges and deep-link journeys using GA4, Singular. WTA + organic channels contributed ~30% of total MAU, while App Exclusive initiatives delivered 35% D1 retention and around 14-minute average session duration, strengthening app acquisition and engagement.\n• Drove Data-Led Growth and Monetization Initiatives: Led experimentation across WTA placements, notification strategy, promotional nudges, ASO and advertising infrastructure, using product analytics to drive portfolio-level decisions. Contributed to ~25% growth in monthly app revenue, while coordinating execution across Product, Engineering, Analytics, Editorial and external partners.",
  },
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
  }, 
]