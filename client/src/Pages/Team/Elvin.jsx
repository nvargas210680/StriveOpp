import React from 'react';
import "./Team.css";
import { 
    BsGithub,
    BsLinkedin,
    } from 'react-icons/bs';

const Elvin = () => {
    return(
    <div className="meet-the-team">
        <div className="Elvin">
            <div className="team-body">
                <div className="container-bio">
                    <div className="headshotImage headshotImg-Elvin" />

                    <div className="bio_social-links">
                        <h4>Connect</h4>
                        <BsGithub />
                        <BsLinkedin />
                    </div>


                    <div className="title">
                        <span className="bio">Scrum Master</span>
                    </div>


                    <div className="bio-name">
                        <b>Elvin Limpin</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Elvin;