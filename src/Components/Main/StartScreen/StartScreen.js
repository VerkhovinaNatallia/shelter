import React from "react";
import styled from "styled-components";
import image from './start-screen-puppy.png';


const StartScreen= ()=>{


    return(
        <ScreenStyled>
            <div>
                <h2>Not only people <br/>need a house</h2>
                <p>We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!</p>
                <button>Make a friend</button>
            </div>
            <img src ={image} alt ='dog'/>
        </ScreenStyled>
    )
}

const ScreenStyled = styled.section`
    background: radial-gradient(237.5% 111.8% at 0% 0%, #5B483A 0%, #262425 100%), #211F20;
    padding:180px 40px 0;
    margin-top:-90px;
    display:flex;
    gap:42px;

    & div{
        margin-top:163px;
        display:flex;
        flex-direction:column;
        gap:42px;
        align-items: flex-start;
        color:#fff;
    }

    & h2{
        color:#FFF;
        font-size: 44px;

    }
    & p{
        font-size: 15px;
        font-weight: 400;
    }

    & button{
        border-radius: 100px;
        background: #F1CDB3;
        padding: 15px 45px;
        color:#292929;
        font-size: 17px;
    }

    @media (max-width: 768px) {
        padding:150px 30px 0 154px;
        gap:100px;
        flex-direction:column;
        margin-top:-109px;
        & div{
            margin-top:60px;
            padding-right:54px;
        }
        & img{
            padding-left:15px;
        }
        & h2{
            font-size: 25px;
        }
        & button{
        margin-left: 125px;
        }

      }

      @media (max-width: 320px) {
        padding:150px 10px 0 10px;
        gap:105px;
        flex-direction:column;
        align-items:center;

        & div{
            margin-top:60px;
            padding-right:0;
            
        }
        & p{
            line-height: 160%;   
        }
        & button{
            margin-left: 0;
            }
      
      }



`

export default StartScreen;