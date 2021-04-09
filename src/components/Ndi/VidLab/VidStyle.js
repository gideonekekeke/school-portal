
import style from "styled-components"

export const VidTest = style.div`
width:100%;
height:130px;
background:#B4F7FF;
padding-top:20px;
box-shadow: 5px 0px 0px 0px #ABE0E7;


`

export const VidTestcom = style.div`
width:100%;
height:90px;
background:#D4F8FD;
box-shadow: 1px 2px 8px 8px #ABE0E7;
display:flex;
justify-content:center;
align-items:center
`

export const VidTestMid = style.div`
width:40%;
height:80px;

display:flex;

 &:hover{
  cursor: pointer;
  color:#B4F7FF
 }
 @media screen and (max-width:320px){
  width:100%;

  
}
@media screen and (max-width:950px){
  width:100%;
  justify-content:center;

  
}
`

export const Vidcom1 = style.div`
width:120px;
height:80px;
@media screen and (max-width:320px){
  display:none;

  
}
@media screen and (max-width:950px){
  display:none;

  
}

`
export const Vidcom2 = style.div`
width:30px;
height:80px;

`

export const Vidcom3 = style.div`
width:350px;
height:80px;
display:flex;
justify-content:center;
align-items:center;
color:black;
font-weight:bold;

&:hover{
  cursor: pointer;
  color:#65D7E6
 }
 @media screen and (max-width:320px){
  font-size:12px

  
}
@media screen and (max-width:950px){
  font-size:15px;
 
 

  
}

`
