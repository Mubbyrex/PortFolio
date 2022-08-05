// all the properties are optional - can be left empty or deleted
const header = {
  homepage: "https://github.com/Mubbyrex",
  title: "MubaraK",
};

const about = {
  name: "Mubarak Ibrahim",
  role: "Software Engineer",
  description:
    "I am a dynamic and result-oriented Software Engineer, dedicated to creating software applications and achieving the goals of my clients with an innovative and creative mindset. I am a driven hands-on team player and quick in grasping new technologies.",
  resume:
    "https://drive.google.com/file/d/16w8taJ0KcJNPvFGzKsvQ03qqF9GfMN16/view?usp=sharing",
  social: {
    linkedin: "linkedin.com/in/mubarak-ibrahim-b7949b21a",
    github: "https://github.com/Mubbyrex",
    twitter: "https://twitter.com/Mubby_official5",
  },
};

const projects = [
  {
    name: "Crypto Tracking App",
    description:
      "Created a user friendly Interface which displays information about cryptocurrency assets and tokens without the need to sign in (no data collected)",
    stack: ["HTML", "CSS", "React", "Material UI", "Chartjs"],
    sourceCode: "https://github.com/Mubbyrex/Crypto-tracker",
    livePreview: "https://demo-cryptotracker.netlify.app/",
  },
  {
    name: "Real Time Chat App",
    description:
      "A full MERN stack chat app with real time functionality implemented with socket.io, Chat app supports both one on one and group chats",
    stack: [
      "HTML",
      "CSS",
      "React",
      "Expressjs",
      "Nodejs",
      "Mongo DB",
      "Socket IO",
      "JWT",
      "BCrypt js",
      "Material UI",
    ],
    sourceCode: "https://github.com/Mubbyrex/Chatty-chat-app",
    livePreview: "https://chatty-chat-app-one.vercel.app/",
  },
  {
    name: "Cocktail DB",
    description:
      "A cocktails Encyclopedia app that takes queries and return details about cocktails",
    stack: ["HTML", "CSS", "React"],
    sourceCode: "https://github.com/Mubbyrex/Cocktail-DB",
    livePreview: "https://cocktaildb008.netlify.app",
  },
  {
    name: "Random Homepage",
    description: "A static landing Page",
    stack: ["HTML", "CSS", "Javascript"],
    sourceCode: "https://github.com/Mubbyrex/Landing_page",
    livePreview: "https://landing-page-fem.netlify.app/",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "React",
  "Redux",
  "Material UI",
  "Git",
  "Wordpress",
  "Chakra UI",
  "AWS",
  "TailWind",
  "Agile",
];

const contact = {
  email: "mubbyre6xx@gmail.com",
};

export { header, about, projects, skills, contact };
