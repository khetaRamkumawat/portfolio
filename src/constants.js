// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import webverseLogo from './assets/company_logo/icon.webp';

// Education Section Logo's
import bsaLogo from './assets/company_logo/as.jpeg';
import vpsLogo from './assets/company_logo/images.jpg';
import vprLogo from './assets/company_logo/we.avif';
// Project Section Logo's
import githubdetLogo from './assets/work_logo/rrr.png';
import csprepLogo from './assets/work_logo/weather.png';
import movierecLogo from './assets/work_logo/er.png';
import taskremLogo from './assets/work_logo/we.png';
import npmLogo from './assets/work_logo/hh.png';
import webverLogo from './assets/work_logo/iip.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Full Stack Web Developer",
      company: "WsCube TECH",
      date: "Nov 2024 - April 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
      " Next Js",
      ],
    },
  ];
  
  export const education = [

    {
      id: 0,
      img: bsaLogo,
      school: "Aishwarya  College, Jodhpur",
      date: "Sept 2021 - Aug 2024",
      grade: "68%",
      desc: "I completed my Bachelor's degree in Computer Science (B.C.A) from Aishwarya  College, jodhpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at  Aishwarya College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Science - BCA (Computer Science)",
    },
    {
      id: 1,
      img: vpsLogo,
      school: "Sanskar Children Academy, Barmer",
      date: "Apr 2020 - March 2021",
      grade: "82.40%",
      desc: "I completed my class 12 education from Sanskar Children Academy, Barmer, under the RBSC board, where I studied History, Politcal Science, and Geography (ARTS).",
      degree: "RBSC(XII) - ARTS ",
    },
    {
      id: 2,
      img: vprLogo,
      school: "GOVT SR SEC School ,GUNGA",
      date: "Apr 2018 - March 2019",
      grade: "50.67%",
      desc: "I completed my class 10 education from GOVT SR SEC School ,GUNGA, under the rbsc board .",
      degree: "RBSC(X)",
    },
  ];
  export const projects = [
    {
      id: 0,
      title: "Furniture website",
      description:
        "A responsive furniture website built using HTML, CSS, JavaScript, and Bootstrap. The website features modern UI, product showcase, responsive design, and an integrated EmailJS service for direct customer inquiries via contact form.. This project helped me strengthen my understanding of web structure, styling, ",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript" ,"Bootstrap"],
      github: "https://github.com/khetaRamkumawat/furniture",
      webapp: "https://furniture-wheat-two.vercel.app/",
    },
    {
      id: 1,
      title: "Weather-App",
      description:
        "Weather Now is a responsive and real-time weather application that uses the OpenWeatherMap API to display weather information for any city worldwide. The app provides details like temperature, humidity, pressure, sunrise/sunset timings, and weather conditions — all displayed in Hindi for localization.",
      image: csprepLogo,
      tags: ["React JS", "tailwind CSS" , "API"],
      github: "https://github.com/khetaRamkumawat/weather-App",
      webapp: "https://weather-app-jade-seven-81.vercel.app/",
    },
    {
      id: 2,
      title: "Bootstrap-Userdata",
      description:
      "Created a fully responsive user data management interface in React.js using Bootstrap 5. Implemented both table view (desktop) and card view (mobile) for seamless UX. Included dynamic data rendering, condition handling, and edit/delete operations with responsive button actions",
      image: movierecLogo,
      tags: ["React JS",  "HTML", "CSS", "JavaScript" ,"bootsrap"],
      github: "https://github.com/khetaRamkumawat/bootstrap-userdata",
      webapp: "https://bootstrap-userdata.vercel.app/",
    },
    {
      id: 3,
      title: "Quiz-Application",
      description:
        "This is a fully responsive and interactive Quiz Application built using React.js and Tailwind CSS. It is designed for users to test their knowledge, practice MCQs, and track their quiz performance — all without any backend (Firebase Realtime Database was optional and used only in previous versions",
      image: npmLogo,
      tags: ["React JS", "firebase", "tailwind Css"],
      github: "https://github.com/khetaRamkumawat/Quiz-website",
      webapp: "https://quiz-website-zeta.vercel.app/",
    },
    {
      id: 4,
      title: "movie app",
      description:
        "A fully responsive and modern movie search application built using React.js, Vite, and Tailwind CSS. It fetches real-time movie data using the OMDb API and includes advanced features like search, filters, infinite scroll, favorites, and dark mode.",
      image: taskremLogo,
      tags: ["React.js", "Tailwind CSS ", "Vite ", "OMDb API "],
      github: "https://github.com/khetaRamkumawat/movie-app",
      webapp: "https://movie-app-zgnc.vercel.app/",
    },
    {
      id: 5,
      title: "IIP Acadmey",
      description:
        "This project is a multi-page static website for an educational institute (e.g., coaching center, school, or training academy). It is built using HTML and CSS and showcases different features of the institution like courses, contact information, gallery, and more.",
      image: webverLogo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/khetaRamkumawat/fristprojectiip",
      webapp: "https://movie-app-weq4.vercel.app/",
    },
  ];  