import React from "react";
import "./Stats.css";

const Statistics = () => {
    return(
        <div className="statistics">

            <h1 className="stats">The Numbers</h1>
            
            <div className="container-stats">
                    <div className="achievement">
                        <img className="achievement" src="https://i.imgur.com/uqshqm0.png" />
                        <div className="circle">750+</div>
                        <span>Scholarships</span>
                        <span>Listed in Our Database</span>
                    </div>
                    
                    <div className="achievement">
                        <img className="achievement" src="https://i.imgur.com/1jXGF7k.png" />
                        <div className="circle">20+</div>
                        <span>Students</span>
                        <span>Helped and Hired</span>
                    </div>
                    
                    <div className="achievement">
                        <img className="achievement" src="https://i.imgur.com/wCXEDxE.png" />
                        <div className="circle">∞</div>
                        <span>Dreams</span>
                        <span>Achieved</span>
                    </div>
                </div>
            </div>

    )
}

export default Statistics;