import React, { useState } from "react";
import styled from "styled-components";
import Carusel from "./Carusel/Carusel";



const Pets = ()=>{

return(
<PetsStyle>
<h2>Our friends who<br/>
are looking for a house</h2>
<Carusel/>
<button>Get to know the rest</button>
</PetsStyle>

)

}

export default Pets;

const PetsStyle= styled.section`
padding: 80px 40px 100px;
display:flex;
flex-direction:column;
gap:40px;
justify-content: center;

& h2{
    margin: 0 33.3%;
    text-align:center;
    font-family: Georgia;
font-size: 35px;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 45.5px */
letter-spacing: 2.1px;
}


& button{
    border-radius: 100px;
    background: #F1CDB3;
    padding: 15px 45px;
    width:22%;
    margin:0 39%;
}

`
