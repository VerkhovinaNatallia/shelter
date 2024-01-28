import React from "react";
import styled from "styled-components";
import NavigationObj from "../../../NavigationObj";



const Navigation = ()=>{
    const navItem = NavigationObj.map((item)=>
        
        <li> 
            <a key={item.id} href={item.name}>{item.text}</a>
        </li>
    )
    

    return(
        <NavigationStyled>
            <ul>
                {navItem}
            </ul>

        </NavigationStyled>
    )
}




const NavigationStyled = styled.nav`

        & ul{
            display:flex;
            gap:35px;
        }
        & a{
            color:#CDCDCD;
        }
        & a:hover{
            
            
        }
    
        @media (max-width: 768px){
            
           & a{
            font-size: 15px;
           }
        
        }

 @media (max-width: 320px){
    display : none; }


`


export default Navigation;