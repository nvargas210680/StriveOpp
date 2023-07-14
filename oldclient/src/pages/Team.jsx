import React from "react"
import DawnBiographyCard from "../components/Bio-Cards/Dawn-Bio"
import DolapoBiographyCard from "../components/Bio-Cards/Dolapo-Bio"
import ElvinBiographyCard from "../components/Bio-Cards/Elvin-Bio"
import HanBiographyCard from "../components/Bio-Cards/Han-Bio"
import NicolasBiographyCard from "../components/Bio-Cards/Nicolas-Bio"
import RenataBiographyCard from "../components/Bio-Cards/Renata-Bio"

export default function Team(){
    return(
        <>    
        <div className="team">

        <h1><i>Meet the Team</i></h1>

        <div className="row">

            <div className="column">
                <DolapoBiographyCard />
            </div>

            <div className="column">
                <DawnBiographyCard />
            </div>
            
        </div>

        <div className="row">

            <div className="column">
                <ElvinBiographyCard />
            </div>

            <div className="column">
                <NicolasBiographyCard />
            </div>
            
            </div>

        <div className="row">

            <div className="column">
                <RenataBiographyCard />
            </div>

            <div className="column">
                <HanBiographyCard />
            </div>

            
        </div>
        </div>

                
                

        </>
    )
}