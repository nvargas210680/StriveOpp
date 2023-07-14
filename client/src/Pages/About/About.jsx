import React from "react";
import "./About.css";

const About = () =>{
    return(
        <div className="aboutus">
            <div className="container-aboutus">
                <div className="aboutusleft">
                    <h1 className="about">About Us</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam magnam vel a tempore saepe dicta veritatis, cupiditate animi harum reiciendis ipsum distinctio aut porro, ducimus optio impedit iure blanditiis!</span>
                </div>

                <div className="aboutusright">
                    <img src="" />
                </div>
            </div>

            <div className="container-aboutus">

                <div className="aboutusright">
                    <img src="" />
                </div>
                
                <div className="aboutusright">
                    <h1 className="about">Our Mission</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod dolor aut voluptate cumque eveniet recusandae placeat ratione voluptatum, assumenda tempora nemo soluta maiores officiis explicabo blanditiis eaque totam tenetur.</span>
                </div>
            </div>
        </div>
    )
}

export default About;