import React from "react";
import Header from "./components/hedaer/header";
import RoutePage from "./components/page/route";
import {useSelector} from "react-redux";
import './App.css'

function App() {
    const isBoolean = useSelector(state => state.user.isBoolean)

    console.log(isBoolean, "isBoolean")
    return (
        <div className="commonPage">
                <div className="app">
                <div className="headerLeft" style={{opacity:isBoolean ? 0.80 : 1}}>
                    <Header/>
                </div>
                <div className="appRight">
                    <RoutePage/>
                </div>
            </div>
        </div>
    );
}

export default App;
