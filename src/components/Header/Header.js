import React from "react";

const Header = (props) => (
    //header__wrapper--background
    <div className={!props.showHeader ? "header__wrapper" : "header__wrapper header__wrapper--background"} >

        <div className="header__icon__wrapper">
        
            <img onClick={props.homeClick} className="header__icon" src="../images/logo.png"/>

        </div>
    
        <div className="header__button__wrapper">
        
            <button className="header__button" onClick={props.githubClick}>Github</button>
            <button className="header__button" onClick={props.aboutClick}>About</button>
            <button className="header__button" onClick={props.projectClick}>Projects</button>
            <button className="header__button" onClick={props.contactClick}>Contact</button>
            <img className="header__menu" onClick={props.menuClick} src="../images/menu.png"/>

        </div>

    </div>
)

export default Header;