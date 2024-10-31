import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am an Informatics Engineering student with a strong passion for web development, continuously driven to expand my skills and stay up-to-date with the latest technologies. Known for being productive, optimistic, and humble, I thrive in collaborative environments and enjoy tackling challenges with a positive attitude. I bring a detail-oriented mindset and a proactive approach to my work, aiming to build seamless, user-friendly applications. With a commitment to lifelong learning, I am excited to contribute to impactful projects and grow alongside a dynamic team.`;

export const ABOUT_TEXT = `I am an Informatics Engineering student with a strong passion for web development, continuously driven to expand my skills and stay up-to-date with the latest technologies. Known for being productive, optimistic, and humble, I thrive in collaborative environments and enjoy tackling challenges with a positive attitude. I bring a detail-oriented mindset and a proactive approach to my work, aiming to build seamless, user-friendly applications. With a commitment to lifelong learning, I am excited to contribute to impactful projects and grow alongside a dynamic team.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Web Developer",
    company: "PT. Kurnia Ciptamoda Gemilang",
    description: `Designed and developed user interfaces for web application using Angular.`,
    technologies: ["Angular", "Typescript", "Tailwindcss"],
  },
  {
    year: "2024 - 2024",
    role: "IT Application Officer - Software Developer",
    company: "PT. Trans Retail Indonesia",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React.js", "Vite.js", "Node.js", "mySQL"],
  },
  {
    year: "2021 - 2023",
    role: "IT",
    company: "Teras Rumah Nenek",
    description: `Created website for our company www.terasrumahnenek.com
Managed full network on our company include WiFi, Website, and device for operational Managed all CCTV
`,
    technologies: ["Wordpress", "CCTV", "Winbox"],
  },
  {
    year: "2020 - 2023",
    role: "Digital Marketing",
    company: "Teras Rumah Nenek",
    description: `Collaborated with 2 other team members to run the community’s Instagram account.
Assisted Social Media Team Leader to create a content plan and ads strategy resulted in 20.000++ Followers.
Managed all social media include Instagram, Facebook, and TikTok Making social media ads with Ads manager Facebook Benchmarking and analyzing competitor social media strategy
`,
    technologies: ["Instagram", "Facebook", "Facebook Ads", "Tiktok"],
  },
];

export const PROJECTS = [
  {
    title: "SPS Website",
    image: project1,
    description: `I developed a company profile website for PT. Setia Primatamas Semesta, complete with an admin dashboard to facilitate updates on the site, such as managing products, clients, and other essential information. You can view the site at https://setiaprimastamas.com`,
    technologies: ["Laravel", "Tailwindcss", "Mysql", "Vite.js", "PHP"],
  },
  {
    title: "Teras Rumah Nenek Website",
    image: project2,
    description:
      "I created terasrumahnenek.com as a WordPress-based website for a cafe, designed to list events and provide essential information such as menu options, pricing, and wedding package details.",
    technologies: ["Wordpress"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Vite.js", "Tailwindcss", "React"],
  },
  {
    title: "Faktur Pajak Website",
    image: project4,
    description:
      "I developed a website for PT. Trans Retail Indonesia on behalf of Transmart to streamline the company's tax invoice requests. The site provides an efficient platform for managing and tracking invoice requests tailored to meet Transmart’s operational needs. You can access it here: fakturpajak.transmart.co.id.",
    technologies: [
      "React",
      "Tailwindcss",
      "Vite.js",
      "Express",
      "mySQL",
      "Oracle",
    ],
  },
];

export const CONTACT = {
  address: "West Jakarta, Indonesia",
  phoneNo: "+62 81804040684",
  email: "syahbudin45@gmail.com",
};
