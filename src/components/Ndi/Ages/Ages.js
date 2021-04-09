import React from 'react'
import {

  AgesMain,
  Agesall,
  AgeallContent,
  AgesButton
} from "./AgesStyle"

import { Button } from "antd"
import AgesCard from './AgesCard'
import pic1 from "../../img/path-beginner.png"
import pic2 from "../../img/path-advanced.png"
import pic3 from "../../img/path-intermediate.png"


function Ages() {
  return (
    <div>
      <AgesMain>
        <Agesall>
          <AgeallContent>
            <AgesCard background="#7561A7" ipath={pic1} ages="Ages 5 -7" voice="Voice Instuctions"
              voicesta="Get started with code!
                  Solve logic problems
                  Create simple apps
                  Master coding basics"
            />
            <AgesCard background="#62B14C" ipath={pic3} ages="Ages 8-3" voice="Drag and drop coding"
              voicesta="Build apps and games
            Explore STEM subjects
            Design Minecraft mods
            Control robots, drones" />
            <AgesCard background="#DE6F46" ipath={pic2} ages="Ages 14+" voice="Real-world coding"
              voicesta="JavaScript and Python
             Web dev with HTML, CSS
             Learn data structures
             Prep for AP Comp Sc." />

          </AgeallContent>
          <AgesButton>
            <Button
              style={{
                background: "#fd9013",
                border: "none",
                color: "white",
                height: "40px",
                borderRadius: "5px",
                width: " 200px",
                fontSize: "15px",
                fontWeight: "bold",

              }}
            >
              EXPLORE MORE
          </Button>

          </AgesButton>
        </Agesall>
      </AgesMain>

    </div>
  )
}

export default Ages
