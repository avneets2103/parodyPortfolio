import { useState } from 'react'
import './UScreen5.css'
import useWindowDimensions from "../../windowDim/windowDim";

interface project {
    Pid: string,
    Pname: string,
    imgSrc: string,
    description: string,
    techDescription: string,
    isActive: boolean,
    activeLink: string,
    githubLink: string,
}

const projectList:Array<project> = [
    {
        Pid: "1",
        Pname: "SmartKart: Shop Smart",
        imgSrc: "/projects/smartkart.png",
        description: "A web application to reduce your shopping addictions and buy the things you actually need and not the ones you find cute!",
        techDescription: "Tech stack: NextJS, NodeJS, Accerternity, ShadCN, JWT, Typescript, NextUI, Cloudinary",
        isActive: true,
        activeLink: "https://smartkart-frontend.vercel.app/login",
        githubLink: "https://github.com/avneets2103/smartkart",
    },
    {
        Pid: "2",
        Pname: "ColdMailer",
        imgSrc: "/projects/coldmailer.png",
        description: "Automating and easening the process of cold mailing, provides feature to automatically coldmail without even opening mailing application.",
        techDescription: "Tech Stack: Node.js, Postman, Nodemailer, Express.js",
        isActive: true,
        activeLink: "https://www.youtube.com/watch?v=4YP3mwAaI9I&feature=youtu.be",
        githubLink: "https://github.com/avneets2103/coldMailer",
    },
    {
        Pid: "3",
        Pname: "The Better Car",
        imgSrc: "/projects/betterCar.png",
        description: "Training my Agent to drive a simulated car and make high scores in the races.",
        techDescription: "Deep Convolutional Proximal Policy Optimization algorithm allows the agent to learn with every try.",
        isActive: true,
        activeLink: "https://drive.google.com/file/d/1IEzZMl-g5IumpMpnrKEmvw1gYndULOdu/view?usp=sharing",
        githubLink: "https://github.com/avneets2103/Car-racing-RL",
    },
    {
        Pid: "4",
        Pname: "IOT Botnet detector",
        imgSrc: "/projects/botnet.png",
        description: "Saving your beloved Smart devices from botnet attacks using the power of ML, a full fledged research project with higher accuracy than older works.",
        techDescription: "Used: Deep learning, Boosting algorithms and Ensembling techniques, Streamlit",
        isActive: true,
        activeLink: "https://iotbotnetdetection.streamlit.app/",
        githubLink: "https://github.com/avneets2103/IOT-botnet-frontend",
    }
]

function UScreen5() {
    const [currProject, setCurrProject] = useState(projectList[0]);
    const { width, height } = useWindowDimensions();
    if (width < height) {
      return (
        <div className='ProjectsP'>
            <div className='ProjectsWardrobeP'>
                <div className="leftWardrobeP">
                    <div className="wardrobeTitle">
                        <p className='projectTitle'>PROJECT WARDROBE:</p>
                        <div>
                            <p>our product <span>`Developer avneet`</span></p>
                            <p>has been tested</p>
                            <p>to make these projects:</p>
                        </div>
                    </div>
                </div>
                <div className="projectsListP">
                    <div className="innerProjectList">
                        {projectList.map((project: project) => (
                            <div className={currProject===project?"project selectedProject":"project"} key={project.Pid} onClick={()=>{
                                setCurrProject(project);
                            }}>
                                {project.Pname}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='ProjectShowcaseP'>
                <div className="visualShowcaseP">
                    <img src={currProject.imgSrc} alt="projectImg" width="200px"/>
                </div>
                <div className="descriptionShowcase">
                    {/* <div className="titleShowcase">
                        {currProject.Pname}
                    </div> */}
                    <div className="descriptionShowcase">
                        {currProject.description}
                    </div>
                    <div className="techShowcase">
                        {currProject.techDescription}
                    </div>
                    <div className="linkShowcase">
                        {currProject.isActive && (<p>Active Link: <a href={currProject.activeLink} target='_blank'>Click here!</a></p>)}
                        <p>Github Link: <a href={currProject.githubLink} target='_blank'>Click here!</a></p>
                    </div>
                </div>
            </div>
        </div>
      )}
  
    return (
        <div className='Projects'>
            <div className='ProjectsWardrobe'>
                <div className="leftWardrobe">
                    <div className="wardrobeTitle">
                        <p className='projectTitle'>PROJECT WARDROBE:</p>
                        <div>
                            <p>our product <span>`Developer avneet`</span></p>
                            <p>has been tested</p>
                            <p>to make these projects:</p>
                        </div>
                    </div>
                    <div className="upgrade">
                        Upgrade to premium for more :-) 
                    </div>
                </div>
                <div className="projectsList">
                    <div className="innerProjectList">
                        {projectList.map((project: project) => (
                            <div className={currProject===project?"project selectedProject":"project"} key={project.Pid} onClick={()=>{
                                setCurrProject(project);
                            }}>
                                {project.Pname}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='ProjectShowcase'>
                <div className="visualShowcase">
                    <img src={currProject.imgSrc} alt="projectImg" width="200px"/>
                </div>
                <div className="descriptionShowcase">
                    <div className="titleShowcase">
                        {currProject.Pname}
                    </div>
                    <div className="descriptionShowcase">
                        {currProject.description}
                    </div>
                    <div className="techShowcase">
                        {currProject.techDescription}
                    </div>
                    <div className="linkShowcase">
                        {currProject.isActive && (<p>Active Link: <a href={currProject.activeLink} target='_blank'>Click here!</a></p>)}
                        <p>Github Link: <a href={currProject.githubLink} target='_blank'>Click here!</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UScreen5
