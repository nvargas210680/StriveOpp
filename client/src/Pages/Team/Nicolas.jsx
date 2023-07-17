import React from 'react';
import "./Team.css";
import { 
    BsGithub,
    BsLinkedin,
    } from 'react-icons/bs';

const Nicolas = () => {
    return(
    <div className="meet-the-team">
        <div className="Nicolas">
            <div className="team-body">
                <div className="container-bio">
                    <div className="headshotImage headshotImg-Nicolas" />

                    <div className="bio_social-links">
                        <h4>Connect</h4>
                        <BsGithub />
                        <BsLinkedin />
                    </div>


                    <div className="title">
                        <span className="bio">Full Stack Developer</span>
                    </div>


                    <div className="bio-name">
                        <b>Nicolas Vargas</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Nicolas;