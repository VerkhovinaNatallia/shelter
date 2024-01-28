import React, { useState } from "react";
import styled from "styled-components";
import Carusel from "./Carusel/Carusel";



const Pets = ({slides})=>{

    // const [pets,setPets]=useState(0);
    // const length = slides.length;

    // const nextSlide = ()=>{
    //     setCurrent(pets === length -1?0:pets+1);
    // };
    // const prevSlide = ()=>{
    //     setCurrent(pets === 0 ? length-1 :pets-1);
    // };
    // if(!Array.isArray(slides)||slides.length<=0){
    //     return null;
    // }

return(
<>
<h2>Our friends who
are looking for a house</h2>
<Carusel/>
<button>Get to know the rest</button>
</>

)

}

export default Pets;
