import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import cert1 from "../assets/cert/bootcamp.pdf";
import cert2 from "../assets/cert/bwaWeb.pdf";
import cert3 from "../assets/cert/Transretail.pdf";

export const HERO_CONTENT = `I am a fourth-year Informatics Engineering student at Universitas Gunadarma, currently holding a GPA of 3.8. With a strong passion for web development, I am continuously driven to expand my skills and stay up-to-date with the latest technologies. Known for being productive, optimistic, and humble, I thrive in collaborative environments and enjoy tackling challenges with a positive attitude. I bring a detail-oriented mindset and a proactive approach to my work, aiming to build seamless, user-friendly applications. With a commitment to lifelong learning, I am excited to contribute to impactful projects and grow alongside a dynamic team.`;

export const ABOUT_TEXT = `I am an Informatics Engineering student with a strong passion for web development, continuously driven to expand my skills and stay up-to-date with the latest technologies. Known for being productive, optimistic, and humble, I thrive in collaborative environments and enjoy tackling challenges with a positive attitude. I bring a detail-oriented mindset and a proactive approach to my work, aiming to build seamless, user-friendly applications. With a commitment to lifelong learning, I am excited to contribute to impactful projects and grow alongside a dynamic team.`;

export const EXPERIENCES = [
  {
    year: "Sep 2024 - Des 2024",
    role: "Web Developer",
    company: "PT. Kurnia Ciptamoda Gemilang",
    description: `Successfully migrated the KCG System to a web-based application while designing and developing company profile websites for ptkcg.co.id and kcn.ptkcg.co.id. Actively participated in weekly team meetings to discuss project progress and collaborated closely with the mentor to assist in various website management and development tasks.`,
    technologies: ["Angular", "Typescript", "Tailwindcss", "Wordpress"],
  },
  {
    year: "Feb 2024 - Jun 2024",
    role: "IT Application Officer - Software Developer",
    company: "PT. Trans Retail Indonesia",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React.js", "Vite.js", "Node.js", "mySQL"],
  },
  {
    year: "Jan 2021 - Oct 2023",
    role: "IT",
    company: "Teras Rumah Nenek",
    description: `Created website for our company www.terasrumahnenek.com
Managed full network on our company include WiFi, Website, and device for operational Managed all CCTV
`,
    technologies: ["Wordpress", "CCTV", "Winbox"],
  },
  {
    year: "Apr 2020 - Oct 2023",
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
    title: "Elevasi Contractor Website",
    image: project4,
    description: `I developed a company profile website for Elevasi Contractor, showcasing the company's services, projects, and essential information to strengthen its online presence.
`,
    technologies: ["React", "Tailwindcss", "Vite.js"],
    link: "https://elevasi.vercel.app",
  },
  {
    title: "SPS Website",
    image: project1,
    description: `I developed a company profile website for PT. Setia Primatamas Semesta, complete with an admin dashboard to facilitate updates on the site, such as managing products, clients, and other essential information.`,
    technologies: ["Laravel", "Tailwindcss", "Mysql", "Vite.js", "PHP"],
    link: "https://setiaprimatamas.com",
  },
  {
    title: "Teras Rumah Nenek Website",
    image: project2,
    description:
      "I created terasrumahnenek.com as a WordPress-based website for a cafe, designed to list events and provide essential information such as menu options, pricing, and wedding package details.",
    technologies: ["Wordpress"],
    link: "https://terasrumahnenek.com",
  },
  {
    title: "Company Profile Website",
    image: project3,
    description:
      "Create and Develope company profile website for ptkcg.co.id and kcn.ptkcg.co.idDesigned and developed dynamic and engaging company profile websites for ptkcg.co.id and kcn.ptkcg.co.id, enhancing the online presence and showcasing the company's brand effectively.",
    technologies: ["Wordpress"],
    link: "https://ptkcg.co.id",
  },
  {
    title: "Faktur Pajak Website",
    image: project4,
    description:
      "I developed a website for PT. Trans Retail Indonesia on behalf of Transmart to streamline the company's tax invoice requests. The site provides an efficient platform for managing and tracking invoice requests tailored to meet Transmart’s operational needs. ",
    technologies: [
      "React",
      "Tailwindcss",
      "Vite.js",
      "Express",
      "mySQL",
      "Oracle",
    ],
    link: "https://fakturpajak.transmart.co.id",
  },
];

export const CONTACT = {
  address: "West Jakarta, Indonesia",
  phoneNo: "+62 81804040684",
  email: "syahbudin45@gmail.com",
};

export const certifications = [
  {
    id: 1,
    title: "Fullstack Web Developer Bootcamp",
    institution: "Binar Academy",
    year: 2023,
    description:
      "Started the bootcamp on April 18, 2023, and completed it on November 15, 2023. Graduated with a grade of 4.6/5 for Hard Skills and 4.3/5 for Soft Skills.",
    pdf: cert1,
  },
  {
    id: 2,
    title: "Internship Certification",
    institution: "Trans Retail Indonesia",
    year: 2024,
    description:
      "Started an internship in February and completed it in June as part of the Kampus Merdeka program, successfully graduating with an A grade distinction.",
    pdf: cert3,
  },
  {
    id: 3,
    title: "Web Development Laravel 11: Multi-Purpose Company Profile",
    institution: "Build With Angga",
    year: 2024,
    description:
      "Gained hands-on experience in web development using Laravel 11.",
    pdf: cert2,
  },
];
