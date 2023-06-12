import { Auth } from "../components/auth";
import Awards from "./HomePageFeatures/Awards";
import FeaturedArticles from "./HomePageFeatures/FeaturedArticles";
import Media from "./HomePageFeatures/Media";
import YourGoals from "./HomePageFeatures/YourGoals";

export default function HomePage(){
    return(
        <main>
        {/* CSS Animation + Authentication */}
        <div className="box">
            <div className="row">
                <div className="column">
                <h1 className="box1">Making education and opportunities accessible 
                for all students and early-career professionals!</h1>

                <h3 className="box1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. </h3>
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