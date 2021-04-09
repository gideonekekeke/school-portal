import styled from "styled-components"

export const AllCard = styled.div`
width:345px;
height:495px;
border-radius:15px 15px 15px 15px;
box-shadow: 1px 2px 5px 1px #888888;
display:flex;
flex-direction:column;
position:relative;
margin-bottom:35px;
margin-right:10px;


@media screen and (max-width:950px){
  width:345px;
  margin-right:0px;
  margin-right:2px;

}

@media screen and (max-width:320px){
  width:300px;
  margin-right:0px;
  

}



`


export const AllCard1 = styled.div`
width:100%;
height:150px;
background:${({ clr }) => clr};
border-radius:15px 15px 0px 0px;
display:flex;
justify-content:center;
flex-direction:column;
align-items: center;


`
export const AllCard2 = styled.div`
width:100%;
height:350px;
background:#FFFFFF;
display:flex;
flex-direction:column;
border-radius:0px 0px 15px 15px;
justify-content:center;
align-items:center;

`

export const Allimg = styled.div`
width:65%;
height:160px;
position: absolute;
top: 40px;
border-radius:10px;
`

export const AllCard2con = styled.div`
width:60%;
height:auto;
text-align:center;



`