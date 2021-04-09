import React from 'react'
import ban from "../img/cuu.png"
import {
  AllHero,
  FirstHero,
  MainFirstHero,
  FirstHero2,
  First,
  Second,
  Heroo,
  Herothat,
  HeroWrite,
  HeroImg,
  CodoMa,
  Fun, Gets,
  CvgS,
  CodoMa1, CodoMa2,
  Fun1, Fun2, Fun3, Fun4,
  Pic,
  PlatformCode

} from "./NdiStye"
import { Button } from "antd"
import Platform from './Platform'
import TynkerE from './TynkerE/TynkerE'
import Clearpath from './ClearPath/Clearpath'
import Ages from './Ages/Ages'
import Trusted from './Trusted/Trusted'
import Testimony from './Testimony/Testimony'
import Vidfile from './VidLab/Vidfile'
import Community from './Community/Community'

function NdiHome() {
  return (
    <div>
      <AllHero>
        <MainFirstHero>
          <FirstHero>
            <First>
              Path Way To Coding!!
            </First>
            &ensp;
            <Second>
              Guard Manuel
            </Second>
          </FirstHero>

        </MainFirstHero>
        <Heroo>
          <Herothat>
            <HeroWrite>
              <CodoMa>
                
                  
                Coding Made
                Easy


              </CodoMa>
              <Fun>
                
                  The Fun Way To Learn
               
               
                  Programming And Develop
               
                
                  Problem Solving &
                  Critical
               
                
                  Thinking Skills Ages 5 - 18
               


              </Fun>
              <Gets>
                <Button
                  style={{
                    background: "#fd9013",
                    border: "none",
                    color: "white",
                    height: "50px",
                    borderRadius: "5px",
                    width: " 200px",
                    fontSize: "20px"

                  }}>
                  Get Starter For Free
                </Button>
              </Gets>

            </HeroWrite>
            <HeroImg>
              <Pic>
                <img src={ban} style={{ width: "100%", height: "100%" }} />
              </Pic>

            </HeroImg>
          </Herothat>
         
        </Heroo>
        <CvgS>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 160 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,176C384,171,480,213,576,234.7C672,256,768,256,864,240C960,224,1056,192,1152,192C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

        </CvgS>
       
        
      </AllHero>
      <Platform/>
        <TynkerE/>
        <Clearpath/>
        <Ages/>
        <Trusted/>
        <Testimony/>
        <Vidfile/>
        <Community/>
     
  
    </div >
  )
}

export default NdiHome

{/*  */ }
