import React from 'react';
import "./Team.css";
import { 
    BsGithub,
    BsLinkedin,
    } from 'react-icons/bs';

const Dolapo = () => {
    return(
    <div className="meet-the-team">
        <div className="Dolapo">
            <div className="team-body">
                <div className="container-bio">
                    <div className="headshotImage headshotImg-Dolapo" />

                    <div className="bio_social-links">
                        <h4>Connect</h4>
                        <BsLinkedin />
                    </div>


                    <div className="title">
                        <span className="bio">CEO & Founder</span>
                    </div>


                    <div className="bio-name">
                        <b>Dolapo</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dolapo;