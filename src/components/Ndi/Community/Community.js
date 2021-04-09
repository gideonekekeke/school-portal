import React from 'react'
import { Button } from "antd"
import wimg from "../../img/world_map_PNG28.png"

import {
  AllCom,
  Comtitle,
  ComButton,
  Comimg,
  ComWrite,
  ComimgIn,
  ComWriteIn
} from "./CommStyle"

function Community() {
  return (
    <div>
      <AllCom>
        <Comtitle>
          Join Our Community

        </Comtitle>
        <ComButton>
          <Button
            style={{
              background: "#0096AA",
              border: "none",
              color: "white",
              height: "50px",
              borderRadius: "5px",
              width: " 150px",
              fontSize: "20px"

            }}>
            Sign Up Free
                </Button>

        </ComButton>
        <Comimg>
          <ComimgIn>
            <img src={wimg} style={{ width: "100%", height: "100%" }} />
          </ComimgIn>
        </Comimg>
        <ComWrite>
          <ComWriteIn>
            <p>
              CodeLab isn’t just for schools and coding camps, though. Parents who value STEM education and want their children to know how to learn to code should know that our kids' programming platform can be used at home, too. There are individual, family plans, and our online coding classes
              for kids are a great way for them to gain the supplemental STEM skills needed for the future world.
          </p>
            <p>
              Because technology is so integrated into virtually every aspect of our lives, learning about it is more important than ever. Our coding platform for kids makes it convenient and fun to gain knowledge that will serve them well throughout their lives.
              You can count on our trusted methods to help them develop and grow their capabilities with computers.
          </p>

          </ComWriteIn>




        </ComWrite>



      </AllCom>

    </div>
  )
}

export default Community
