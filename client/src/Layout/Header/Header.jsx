import React from "react";
import "./Header.css";

const Header = () => {
    return(
        <div className="header">
            <div className="header-left">
                <a href="/" className="logo">
                    <img 
                        src="https://images.squarespace-cdn.com/content/v1/612dabc42132625e4c2932c5/4d60e94c-dfa6-4c2e-a153-35d9ec01319b/fotor_2023-1-3_21_18_12.png?format=1500w" 
                        className="logo" />
                </a>

                <div className="n-name">
                    <h1 className="header">StriveOpp</h1>
                </div>
            </div>

            <div className="header-right">
                <button className="button n-button">
                    Contact Us
                </button>
            </div>
        </div>
    )
}

export default Header;