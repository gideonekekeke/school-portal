import React from 'react'
import {

  TestCard1,
  Test1,
  Test2,
  NameTest, ImageTest,
  Imagecon

} from "./TestCardStyle"
import img from "../../img/testimonial-student-cropped.png"

function TestCard() {
  return (
    <div>
      <TestCard1>
        <Test1>

          <div style={{ textAlign: "start", width: "60%", height: "auto", fontSize: "20px", display: "flex" }}>
            <div style={{ fontSize: "100px", color: "#06AFA6", marginTop: "-30px" }}>"</div>I thought a game was going to be extremely hard to make, but Tynker made it really easy.
              </div>

        </Test1>
        <Test2>
          <NameTest>
            <div style={{ fontWeight: "bold" }}>
              Anthony grace
              </div>
            <div>

              student
                </div>
          </NameTest>
          <Imagecon>
            <ImageTest>
              <img src={img} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }} />

            </ImageTest>

          </Imagecon>


        </Test2>
      </TestCard1>
    </div>
  )
}

export default TestCard
