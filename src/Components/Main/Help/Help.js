import styled from "styled-components";
import React from "react";
import HelpArr from "./HelpArr";

const Help =()=>{
    const HelpList = HelpArr.map((item)=>{
        return(
            <li key={item.id}>
            <>{item.svg}</>
            <p>{item.name}</p>
        </li>
        )

    })
return(
    <HelpStyled>
        <h2> How you can help<br/>
            our shelter</h2>
        <ul>
            {HelpList}
        </ul>
        
    </HelpStyled>
)

}


const HelpStyled = styled.section`
padding: 80px 40px 100px;
display:flex;
flex-direction:column;
gap:60px;
align-items: center;
& h2{
    font-size: 35px;
    text-align:center;
}
& ul{
    display:flex;
    flex-wrap:wrap;
    gap:120px;
    justify-content: center;
    padding:0 67px;
}
& li{
    text-align:center;
}

@media (max-width: 768px) {
padding:80px 69px 100px;
& ul{
    gap:60px;
    padding:0;
}
& li{
    width:26.3%;
}

@media (max-width: 320px) {
    padding:42px 15px;
    & h2{
        font-size: 25px;
    }
    & ul{
        gap:30px;
        justify-content: flex-start;
        
    }
    & li{
        width:44.8%;
    }
    & p{
        font-size:15px;
    }
}


`

export default Help;