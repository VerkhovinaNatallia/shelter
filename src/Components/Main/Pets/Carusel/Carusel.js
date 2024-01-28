
import React from "react";
import styled from "styled-components";
import PetsArr from "../PetsArr";

const Carusel = ()=>{
let n=1;
let y = 2;
let x = 3;



return(
<CaruselStyled>
{/* <div onClick={prevSlide}/> */}
{/* <div onClick={nextSlide}/> */}
<button>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
  <path d="M14 2V4H3V6L0 3L3 0V2H14Z" fill="#292929"/>
</svg>
</button>
<ul>
   <li>
        <img src={PetsArr[n].image} />
        <h3>{PetsArr[n].name}</h3>
        <button>Learn more</button>
   </li>
   <li>
        <img src={PetsArr[y].image} />
        <h3>{PetsArr[y].name}</h3>
        <button>Learn more</button>
   </li>
   <li>
        <img src={PetsArr[x].image} />
        <h3>{PetsArr[x].name}</h3>
        <button>Learn more</button>
   </li>
</ul>
<button>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
  <path d="M0 4V2L11 2V0L14 3L11 6V4L0 4Z" fill="#292929"/>
</svg>
</button>
</CaruselStyled>
)

}



const CaruselStyled = styled.div`
display:flex;
gap:53px;

& ul{
    display:flex;
    gap:90px;
    overflow: hidden;
}
& ul.nth-child(1){
    
}
`

export default Carusel;