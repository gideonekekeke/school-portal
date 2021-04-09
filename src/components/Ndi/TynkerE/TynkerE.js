import React from 'react'
import Card from '../Card/Card'
import {
  MainTYker,
  MainTYker1,
  MainTYker2,
  MainTYker3

} from "./TykerStyle"
import cardimg from "../../img/kids-coding-card.png"
import cardimg2 from "../../img/live-classes.png"
import cardimg3 from "../../img/mobile-card.png"

function TynkerE() {
  return (
    <div>
      <center>
        <MainTYker>
          <MainTYker1>
            Tynker: Empowering Kids to Create with Code

          </MainTYker1>
          <MainTYker2>
            —with just the internet and a computer or tablet

          </MainTYker2>
          <MainTYker3>
            <Card background="purple" imagepath={cardimg} title="Why should kids learn to code" />
            <Card background="#466BF9" imagepath={cardimg2} title="NEW! Live Online Classes With a Tynker Teacher" />
            <Card background="#37A6C7" imagepath={cardimg3} title="Learn To Code On The Go!" />

          </MainTYker3>

        </MainTYker>
      </center>

    </div>
  )
}

export default TynkerE
