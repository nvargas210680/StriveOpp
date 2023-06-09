import { Auth } from "../components/auth";
import Awards from "./HomePageFeatures/Awards";
import FeaturedArticles from "./HomePageFeatures/FeaturedArticles";
import Media from "./HomePageFeatures/Media";
import YourGoals from "./HomePageFeatures/YourGoals";
import { BsPlayCircleFill } from "react-icons/bs";

export default function HomePage(){

    const style ={ fontSize:"6rem", margin:"5px", };

    return(
        <main>
        {/* CSS Animation + Authentication */}
        <div className="box">
            <div className="row">
                <div className="column">
                <h1 className="box1">Making financing education accessible for students and early career professionals.</h1>

                <h3 className="box1">StriveOpp is revolutionizing education and opportunities for students and early career professionals. Our database focuses on accessibility and offers over 700 scholarships for students seeking to study in Canada. To realize your greatest potential in a world with fair access to finance your education, join StriveOpp today. </h3>
                
                {/* Demo Video Link */}

                
                <div className="homepage-demo">
                <div className="row">

                    <div className="column">
                    <a href="/"><BsPlayCircleFill id="homepage-demo" style={style} /></a>
                    </div>

                    <div className="column">
                    <h3>See it in action!</h3>
                    </div>
                    
                </div>
                </div>
                
                </div>
                <div className="column">
                    <Auth />
                </div>
            </div>
        </div>

        {/* Self Check-Out Options + Book An Appointment */}
        <div className="box2">
            <YourGoals />
        </div>

        {/* Featured Articles in Print and Online Media */}
        <div className="box3">
            <FeaturedArticles />
        </div>

        {/* Podcast & Blog Posts */}
        <div className="box4">
            <Media />
        </div>

        {/* Awards */}
        <div className="box5">
            <Awards />
        </div>
        </main>
        

    )
}