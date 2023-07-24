import React from "react";
import "./About.css";
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

const About = () =>{
    return(
        <div className="aboutus">

            {/* About Us  */}

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

            {/* Our Mission  */}

            <div className="container-aboutus">
                <div className="aboutusright">
                    <img className="aboutus" src="https://i.imgur.com/kxz1Qsj.png" />
                </div>
                
                <div className="aboutusright">
                    <h1 className="about">Our Mission</h1>
                    <span>We connect students and early professionals to tools that will aid them in their academic planning, scholarship search, up-skilling opportunities, events, and more!</span>
                </div>
            </div>

            {/* About Us */}

            <div className="container-aboutus">
                <div className="aboutusleft">
                    <h1 className="about">Awards</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam magnam vel a tempore saepe dicta veritatis, cupiditate animi harum reiciendis ipsum distinctio aut porro, ducimus optio impedit iure blanditiis!</span>
                </div>

                <div className="aboutusright">
                    <img src="" />
                </div>
            </div>

            {/* Testimonials */}

            <div className="container-aboutus">
                <div className="aboutusright">
                    <img className="aboutus" src="https://i.imgur.com/8RnOqyk.png" />
                </div>
                
                <div className="aboutusright">
                    <h1 className="about">Testimonials</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod dolor aut voluptate cumque eveniet recusandae placeat ratione voluptatum, assumenda tempora nemo soluta maiores officiis explicabo blanditiis eaque totam tenetur.</span>
                </div>
            </div>

            {/* Let's Connect */}

            <div className="container-aboutus">
                <div className="aboutusleft">
                    <img src="" />
                </div>

                <div className="aboutusleft">
                    <h1 className="about">Let's Connect</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam magnam vel a tempore saepe dicta veritatis, cupiditate animi harum reiciendis ipsum distinctio aut porro, ducimus optio impedit iure blanditiis!</span>
                    <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 }, width:'50%', marginTop:"40px"}}>
                        <Button
                            sx={{ bgcolor: "#294243" }}>
                            Book With Me
                        </Button>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default About;