import React from "react";
import styled from "styled-components";
import image from "./about-pets.png";


const About = ()=>{

    return(
<AboutStyled>
        <img src={image} alt='pents'/>
        <div>
            <h2> About the shelter “Cozy House”</h2>
            <p>Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. 
                The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.</p>
            <p>
            We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. 
            We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. 
            Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.
            </p>
        </div>

</AboutStyled>

    )
}

const AboutStyled = styled.section`
    padding:80px 225px 100px;
    display:flex;
    gap:120px;

    & div{
        display:flex;
        flex-direction:column;
        gap:25px;
    }
    & h2{
        font-size: 35px;
        color:#545454;

    }
    & p{
        font-family: Arial;
        font-size: 15px;
        line-height: 160%; /* 24px */
    }
    @media (max-width: 768px) {
        padding:80px 165px 100px;
        flex-direction:column-reverse;
        gap:80px;

        & img{
            padding:0 118px;
        }


      }
      @media (max-width: 320px) {
        padding:42px 10px;
        gap:42px;
        text-align: center;
        & h2{
            font-size: 25px;
        }
        & p{
            text-align: justify;
        }
        & img{
            padding:0 20px;
        }


      }

`
export default About;