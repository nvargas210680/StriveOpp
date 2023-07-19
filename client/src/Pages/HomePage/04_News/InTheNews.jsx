import React from "react";
import "./InTheNews.css";
import NewsCard from "./InTheNews_Card";

const InTheNews = () => {
    return(
        <div className="inthenews">

            <h1 className="inthenews">In The News</h1>
            
            <div className="container-inthenews">
                    <div className="row">
                        <div className="column">
                        <NewsCard />
                        </div>

                        <div className="column">
                        <NewsCard />
                        </div>

                        <div className="column">
                        <NewsCard />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default InTheNews;