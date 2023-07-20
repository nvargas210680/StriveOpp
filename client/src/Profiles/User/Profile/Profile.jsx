import React from "react";
import "./Profile.css";

const Profile = () => {
    return(
        <div className="profile">
            <div className="profile-left">
                <div className="container-profile">
                    <h1>Username</h1>
                </div>

                <div className="container-profile">
                    <h1>Your Tags</h1>
                </div>
            </div>

            <div className="profile-center">
                <div className="container-profile">
                    <h1>Your Scholarships</h1>
                </div>
            </div>

            <div className="profile-right">
                <div className="container-profile">
                    <h1>$ Funding Available To You</h1>
                </div>
            </div>
        </div>
    )
}

export default Profile;