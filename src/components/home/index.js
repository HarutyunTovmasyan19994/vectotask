import React from "react";
import IMAGE from "../../assets/FeaturedCoverImage.png"
import "./home.css"

const Home = ()=>{
    return(
        <div className="home">
            <div>
                <img src={IMAGE} alt="" className="Image"/>
            </div>
        </div>
    )
}
export default Home
