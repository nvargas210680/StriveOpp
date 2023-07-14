import React from 'react';
import Info from './01_Info/Info';
import Statistics from './02_Stats/Stats';
import SelfServe from './03_SelfServe/SelfServe';
import InTheNews from './04_News/InTheNews';
import "./HomePage.css";

const HomePage = () => {
    return(
        <div className="homepage">
        <Info />
        <Statistics />
        <SelfServe />
        <InTheNews />
        </div>
    )
}

export default HomePage;