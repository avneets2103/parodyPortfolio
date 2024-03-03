import { useState } from 'react'
import './UScreen5.css'

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
        Pname: "Biloog: The blog",
        imgSrc: "/projects/biloog.png",
        description: "Write your mind out, with a photo along side. Vent out about your semi-colon errors or see random cat pictures",
        techDescription: "Used: React JS and Redux Tool Kit and for back-end using Appwrite",
        isActive: true,
        activeLink: "https://blog-site-three-alpha.vercel.app",
        githubLink: "https://github.com/avneets2103/BlogSite",
    },
    {
        Pid: "2",
        Pname: "Stonks",
        imgSrc: "/projects/stonks.png",
        description: "Reach this application before 8am in the morning, If you wanna do something big in life. This is 'stonks' your astrologer to predicting stocks. MONEY! MONEY! MONEY!",
        techDescription: "Used: Reinfrocement learning (Deep Q learning algorithms)",
        isActive: false,
        activeLink: "",
        githubLink: "https://github.com/avneets2103/RL-stock-predictor",
    },
    {
        Pid: "3",
        Pname: "Virtual Quizzo",
        imgSrc: "/projects/virtualQuizzo.png",
        description: "Changing those boring quizzes which make you snoar, to something more hands on (quite literally). We are reaching the point of virtual realities after all!",
        techDescription: "Used: OpenCV, Python, HandTracking modules",
        isActive: false,
        activeLink: "",
        githubLink: "https://github.com/avneets2103/Virtual-Quiz?tab=readme-ov-file",
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
