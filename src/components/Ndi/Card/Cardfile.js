import React from 'react'
import Card from './Card'
import cardimg from "../../img/kids-coding-card.png"
import cardimg2 from "../../img/live-classes.png"
import cardimg3 from "../../img/mobile-card.png"


function Cardfile() {
  return (
    <div style={{ width: "100%", display: "flex", height: "auto" }}>
      <Card background="purple" imagepath={cardimg} title="Why should kids learn to code" />
      <Card background="#466BF9" imagepath={cardimg2} title="NEW! Live Online Classes With a Tynker Teacher" />
      <Card background="#37A6C7" imagepath={cardimg3} title="Learn To Code On The Go!" />
    </div>
  )
}

export default Cardfile
