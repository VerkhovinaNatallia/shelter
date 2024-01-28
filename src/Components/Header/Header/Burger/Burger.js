import React, { useState } from "react";
import styled from "styled-components";
import NavigationObj from "../../../NavigationObj";






const Burger = () => {
    const [click, setClick] = useState(false);
    const handeClick = () =>{
        setClick(!click);
        console.log('hgrhg');
    } 
    
    const navItem = NavigationObj.map((item) =>
    <li >
        <a key={item.name+4} href={item.name}>{item.text}</a>
    </li>
)
    return (
        <BurgerStyle>
            <div onClick={handeClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22" fill="none">
                    <line y1="21" x2="30" y2="21" stroke="#F1CDB3" stroke-width="2" />
                    <line y1="11" x2="30" y2="11" stroke="#F1CDB3" stroke-width="2" />
                    <line y1="1" x2="30" y2="1" stroke="#F1CDB3" stroke-width="2" />
                </svg>
            </div>
            <ul clicked = {click}>
                {navItem}
            </ul>

        </BurgerStyle >
    )
}


const BurgerStyle = styled.div`
 display:none;

 @media (max-width: 320px){
    display:block;
    & svg{

    }
    & ul {
        display:${(props)=>(props.clicked ? 'block': 'none')};
    }

 }

`;

export default Burger;