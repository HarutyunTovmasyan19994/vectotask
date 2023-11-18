import React from "react";
import FeaturedTitle from "../../assets/FeaturedTitleImage.png"
import {Swiper,SwiperSlide} from "swiper/react"
import {FaPlay} from "react-icons/fa";
import Data  from "../../data.json"
import IMAGE from "../../assets/FeaturedCoverImage.png"
import "swiper/css"
// import "swiper/css/effect-overflow"
import "swiper/css/pagination"
import "./home.css"
import {EffectCoverflow,Pagination,Navigation} from "swiper/modules";

const Home = () => {

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
                    {/*<div className="filmsBox">*/}
                        <Swiper
                        grabCursor={true}
                        centeredSlides={true}
                        lap={true}
                        slidesPerView={"auto"}
                        coverflowEffect={
                            {
                                rotate:0,
                                stretch:0,
                                depth:100,
                                modifier:2.5
                            }
                        }
                        modules={[Pagination]}
                        className="swiper_container"
                        >
                            {
                                Data.TendingNow.map(item=>(
                                    <SwiperSlide className="films">
                                        <img src={item.CoverImage} alt=""/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>


                    {/*</div>*/}
                </div>
            </div>

        </div>
    )
}
export default Home
