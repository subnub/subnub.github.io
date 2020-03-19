import React from "react";

const Menu = (props) => (

    
    <div className={props.showSideBar ? "menu__div" : ""}>
    
        {props.showSideBar ? <div className="menu__wrapper">

            <div className="menu__header__wrapper">
                <img className="menu__close" 
                    src="https://raw.githubusercontent.com/subnub/subnub.github.io/master/build/images/close.png"
                    onClick={props.closeMenu} />
            </div>

            <div className="menu__item__wrapper"
                onClick={props.gitClick}>
                <p className="menu__header__title">Github</p>
            </div>

            <div className="menu__item__wrapper"
                 onClick={props.aboutClick}>
                <p className="menu__header__title">About</p>
            </div>

            <div className="menu__item__wrapper"
                onClick={props.projectClick}>
                <p className="menu__header__title">Projects</p>
            </div>

            <div className="menu__item__wrapper"
                onClick={props.contactClick}>
                <p className="menu__header__title">Contact</p>
            </div>

        </div> : undefined}


    </div>
)

export default Menu;