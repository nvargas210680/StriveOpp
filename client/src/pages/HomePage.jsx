import { Auth } from "../components/auth";
import Awards from "./HomePageFeatures/Awards";
import FeaturedArticles from "./HomePageFeatures/FeaturedArticles";
import Media from "./HomePageFeatures/Media";
import YourGoals from "./HomePageFeatures/YourGoals";

export default function HomePage(){
    return(
        <main>
        {/* CSS Animation + Authentication */}
        <div class="box">
            <div class="row">
                <div class="column">
                <h1 className="box1">Making education and opportunities accessible 
                for all students and early-career professionals!</h1>

                <h3 className="box1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. </h3>
                </div>
                <div class="column">
                    <Auth />
                </div>
            </div>
        </div>

        {/* Self Check-Out Options + Book An Appointment */}
        <div class="box2">
            <YourGoals />
        </div>

        {/* Featured Articles in Print and Online Media */}
        <div class="box3">
            <FeaturedArticles />
        </div>

        {/* Podcast & Blog Posts */}
        <div class="box4">
            <Media />
        </div>

        {/* Awards */}
        <div class="box5">
            <Awards />
        </div>
        </main>

    )
}