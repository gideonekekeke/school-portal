import style from "styled-components"

export const AllCom = style.div`
 width:100%;
 height:auto;
 background:#F4F9FA;
 display:flex;
 flex-direction:column;
 padding-top:30px;

`

export const Comtitle = style.div`
width:100%;
height:auto;
display:flex;
justify-content:center;
align-items:center;
font-size:35px;

@media screen and (max-width:320px){
  font-size:25px
  
}

`

export const ComButton = style.div`
width:100%;
height:auto;
padding-top:5px;
display:flex;
justify-content:center;
align-items:center;

`

export const Comimg = style.div`
width:100%;
height:auto;
display:flex;
justify-content:center;
align-items:center;
padding-top:20px;

`
export const ComimgIn = style.div`
width:60%;
height:440px;

display:flex;
justify-content:center;
align-items:center;

@media screen and (max-width:320px){
  width:75%;
  height:200px;

}
@media screen and (max-width:950px){
  width:80%;
  height:200px;

}


`
export const ComWrite = style.div`
width:100%;
height:auto;

display:flex;
justify-content:center;
align-items:center;
padding-top:20px;

`
export const ComWriteIn = style.div`
width:60%;
height:auto;
justify-content:center;
align-items:center;

@media screen and (max-width:320px){
  width:90%;
 
 
 }
 @media screen and (max-width:950px){
  width:90%;
 
 
 }


`