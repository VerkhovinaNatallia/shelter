import React from "react";
import styled from "styled-components";

import StartScreen from "./StartScreen/StartScreen";
import About from "./About/About";
import Pets from "./Pets/Pets";
import Help from "./Help/Help";
import Donation from "./Donation/Donaion";


const Main = ()=>{


    return (
        <main>
            <StartScreen/>
            <About/>
            <Pets/>
            <Help/>
            <Donation/>
        </main>
    )
}

export default  Main;