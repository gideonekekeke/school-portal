import styled from "styled-components"
// import img from "../../img/banner.jpg"
import img from "../img/banner.jpg"
import ban2 from "../img/ban2.png"
import ban from "../img/cuu.png"

export const AllHero = styled.div
  `
width: 100%;
height:auto;
display:flex;
flex-direction:column;
position:relative;

@media screen and (max-width:320px){
  width: 100%;
  height:800px;
  display:flex;
flex-direction:column;
  }

 

@media screen and (max-width:950px){
  width: 100%;
  height:800px;
  display:flex;
flex-direction:column;
  
  }
`
export const MainFirstHero = styled.div`
width: 100%;
height:50px;
background:#BF103D;
display:flex;
justify-content:center;
align-items:center;
color:white;
font-weight:bold;


@media screen and (max-width:950px){
width: 100%;
height:50px;
background:#BF103D;
display:flex;
justify-content:center;
align-items:center;
}

@media screen and (max-width:320px){
width: 100%;
height:70px;
background:#BF103D;
display:flex;
color:white;
font-weight:bold;
font-size:22px;

}

`
export const FirstHero = styled.div`
width: 50%;
height:50px;

display:flex;
justify-content:center;
align-items:center;

@media screen and (max-width:950px){
  width: 100%;
  height:65px; 
  display:flex;
  font-size:22px;
 

  
  
  }


@media screen and (max-width:320px){
  width: 70%;
  height:65px; 
  display:flex;
  flex-direction:column;
  font-size:22px;
  
  
  }
  
}

`
export const First = styled.div`
font-size:20px;
@media screen and (max-width:950px){
  font-size:18px;
 }
 @media screen and (max-width:320px){
  font-size:20px;
 }


  
`
export const Second = styled.div`
font-size:20px;

@media screen and (max-width:320px){
   margin-top:-30px
  }

`

export const Heroo = styled.div`
width: 100%;
height:450px;
display:flex;
background-image: url(${img});
background-repeat: no-repeat;
background-size: 100% 100%;


@media screen and (max-width:950px){
  width: 100%;
  height:630px;
  background-image: url(${img});
  background-repeat: no-repeat;
  
  }

@media screen and (max-width:320px){
  width: 100%;
  height:695px;
  background-image: url(${img});
  background-repeat: no-repeat;
  }

`
export const Herothat = styled.div`
width:100%;
height:500px;
display:flex;

@media screen and (max-width:950px){
  width: 100%;
  height:700px;
  display:flex;
  flex-direction:column;
  
  }



@media screen and (max-width:320px){
  width: 100%;
  height:700px;
  display:flex;
  flex-direction:column;
  
  }

  `




export const HeroWrite = styled.div`
height:400px;
width: 45%;
display:flex;
flex-direction:column;
padding-top:50px;

@media screen and (max-width:950px){
  width: 100%;
  padding-top:25px;
 
 
  }

@media screen and (max-width:320px){
  width: 100%;
  padding-top:25px;
 
 
  }

`

export const HeroImg = styled.div`
height:400px;
width: 55%;
display:flex;
@media screen and (max-width:950px){
  width:100%;
  height:210px;
  display:flex;

  
  }
@media screen and (max-width:320px){
  width:100%;
  height:300px;
  display:flex;
  
  }


`

export const Pic = styled.div`

height:400px;
width: 100%;


@media screen and (max-width:950px){
  width:100%;
  height:210px;
  display:flex;
 
  }

@media screen and (max-width:320px){
  width:100%;
  height:300px;
  display:flex;
 
  }
`
export const CodoMa = styled.div`
width:100%;
height:auto;
color:white;
font-size:45px;
display:flex;
padding-left:100px;





@media screen and (max-width:950px){
  width: 100%;
  height:auto; 
  display:flex;
  padding-top:0px;
  text-align:center;
  padding-left:0px;
  line-height:50px;
  
  
  }

  @media screen and (max-width:425px){
    width: 100%;
    height:auto; 
    display:flex;
    padding-top:10px;
    text-align:center;
    padding-left:30px;
    line-height:50px;
    
    
    }

    @media screen and (max-width:768px){
      width: 100%;
      height:auto; 
      display:flex;
      padding-top:10px;
      text-align:center;
    justify-content:center;
      line-height:50px;
      
      
      }

      @media screen and (max-width:1024px){
        width: 100%;
        height:auto; 
        display:flex;
        padding-top:10px;
      
    
        line-height:50px;
        
        
        }

@media screen and (max-width:320px){
  width: 100%;
  height:auto; 
  display:flex;
  flex-direction:column;
  padding-top:10px;
  padding-left:0px;
 
  }
`






