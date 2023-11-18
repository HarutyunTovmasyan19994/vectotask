import React from "react";
import {Route, Routes} from "react-router";
import Home from "../home";





const RoutePage = ()=>{
    return(
        <Routes>
            <Route path="/" Component={Home}/>
        </Routes>
    )
}
export default RoutePage
