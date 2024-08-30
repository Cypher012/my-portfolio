import port1 from "../images/port9.jpg";
import port2 from "../images/landing-page.jpeg";
import port3 from "../images/word-image-68.png";
import port4 from "../images/ecommerce.png";
import port5 from "../images/multiple.jpg";
import port6 from "../images/note-app.png";

export const pageAnimate = {
  hidden: {
    // x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 3,
      delay: 1,
    },
  },
};

export const socialLinks = [
  {
    link: "https://www.facebook.com/ayowole.ojoade.12?mibextid=LQQJ4d",
    icon: "fa-brands fa-facebook",
  },
  {
    link: "https://x.com/blaqcipher02?s=21",
    icon: "fa-brands fa-x-twitter",
  },
  {
    link: "www.instagram.com",
    icon: "fa-brands fa-instagram",
  },
  {
    link: "www.LinkedIn.com",
    icon: "fa-brands fa-linkedin",
  },
  {
    link: "www.google.com",
    icon: "fa-brands fa-google",
  },
];

export const myProfile = [
  ["Email", "ayoojoade@gmail.com"],
  ["Address", "4, Daniel street , idimu road, Lagos"],
  ["Phone", "09048001687"],
  ["Nationality", "Nigeria"],
  ["Study", "Obafemi Awolowo University"],
  ["Interest", "Playing Football , Swimming"],
  ["Freelance", "Available"],
];

export const mySkill = [
  ["HTML/CSS", 90],
  ["Sass", 75],
  ["Bootstrap", 93],
  ["Tailwind", 95],
  ["Javascript", 80],
  ["React", 90],
  ["Typescript", 70],
  ["React Native", 80],
];

export const otherSkill = [
  ["Communication Skills", 95],
  ["Problem Solving Skills", 90],
  ["Attention to Detail", 89],
  ["Continuous Learning", 96],
  ["Teamwork and Collaboration", 85],
  ["Time Management", 91],
];

export const knowledge = [
  ["Bootstrap, Tailwind"],
  ["Sass, Material UI, Daisy UI, React Bootstrap"],
  ["React, Redux , React Query, Framer motion,React Form Validating, Next JS"],
  ["Regex, Vite"],
  ["Git & Git Hub"],
  ["Firebase"],
];

export const interest = [
  ["Creating Custom Website"],
  ["Creating Mobile Apps"],
  ["Front-End Web Instructor"],
];

export const programmingBar = [
  ["HTML", "text-red-500"],
  ["CSS", "text-blue-500"],
  ["Javascript", "text-yellow-700"],
  ["Sass", "text-funishia-500"],
  ["Bootstrap", "text-purple-500"],
  ["Tailwind css", "text-sky-500"],
  ["React", "text-teal-500"],
  ["React Bootstrap", "text-violet-500"],
  ["Material UI", "text-indigo-500"],
];

export const myPortfolio = [
  {
    id: 1,
    image: port1,
    projectName: "Password Generator",
    description:
      "Generate strong, custom passwords with our web-based tool. It's user-friendly, allowing you to adjust length and complexity for online security.",
    "programming language": ["HTML", "CSS", "Javascript"],
    link: "https://cypher012.github.io/passwordGenerator/",
  },
  {
    id: 2,
    image: port2,
    projectName: "Stack Landing page",
    description:
      "Discover a captivating web presence on our sleek landing page. Crafted with HTML, CSS, Bootstrap, and JavaScript, it offers an enticing gateway to your brand or product. With interactive features, it welcomes and engages your audience.",
    "programming language": ["HTML", "CSS", "Tailwind", "Javascript"],
    link: "https://cypher012.github.io/blaqcipher/",
  },
  {
    id: 4,
    image: port4,
    projectName: "E-Commerce Website",
    description:
      "Explore our innovative e-commerce platform, a glimpse into the future of online shopping. While a work in progress, our website showcases products and features, giving a taste of what's to come. Powered by React and React Bootstrap, stay tuned for updates as we transform online retail.",
    "programming language": ["CSS", "Sass", "React", "React Bootstrap"],
    link: "https://chimerical-biscochitos-49de00.netlify.app",
  },
  {
    id: 3,
    image: port3,
    projectName: "Boxer Landing page",
    description:
      "Explore our elegant, responsive landing page, expertly designed with HTML, CSS, and Bootstrap. No JavaScript required for a seamless user experience. Engage and connect with our visually appealing layout, guiding you to explore our offerings in our digital world.",
    "programming language": ["HTML", "CSS", "Bootstrap"],
    link: "https://cypher012.github.io/Boxer-landing-page/",
  },
  {
    id: 5,
    image: port5,
    projectName: "Variants Website",
    description:
      "Variant: Your ultimate software platform, skillfully crafted with React and Tailwind. Simplify capturing user feedback, seamlessly engage with your audience, and empower innovation. Discover the best way to gather and analyze feedback.",
    "programming language": ["React", "Tailwind"],
    link: "https://sweet-marzipan-39518e.netlify.app",
  },
  {
    id: 6,
    image: port6,
    projectName: "Note App",
    description:
      "Experience our elegant note-taking app, powered by React, Material-UI, and Tailwind. Capture thoughts, ideas, and notes in a beautifully designed digital notebook. Enjoy a user-friendly interface and robust features for effortless organization. Elevate your note-taking with our reliable companion.",
    "programming language": ["React", "Tailwind", "Material UI"],
    link: "https://tiny-tartufo-f8f120.netlify.app/",
  },
];
