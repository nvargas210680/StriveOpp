import React from 'react';
import "./Team.css";
import { 
    BsGithub,
    BsLinkedin,
    } from 'react-icons/bs';

const Renata = () => {
    return(
    <div className="meet-the-team">
        <div className="Renata">
            <div className="team-body">
                <div className="container-bio">
                    <div className="headshotImage headshotImg-Renata" />

                    <div className="bio_social-links">
                        <h4>Connect</h4>
                        <BsLinkedin />
                        <BsGithub />
                    </div>


                    <div className="title">
                        <span className="bio">Full Stack Developer</span>
                    </div>


                    <div className="bio-name">
                        <b>Renata Vieiras</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Renata;