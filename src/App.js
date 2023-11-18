import React, {useState} from "react";
import './App.css'
import Header from "./components/hedaer/header";
import RoutePage from "./components/page/route";
function App() {
  return (
    <div className="commonPage">
      <div className="app">
        <div className="headerLeft">
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
