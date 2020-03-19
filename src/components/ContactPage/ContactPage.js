import React from "react";
import Header from "../Header"
import Menu from "../Menu";

const ContactPage = (props) => (
    <div className="projects__wrapper">

        <Header />
    
        <div className="projects__box__wrapper">

        <div className="projects__box">
            
            <div className="projects__box__header" style={{background: "#f16450"}}>
                <p className="projects__title">Contact Me</p>
            </div>

            <div className="contact__body__wrapper">

                <p className="contact__body__title">Kyle Hoell</p>
                <p className="contact__body__subtitle">Web Developer</p>

            </div>

            <div className="contact__body__wrapper">
                <p className="contact__info__title">Phone Number</p>
                <p className="contact__info__subtitle">401-480-6014</p>
            </div>

            <div className="contact__body__wrapper">
                <p className="contact__info__title">Email Address</p>
                <p className="contact__info__subtitle">Kyle.hoell@gmail.com</p>
            </div>

        </div>

        
        </div>

        <Menu />

    </div>
)

export default ContactPage;