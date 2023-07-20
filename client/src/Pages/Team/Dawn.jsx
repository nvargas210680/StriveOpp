import React from 'react';
import "./Team.css";
import { 
    BsGithub,
    BsLinkedin,
    } from 'react-icons/bs';

const Dawn = () => {
    return(
        <div className="meet-the-team">
            <div className="Dawn">
                <div className="team-body">
                    <div className="container-bio">
                        <div className="headshotImage headshotImg-Dawn" />

                        <div className="bio_social-links">
                            <h4>Connect</h4>
                                <BsGithub />
                        </div>


                        <div className="title">
                            <span className="bio">Content Writer</span>
                        </div>


                        <div className="bio-name">
                            <b>Dawn Mbang</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dawn;