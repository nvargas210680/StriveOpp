import React from "react";
import "./Team.css";
import Dawn from "./Dawn";
import Dolapo from "./Dolapo";
import Elvin from "./Elvin";
import Han from "./Han";
import Nicolas from "./Nicolas";
import Renata from "./Renata";

const Team = () =>{
    return(
        <div className="team">
            <h1>Meet the Team</h1>

            <div className="column">
                <div className="row">
                    <Dolapo />
                    <Dawn />
                </div>

                <div className="row">
                    <Elvin />
                    <Nicolas />
                </div>

                <div className="row">
                    <Renata />
                    <Han />
                </div>
            </div>
        </div>
    )
}

export default Team;