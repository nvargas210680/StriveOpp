import React from 'react';
import "./Team.css";

const Han = () => {
    return(
        <div className="meet-the-team">
        <div className="Han">
            <div className="team-body">
                <div className="container-bio">
                    <div className="headshotImage headshotImg-Han" />

                    <div className="bio_social-links">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="/">LinkedIn</a></li>
                            <li><a href="/">GitHub</a></li>
                        </ul>
                    </div>


                    <div className="title">
                        <span>Full Stack Developer</span>
                    </div>


                    <div className="bio-name">
                        <b>Han Tang</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Han;