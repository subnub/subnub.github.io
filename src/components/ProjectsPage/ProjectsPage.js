import React from "react";
import Header from "../Header";
import ProjectItem from "../ProjectItem";
import projectInfo from "../../projectsInfo";
import Menu from "../Menu";

const ProjectsPage = (props) => (
    <div className="projects__wrapper">

        <Header />

        <div className="projects__box__wrapper">

            {props.selectedItemTitle === "" ? 
        
            <div className="projects__box">
            
                <div className="projects__box__header">
                    <p className="projects__title">My Projects</p>
                </div>

                <div className="projects__body">
                
                    <div className="projects__subbody">

                        <ProjectItem 
                            title={projectInfo.myDriveTitle} 
                            color={projectInfo.myDriveColor} 
                            body={projectInfo.myDriveDesc}
                            github={projectInfo.myDriveGit}
                            image={projectInfo.myDriveImage}
                            longBody={projectInfo.myDriveLongDesc}
                            demo={projectInfo.myDriveDemo}/>

                        <ProjectItem 
                            title={projectInfo.expensifyTitle}
                            color={projectInfo.expensifyColor}
                            body={projectInfo.expensifyDesc}
                            github={projectInfo.expensifyGit}
                            image={projectInfo.expensifyImage}
                            longBody={projectInfo.expensifyLongDesc}
                            demo={projectInfo.expensifyDemo}
                            />
                        <ProjectItem 
                            title={projectInfo.portfolioTitle}
                            color={projectInfo.portfolioColor}
                            body={projectInfo.portfolioDesc}
                            github={projectInfo.portfolioGit}
                            image={projectInfo.portfolioImage}
                            longBody={projectInfo.portfolioLongDesc}
                            />
                        <ProjectItem 
                            title={projectInfo.taskTitle}
                            color={projectInfo.taskColor}
                            body={projectInfo.taskDesc}
                            github={projectInfo.taskGit}
                            image={projectInfo.taskImage}
                            longBody={projectInfo.taskLongDesc}
                            />

                        <ProjectItem 
                            title={projectInfo.syncTitle}
                            color={projectInfo.syncColor}
                            body={projectInfo.syncDesc}
                            github={projectInfo.syncGit}
                            image={projectInfo.syncImage}
                            longBody={projectInfo.syncLongDesc}
                            demo={projectInfo.syncDemo}
                            />
                        
                    </div>
                
                </div>

            </div>

            :

            <div className="projects__box">
            
                <div className="projects__box__header" style={{background: props.selectedItemColor}}>
                    <p className="projects__title">{props.selectedItemTitle}</p>
                </div>

                <div className="projects__body">
                
                    <div className="projects__subbody">

                        <div className="projects__info__main">
                        
                            <div className="projects__info__box">

                                <div className="projects__info__image__wrapper">

                                    <img src={props.selectedItemImage} className="projects__info__image" />

                                </div>

                                <div className="projects__info__body__wrapper">

                                    <p className="projects__info__body">{props.selectedItemBody}</p>
                                    <p className="projects__info__subbody">{props.selectedItemLongBody}</p>

                                </div>
                            
                            </div>

                        </div>
                        
                    </div>


                    <div className="projects__info__button__box">

                        <div className="projects__info__button__wrapper">

                            <button onClick={props.backButton} className="projects__info__button" style={{background: "black"}}>Back</button>
                            <button onClick={() => props.gitButton(props.selectedItemGithub)} className="projects__info__button" style={{background: props.selectedItemColor}}>Github</button>
                            {props.selectedItemDemo !== "" ?  <button onClick={() => props.demoButton(props.selectedItemDemo)} className="projects__info__button" style={{background: "#f16a55"}}>Demo</button> : undefined}

                        </div>
                    </div>
                   
                
                </div>

            </div>
        
        }
        
            

        </div>

        <Menu />
    
    </div>
)

export default ProjectsPage;