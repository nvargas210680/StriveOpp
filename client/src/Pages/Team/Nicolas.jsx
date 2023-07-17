import React from 'react';
import "./Team.css";

const Nicolas = () => {
    return(
    <div className="meet-the-team">
        <div className="Nicolas">
            <div className="team-body">
                <div className="container-bio">
                    <div className="headshotImage headshotImg-Nicolas" />

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
                        <b>Nicolas Vargas</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Nicolas;