import React from "react";
import IMAGE from "../../assets/FeaturedCoverImage.png"
import FeaturedTitle from "../../assets/FeaturedTitleImage.png"
import {FaPlay} from "react-icons/fa";
import Data  from "../../data.json"
import "./home.css"

const Home = () => {
    console.log(Data,"data")
    return (
        <div className="home">
            <div>
                <img src={IMAGE} alt="" className="Image"/>
                <div className="irishman">
                    <p className="movieCss">Movie</p>
                    <img src={FeaturedTitle} alt="FeaturedTitle"/>
                    <p className="year18Hour">2021 18+ 1h 48m</p>
                    <p className="loremIpsum">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <div className="btns">
                        <button className='play'><FaPlay className="playIcons"/>Play</button>
                        <button className="moreInfo">More Info</button>
                    </div>
                </div>
                <div className="traindingNow">
                    <p className="trendingNowP"> Trending Now</p>
                    <div className="filmsBox">
                        {
                            Data.TendingNow.map(item=>(
                                <div className="films">
                                    <img src={item.CoverImage} alt=""/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home
