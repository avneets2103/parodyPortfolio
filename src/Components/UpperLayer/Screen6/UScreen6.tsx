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
    imgSrc: "/icons/next.svg",
    description: "Fullstack framework by Vercel",
  },
  {
    Sid: "2",
    imgSrc: "/icons/tailwind.svg",
    description: "CSS library with inbuild classes",
  },
  {
    Sid: "3",
    imgSrc: "/icons/cloudinary.svg",
    description: "Storing media for backend apps",
  },
  {
    Sid: "4",
    imgSrc: "/icons/git.svg",
    description: "Microsoft's version control system",
  },
  {
    Sid: "5",
    imgSrc: "/icons/node.svg",
    description: "Javascript interpreter/compiler",
  },
  {
    Sid: "6",
    imgSrc: "/icons/react.svg",
    description: "Frontend libary for easier large scale frontend applications",
  },
  {
    Sid: "7",
    imgSrc: "/icons/redux.svg",
    description: "Popular state management library",
  },
  {
    Sid: "8",
    imgSrc: "/icons/typescript.svg",
    description: "Type specific javascript",
  },
];

function UScreen6() {
  return (
    <div className="Allfeatures">
      <p className="featureHeading">Dev's Features:</p>
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
