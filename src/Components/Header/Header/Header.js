import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation/Navigation";
import Burger from "./Burger/Burger";



const Header = ()=>{



    return(
        <HeadrStyled>
            <div>
                <h1>Cozy House</h1>
                <p>
                Shelter for pets in Boston
                </p>
            </div>
            <Navigation/>
            <Burger/>
        </HeadrStyled>
    )
}


const HeadrStyled = styled.header`
padding:30px 40px 0 40px;
display:flex;
justify-content: space-between;

& p{
    color:#FFF;
}



@media (max-width: 768px) {
    padding-left:30px;
    padding-right:30px;
    

  }
@media (max-width: 320px){

}
`

export default Header;


