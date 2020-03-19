import React from "react";
import Header from "../Header";
import Menu from "../Menu";

const Homepage = (props) => (

    <div className="homepage__wrapper">

                <Header />

                <div className="homepage__intro__wrapper">
                
                    <img className="homepage__intro__wallpaper" src="https://raw.githubusercontent.com/subnub/subnub.github.io/master/build/images/space.jpg"/>

                </div>

                
                <div className="about__wrapper">

                    <div className="about__box">
                    
                        <div className="about__title__wrapper">
                        
                            <p className="about__title">About Me</p>

                        </div>

                        <div className="about__body__wrapper">
                        
                            <p className="about__body__title">Hello, my name is Kyle Hoell</p>

                        </div>

                        <div className="about__body__wrapper">
                        
                            <p className="about__body__subtitle">And I am a passionate Web Developer, with a love for all things Technology. My main skills include React, Node.js, CSS, Sass, Javascript, Java, Mongo.db, and more!</p>

                        </div>

                        <div className="about__body__wrapper">
                        
                            <p className="about__body__subtitle">I have extensive knowledge in creating full-stack Applications, as well as breaking big applications into small coherent pieces. View my projects to see some examples of this.</p>

                        </div>

                        <div className="homepage__projects__button__wrapper">
                        
                            <button onClick={props.projectClick} className="homepage__projects__button">View My Projects</button>

                        </div>

                    </div>

                </div>

                <Menu />

            </div>
)

export default Homepage;