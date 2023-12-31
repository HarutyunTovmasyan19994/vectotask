import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Home from "../../assets/icons/Group 46.png"
import TVSHOW from "../../assets/icons/Group 56.png"
import Movies from "../../assets/icons/Group 54.png"
import Genres from "../../assets/icons/Group 53.png"
import WatchLater from "../../assets/icons/Group 47.png"
import SearchIcons from "../../assets/icons/ICON - Search.png"
import IMG from "../../assets/https_specials-4.png"
import {useSelector, useDispatch} from "react-redux";
import {ISBOOLEAN} from "../../redux/action/action";
import "./header.css"

const Header = () => {
    const isBoolean = useSelector(state => state.user.isBoolean)
    const dispatch = useDispatch()

    const menuItem = [
        {
            path: "/search",
            name: "Search",
            icons: SearchIcons
        },
        {
            path: '/',
            name: "Home",
            icons: Home
        },
        {
            path: "/tvShow",
            name: "TV Show",
            icons: TVSHOW,
        },
        {
            path: "/movies",
            name: "Movies",
            icons: Movies
        },
        {
            path: "/genres",
            name: "Genres",
            icons: Genres
        },
        {
            path: '/watchLater',
            name: "Watch hLater",
            icons: WatchLater
        }
    ]

    return (
        <div className="container">
            <div
                style={{width: isBoolean ? "300px" : '60px'}}
                onMouseEnter={() => dispatch({type: ISBOOLEAN,payload:true})}
                onMouseLeave={() => dispatch({type: ISBOOLEAN,payload:false})}
            >
                <div className="info" style={{display: isBoolean ? "block" : "none"}}>
                    <img src={IMG} alt=""/>
                    <p>
                        Harut
                    </p>
                </div>
                <div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink
                                to={item.path}
                                key={index}
                                className="link"
                                activeclassNmae="active"
                            >
                                <img src={item.icons} alt="" className="icon"/>
                                <p className="icon_text"
                                   style={{display: isBoolean ? "block" : "none"}}>{item.name}
                                </p>
                            </NavLink>
                        ))
                    }
                </div>
                <div
                    className="LanHeExit"
                    style={{display: isBoolean ? "block" : "none"}}
                >
                    <ul>
                        <li>Language</li>
                        <li>Get Help</li>
                        <li>Exit</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
