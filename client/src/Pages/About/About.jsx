import React from "react";
import "./About.css";

const About = () =>{
    return(
        <div className="aboutus">
            <div className="container-aboutus">
                <div className="aboutusleft">
                    <h1 className="about">About Us</h1>
                    <span>
                        Navigating a professional or academic career in technology, economics, and community development can be challenging so...
                        Created by Usask economics graduate Dolapo Fadare, who received over $75,000 in scholarships & grants to fund her whole university tuition.
                    </span>
                </div>

                <div className="aboutusright">
                    <img className="aboutus" src="https://i.imgur.com/Pk25ks9.png" />
                </div>
            </div>

            <div className="container-aboutus">
                <div className="aboutusright">
                    <img className="aboutus" src="https://i.imgur.com/kxz1Qsj.png" />
                </div>
                
                <div className="aboutusright">
                    <h1 className="about">Our Mission</h1>
                    <span>We connect students and early professionals to tools that will aid them in their academic planning, scholarship search, up-skilling opportunities, events, and more!</span>
                </div>
            </div>

            <div className="container-aboutus">
                <div className="aboutusleft">
                    <h1 className="about">Client Feedback</h1>
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
                    <h1 className="about">Let's Connect</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod dolor aut voluptate cumque eveniet recusandae placeat ratione voluptatum, assumenda tempora nemo soluta maiores officiis explicabo blanditiis eaque totam tenetur.</span>
                </div>
            </div>
        </div>
    )
}

export default About;