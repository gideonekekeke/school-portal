import React from 'react'
import cardimg from "../../img/kids-coding-card.png"
import { Button } from "antd"
import "./Cardstyle.css"
import {
  Cardmain
} from "./CardStyle"

function Card(props) {
  return (
    <div >
      <Cardmain clr={props.background} >
        <div style={{
          height: "250px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"

        }}>
          <div style={{
            height: "210px",
            width: "54%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            // backgroundImage: `URL(${props.imagepath})`
          }}>
            <img src={props.imagepath} style={{ width: "100%", height: "100%" }} />
          </div>



        </div>
        <div style={{
          height: "auto",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",

        }}>

          {props.title}



        </div>
        <div style={{
          height: "80px",
          width: "100%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Button
            style={{
              background: "#fd9013",
              border: "none",
              color: "white",
              height: "50px",
              borderRadius: "5px",
              width: " 150px",
              fontSize: "15px",
              fontWeight: "bold",

            }}
          >
            LEARN MORE
          </Button>

        </div>
      </Cardmain>
    </div>
  )
}

export default Card
