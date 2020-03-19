import React from "react";

const ProjectItem = ({title = "Default Title", body="Default body", color="#f16a55", gitClick, infoClick, github, image = "/images/mydrive.png", longBody, demo = ""}) => (
    <div className="project__item__wrapper">
    
        <div className="project__item__title__wrapper" style={{background: color}}>
        
            <p className="project__item__title">{title}</p>

        </div>

        <div className="project__item__image__wrapper">
        
            <div className="project__item__image__box">
                <img className="project__item__image" src={image}/>
            </div>
        
        </div>

        <div className="project__item__text__wrapper">
            
            <p className="project__item__text">{body}</p>

        </div>

        <div className="project__item__button__wrapper">
        
            <div className="project__item__more__wrapper">

                <img onClick={() => infoClick(title, body, color, github, image, longBody, demo)} className="project__item__info" src="../images/info.png"/>
                {/*make it so pressing info changes MyProjects, title, and body, instead of a popup window*/}
            </div>

            <button onClick={() => gitClick(github)} className="project__item__git__wrapper">Github</button>

        </div>


    </div>
)

export default ProjectItem;