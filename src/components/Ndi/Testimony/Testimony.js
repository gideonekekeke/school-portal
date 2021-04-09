import React from 'react'

import {
  Alltest,
  TestCom,
  TestCard,
  Test1,
  Test2,
  NameTest,
  ImageTest,
  Imagecon,
  VidTest

} from "./TestStyle"
import img from "../../img/testimonial-student-cropped.png"
import data from "./Testimony.json"

function Testimony() {
  return (
    <div>
      <Alltest>
        <TestCom>
          {
            data.map(({ name, testimony, img, occupation }) => (
              <div>
                <TestCard>
                  <Test1>

                    <div style={{ textAlign: "start", width: "80%", height: "auto", fontSize: "20px", display: "flex" }}>
                      <div style={{ fontSize: "100px", color: "#06AFA6", marginTop: "-30px" }}>"</div>
                      {testimony}
                    </div>

                  </Test1>
                  <Test2>
                    <NameTest>
                      <div style={{ fontWeight: "bold" }}>
                        {name}
                      </div>
                      <div>

                        {occupation}
                      </div>
                    </NameTest>
                    <Imagecon>
                      <ImageTest>
                        <img src={img} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }} />

                      </ImageTest>

                    </Imagecon>


                  </Test2>
                </TestCard>
              </div>

            ))
          }

        </TestCom>

      </Alltest>

    </div>
  )
}

export default Testimony
