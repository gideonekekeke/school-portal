import styled from "styled-components"

export const PlatformCode = styled.div`
   
  width:88%;
  height:380px;
  display:flex;
  padding-top:10px;
  margin-top:10px;
  justify-content:space-around;

    @media screen and (max-width:900px){
      width: 100%;
      display:flex;
      flex-direction:column; 
      height:auto;
      margin-top:0px;
      }
      
    @media screen and (max-width:320px){
      width:100%;
      height:auto;
      display:flex;
      flex-direction:column;
      margin-top:0px;
    
      
    }

`

export const PlatformCode1 = styled.div`
  width:57%;
  height:370px;
 

  @media screen and (max-width:900px){
    width:100%;
   
    height:auto;
    
    }
    
  @media screen and (max-width:320px){
    width:100%;
    height:auto;
   
  }

`

export const PlatformCode2 = styled.div`
   width:40%;
  height:auto;   
  
  
  text-align:start;
  display:flex;
  flex-direction:column;

  h1{
    font-size:25px;
    font-weight:bold;
  }
 
  @media screen and (max-width:900px){
    width:100%;
   
    height:auto;

    h1{
      font-size:25px;
    }
  }
  @media screen and (max-width:320px){
    width:100%;
    height:auto;
    
    h1{
      font-size:25px;
    }
  }

`

export const Platformwrite = styled.div`
padding-right: 10px;

 height: auto;
 height: 70px;
 text-align:start;
 @media screen and (max-width:320px){
  text-align:center;
  height: auto;

  
}
@media screen and (max-width:950px){
  text-align:center;
  height: auto;

  
}
`
export const Platformwrite2 = styled.div`
margin-top: "-20px"
 text-align:start;
 font-size:20px;
 @media screen and (max-width:320px){
  text-align:center;
  height: auto;
  font-size:15px;
  
}
@media screen and (max-width:950px){
  text-align:center;
  height: auto;
  font-size:15px;

  
}
`


