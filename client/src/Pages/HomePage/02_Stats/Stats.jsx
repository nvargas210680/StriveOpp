import React from "react";
import "./Stats.css";

const Statistics = () => {
    return(
        <div className="statistics">

            <h1 className="stats">The Numbers</h1>
            
            <div className="container-stats">
                <div className="row">
                <div className="column">
                    <div className="achievement">
                        <img src="https://img.freepik.com/free-vector/biophilic-design-workspace-abstract-concept-illustration-biophilic-room-eco-friendly-workspace-green-office-design-trend-bring-outdoors-indoors-vertical-garden_335657-114.jpg?w=740&t=st=1689347352~exp=1689347952~hmac=131c1580af235d73ad117d47d735996dae5262c5bc148382faf140594d3ad4ce" />
                        <div className="circle">750+</div>
                        <span>Scholarships</span>
                        <span>listed in our database</span>
                    </div>
                    </div>
                    
                    <div className="column">
                    <div className="achievement">
                        <img src="https://img.freepik.com/free-vector/biophilic-design-workspace-abstract-concept-illustration-biophilic-room-eco-friendly-workspace-green-office-design-trend-bring-outdoors-indoors-vertical-garden_335657-114.jpg?w=740&t=st=1689347352~exp=1689347952~hmac=131c1580af235d73ad117d47d735996dae5262c5bc148382faf140594d3ad4ce" />
                        <div className="circle">20+</div>
                        <span>Students</span>
                        <span>Helped and Hired</span>
                    </div>
                    </div>

                    <div className="column">
                    <div className="achievement">
                        <img src="https://img.freepik.com/free-vector/biophilic-design-workspace-abstract-concept-illustration-biophilic-room-eco-friendly-workspace-green-office-design-trend-bring-outdoors-indoors-vertical-garden_335657-114.jpg?w=740&t=st=1689347352~exp=1689347952~hmac=131c1580af235d73ad117d47d735996dae5262c5bc148382faf140594d3ad4ce" />
                        <div className="circle">∞</div>
                        <span>Dreams</span>
                        <span>Achieved</span>
                    </div>
                    </div>
                </div>
                </div>
                </div>

    )
}

export default Statistics;