export const Fun = styled.div`
width:100%;
height:auto;
color:white;
display:flex;

padding-left:100px;
font-size:19px;
font-weight:bold;


@media screen and (max-width:950px){
  width: 100%;
  padding-left:0px;
  display:flex;
  flex-direction:column;
  text-align:center;
  height:auto;
  text-align:center
 
  
  }



@media screen and (max-width:320px){
  width: 100%;
  padding-left:0px;
  display:flex;
  flex-direction:column;
  height:120px;
  text-align:center;
  font-size:15px;
  line-height:30px
  
  }

`

export const Fun1 = styled.div`


width:37%;
height:25px;
font-size:15px;


@media screen and (max-width:950px){
  width:100%;
  height:30px;
  font-size:17px;
  display:flex;
  justify-content:center;
  
 
  }


@media screen and (max-width:320px){
  width:100%;
  height:30px;
  font-size:17px;
  display:flex;
  justify-content:center;
  
 
  }

`
export const Fun2 = styled.div`

width:50%;
height:25px;
font-size:15px;

@media screen and (max-width:950px){
  width:100%;
  height:30px;
  font-size:17px;
 
  display:flex;
  justify-content:center;

  }
@media screen and (max-width:320px){
  width:100%;
  height:30px;
  font-size:17px;
 
  display:flex;
  justify-content:center;

  }

`
export const Fun3 = styled.div`

width:43%;
height:25px;
font-size:15px;

@media screen and (max-width:950px){
  width:100%;
  height:30px;
  font-size:17px;
 
  display:flex;
  justify-content:center;

  }


@media screen and (max-width:320px){
  width:100%;
  height:30px;
  font-size:17px;
 
  display:flex;
  justify-content:center;

  }

`
export const Fun4 = styled.div`

width:45%;
height:25px;
font-size:15px;
@media screen and (max-width:950px){
  width:100%;
  height:30px;
  font-size:17px;
  display:flex;
  justify-content:center;
  }
@media screen and (max-width:320px){
  width:100%;
  height:30px;
  font-size:17px;
  display:flex;
  justify-content:center;
  }

`
export const Gets = styled.div`
width:100%;
height:100px;
color:white;
font-size:40px;
padding-left:100px;

@media screen and (max-width:950px){
  width: 100%;
  padding-left:0px;
  height:90px;
  display:flex;
  justify-content:center;
  align-items:center;
 
 
 
  }

@media screen and (max-width:320px){
  width: 100%;
  padding-left:0px;

  height:90px;
  display:flex;
  justify-content:center;
  align-items:center;
 
  }
`
export const CvgS = styled.div`
position: absolute; 
width: 100%; 
top: 361px;
paddingTop: 10px;
height:auto;

@media screen and (max-width:1024px){
  position: absolute; 
  width: 100%; 
  top: 400px;
  paddingTop: 10px;
  height:auto;
  
}

@media screen and (max-width:768px){
  position: absolute; 
  width: 100%; 
  top: 610px;
  paddingTop: 10px;
  height:auto;
  
}

@media screen and (max-width:425px){
  position: absolute; 
  width: 100%; 
  top: 640px;
  paddingTop: 10px;
  height:auto;
  
}

@media screen and (max-width:375px){
  position: absolute; 
  width: 100%; 
  top: 645px;
  paddingTop: 10px;
  height:auto;
  
}

@media screen and (max-width:320px){
  position: absolute; 
  width: 100%; 
  top: 735px;
  paddingTop: 10px;
  height:auto;
  
}






`







