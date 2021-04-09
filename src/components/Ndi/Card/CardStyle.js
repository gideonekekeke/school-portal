import style from "styled-components"

export const Cardmain = style.div`
    display: flex;
    flex-direction: column;
    height: 370px;
    width: 370px;
    background: ${({ clr }) => clr};;
    margin-bottom: 35px;
    border-radius: 10px;
    transition: transform 180ms ease-out;
    
    @media screen and (max-width:320px){
     width:300px;
     
    }
    &:hover{
      transform: scale(1.05);
      cursor: pointer;
     
     }
`