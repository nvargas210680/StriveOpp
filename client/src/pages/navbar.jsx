import React from "react";

export default function NavigationBar(){
    return(
        <nav className="navigation">
            <button className="hamburger">
            {/* icon from heroicons.com */}
                <img src=""
                xmlns="http://www.w3.org/2000/svg" />
            </button>

            <div className="navigation-menu">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/database">Scholarship Database</a>
                    </li>

                    <li>
                        <a href="/mentorship">Mentors & Mentees</a>
                    </li>

                    <li>
                        <a href="/team">Meet the Team</a>
                    </li>

                    <li>
                        <a href="/about">About Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}