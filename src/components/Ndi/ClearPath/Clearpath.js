import React from 'react'
import {
  Cleatdiv,
  Cleatdiv1,
  Cleatdiv2,
  Cleatdivall



} from "./ClearStyle"

import pic from "../../img/ltc-learning-path.png"
import "./Clearstyle.css"

function Clearpath() {
  return (
    <div>
      <Cleatdiv>
        <Cleatdivall>
          <Cleatdiv1>
            <div className="path" >
              <h2>A clear path to coding confidence</h2>
            </div>
            <div className="contentpath">
              <p>
                Our interactive learning allows kids to progress at their own pace and seamlessly transition to text languages such as <b>JavaScript</b>and<b> Python.</b> Perhaps best of all, these
                coding games for kids make the learning process fun and engaging.
              </p>
              <p>
                <b>Children learn more when they’re having a good time</b>  and challenging themselves, and that’s exactly what our classes offer. They feature <b>individualized
                learning,</b> so the material is targeted to the child’s ability.
              </p>
              <p>
                Coding for teens, for instance, would be more challenging than for a 5-year-old beginner. There also are built-in tutorials and a range of hands-on projects that
                let learners put what they know into practice almost immediately.
              </p>

            </div>


          </Cleatdiv1>
          <Cleatdiv2>
            <img src={pic} style={{ width: "100%", height: "100%" }} />

          </Cleatdiv2>

        </Cleatdivall>


      </Cleatdiv>

    </div>
  )
}

export default Clearpath
