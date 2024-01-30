
import React from "react";
import styled from "styled-components";
import PetsArr from "../PetsArr";
import Slider from 'react-styled-carousel';
import Flickity from "react-flickity-component";

const Carusel = ()=>{
     const responsive = [
          { breakPoint: 1280, cardsToShow: 3 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
          { breakPoint: 760, cardsToShow: 2 },
        ];
const PetslList = PetsArr.map((item)=>{
     return(
          <div>
          <img src={item.image} />
          <h3>{item.name}</h3>
          <button>Learn more</button>
       </div>
     )

 })

return(
<SluderStyled>
<Slider reponsive={responsive} >
     {PetslList}

     </Slider>
</SluderStyled>


)

}



const SluderStyled = styled.div`


`

export default Carusel;