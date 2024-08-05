import "./UScreen6.css";
import HorizontalScroll from "react-scroll-horizontal";

interface skill {
  Sid: string;
  imgSrc: string;
  description: string;
}

const skillList: Array<skill> = [
  {
    Sid: "1",
    imgSrc: "https://img.shields.io/badge/NextJS-black?style=for-the-badge&logo=Next.js&logoColor=white&color=black",
    description: "Fullstack framework by Vercel",
  },
  {
    Sid: "2",
    imgSrc: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    description: "JavaScript runtime built on Chrome's V8 engine",
  },
  {
    Sid: "3",
    imgSrc: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
    description: "API development and testing tool",
  },
  {
    Sid: "4",
    imgSrc: "https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7",
    description: "Platform for web hosting and serverless functions",
  },
  {
    Sid: "5",
    imgSrc: "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
    description: "Platform for frontend frameworks and static sites",
  },
  {
    Sid: "6",
    imgSrc: "https://img.shields.io/badge/ShadCN-black?style=for-the-badge&logo=shadcnui&logoColor=white&color=B266FF",
    description: "UI component library",
  },
  {
    Sid: "7",
    imgSrc: "https://img.shields.io/badge/NextUI-black?style=for-the-badge&logo=nextui&logoColor=black&color=CCFFFF",
    description: "React component library",
  },
  {
    Sid: "8",
    imgSrc: "https://img.shields.io/badge/Tailwind-b?style=for-the-badge&logo=tailwindcss&logoColor=black&color=06B6D4",
    description: "Utility-first CSS framework",
  },
  {
    Sid: "9",
    imgSrc: "https://img.shields.io/badge/Typescript-b?style=for-the-badge&logo=typescript&logoColor=white&color=3178C6",
    description: "Type-specific JavaScript",
  },
  {
    Sid: "10",
    imgSrc: "https://img.shields.io/badge/Redux%20Tool%20Kit-b?style=for-the-badge&logo=redux&logoColor=white&color=764ABC",
    description: "State management library for JavaScript apps",
  },
  {
    Sid: "11",
    imgSrc: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    description: "Minimal and flexible Node.js web application framework",
  },
  {
    Sid: "12",
    imgSrc: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    description: "JavaScript library for building user interfaces",
  },
  {
    Sid: "13",
    imgSrc: "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
    description: "Declarative routing for React",
  },
  {
    Sid: "14",
    imgSrc: "https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white",
    description: "Node package manager",
  },
  {
    Sid: "15",
    imgSrc: "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
    description: "Relational database management system",
  },
  {
    Sid: "16",
    imgSrc: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    description: "NoSQL database",
  },
  {
    Sid: "17",
    imgSrc: "https://img.shields.io/badge/JWT-b?style=for-the-badge&logo=jsonwebtokens&logoColor=white&color=%23000000",
    description: "JSON Web Token for securely transmitting information",
  },
  {
    Sid: "18",
    imgSrc: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    description: "Styling language for web pages",
  },
  {
    Sid: "19",
    imgSrc: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    description: "Markup language for web pages",
  },
  {
    Sid: "20",
    imgSrc: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    description: "Programming language for web development",
  },
  {
    Sid: "21",
    imgSrc: "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
    description: "CSS framework for responsive web design",
  },
  {
    Sid: "22",
    imgSrc: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
    description: "General-purpose programming language",
  },
  {
    Sid: "23",
    imgSrc: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    description: "High-level programming language",
  },
  {
    Sid: "24",
    imgSrc: "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",
    description: "Data manipulation and analysis library for Python",
  },
  {
    Sid: "25",
    imgSrc: "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
    description: "Numerical computing library for Python",
  },
  {
    Sid: "26",
    imgSrc: "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white",
    description: "Machine learning library for Python",
  },
  {
    Sid: "27",
    imgSrc: "https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white",
    description: "Open-source machine learning framework",
  },
  {
    Sid: "28",
    imgSrc: "https://img.shields.io/badge/OpenAI%20Gym-b?style=for-the-badge&logo=openaigym&logoColor=black&color=%230081A5",
    description: "Toolkit for developing and comparing reinforcement learning algorithms",
  },
  {
    Sid: "29",
    imgSrc: "https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white",
    description: "Open-source electronics platform",
  },
  {
    Sid: "30",
    imgSrc: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
    description: "Collaborative interface design tool",
  },
  {
    Sid: "31",
    imgSrc: "https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white",
    description: "All-in-one workspace for notes, tasks, and databases",
  },
  {
    Sid: "32",
    imgSrc: "https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white",
    description: "Lightweight markup language for formatting text",
  },
];


function UScreen6() {
  return (
    <div className="Allfeatures">
      <p className="featureHeading">Tech Stack: </p>
      <div className="scrollFeatures">
        <HorizontalScroll pageLock={false} reverseScroll={true}>
            {skillList.map((skill: skill) => (
            <div
                className="skillCard"
                key={skill.Sid}
            >
                <div className="innerSkillCard">
                    <img src={skill.imgSrc} alt="logo" />
                    <p>{skill.description}</p>
                </div>
            </div>
            ))}
        </HorizontalScroll>
      </div>
    </div>
  );
}

export default UScreen6;
