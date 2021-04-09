import React from 'react'

import {
  AllCard,
  AllCard1,
  AllCard2,
  Allimg,
  AllCard2con,

} from "./AgeCardStyle"

import picc from "../../img/path-beginner.png"

function AgesCard(props) {
  return (
    <div>
      <AllCard>
        <AllCard1 clr={props.background} >
          <Allimg  >
            <img src={props.ipath} style={{ width: "100%", height: "100%" }} />
          </Allimg>

        </AllCard1>
        <AllCard2>
          <AllCard2con>
            <h1>{props.ages}</h1>
            <h4>{props.voice}</h4>
            <p>
              {props.voicesta}
            </p>

          </AllCard2con>

        </AllCard2>

      </AllCard>
    </div >
  )
}

export default AgesCard
