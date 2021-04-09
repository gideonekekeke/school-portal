import React from 'react'
import {
  VidTest,
  VidTestcom,
  VidTestMid,
  Vidcom1,
  Vidcom2,
  Vidcom3

} from "./VidStyle"
import img from "../../img/img-video-thumb.png"

function Vidfile() {
  return (
    <div>
      <VidTest>
        <VidTestcom>
          <VidTestMid>
            <Vidcom1>
              <img src={img} style={{ width: "100%", height: "100%" }} />

            </Vidcom1>
            <Vidcom2>

            </Vidcom2>
            <Vidcom3>
              Find Out Why EverBody Loves CodeLab

            </Vidcom3>

          </VidTestMid>
        </VidTestcom>

      </VidTest>
    </div>
  )
}

export default Vidfile
