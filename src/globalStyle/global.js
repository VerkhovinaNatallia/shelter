import { createGlobalStyle } from 'styled-components';


  const Global = createGlobalStyle`
  *{
    font-family:Arial;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
}
h1,h2{
    font-family: Georgia;
}
h1{
    font-size: 32px;
    line-height: 110%; /* 35.2px */
    letter-spacing: 1.92px;
    color:#F1CDB3;
    
}
h2{
    font-size: 35px;
    line-height: 130%; /* 45.5px */
    letter-spacing: 2.1px;
}


`
export default Global;