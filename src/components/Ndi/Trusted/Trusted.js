import React from 'react'
import {

  AllTrusted,
  AllTrustedcon1,
  AllTrustedcon2,
  AllTrustedcon3,
  AllTrustedcon2tent,
  AllTrustedcon3ttent,
  LogoTrusted
} from "./TrustedStyle"

import img from "../../img/logo-facebook.png"
import data from "./Trusted.json"

function Trusted() {
  return (
    <div>
      <AllTrusted>
        <AllTrustedcon1>
          Trusted by leading brands

        </AllTrustedcon1>
        <AllTrustedcon2>
          <AllTrustedcon2tent>
            Our methods for learning to code all are provided within a safe, moderated community that is built
            around encouraging students to gain confidence in their abilities and do so without fear of failure.

          </AllTrustedcon2tent>

        </AllTrustedcon2>
        <AllTrustedcon3>
          <AllTrustedcon3ttent>
            {
              data.map(({ img }) => (
                <div>
                  <LogoTrusted>
                    <img src={img} style={{ width: "100%", height: "100%" }} />

                  </LogoTrusted>
                </div>
              ))
            }

          </AllTrustedcon3ttent>

        </AllTrustedcon3>

      </AllTrusted>
    </div>
  )
}

export default Trusted
