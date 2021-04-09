import style from "styled-components"

export const AllReg = style.div`
  height:550px;
  width:800px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  background-color: #e1e1d7;
  position:relative;



  @media screen and (max-width:1024px){
  
    height:460px;
    width:800px;
  }

  @media screen and (max-width:768px){
  
    height:450px;
    width:500px;
  }

  @media screen and (max-width:425px){
  
    height:500px;
    width:500px;
  }

  @media screen and (max-width:375px){
  
    height:500px;
    width:400px;
  }
  
  @media screen and (max-width:320px){
  
    height:500px;
    width:300px;
  }

 

`
export const Allback = style.div`
position: absolute;
 top: -15px;
left:780px;

@media screen and (max-width:1024px){
  position: absolute;
  top: -20px;
  left:800px;
}

@media screen and (max-width:768px){
  position: absolute;
  top: -30px;
  left:510px;
}

@media screen and (max-width:768px){
  position: absolute;
  top: -30px;
  left:510px;
}


@media screen and (max-width:425px){
  position: absolute;
  top: 0px;
  left:400px;
}

@media screen and (max-width:375px){
  position: absolute;
  top: 0px;
  left:350px;
}
@media screen and (max-width:320px){
  position: absolute;
  top: 0px;
  left:270px;
}


`