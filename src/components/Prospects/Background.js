import React from "react";
import "./prospects.css";
import { Button } from "antd";
import { v4 as uuid } from "uuid";
import DetailScreen from "./Modal";
function Background({ bg, tt, img }) {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="card_background">
      <div
        className="card"
        style={{
          height: "350px",
          id: uuid(),
          backgroundColor: bg,
          borderRadius: "20px",
          boxShadow: "3px 3px 10px -3px gray",
          display: "flex",
          fontFamily: "poppins",
          alignItems: "center",
          flexDirection: "column",
          margin: " 0 30px",
        }}
      >
        <div
          style={{
            color: "white",
            fontFamily: "poppins",
            marginTop: "40px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {tt}
        </div>
        <div className="image_circle">
          <img
            style={{ height: "100%", width: "100%", borderRadius: "50px" }}
            src={img}
          />
        </div>
        <div
          style={{
            color: "white",
            fontSize: "13px",
            fontWeight: "",
            marginTop: "20px",
          }}
        >
          Ages 1 - 6
        </div>
        <div
          style={{
            width: "80%",
            textAlign: "center",
            color: "white",
            marginTop: "15px",
          }}
        >
          Even Pre-readers can learn to code!
        </div>
        {open ? <DetailScreen tt={tt} bg={bg} img={img} /> : null}
      </div>
    </div>
  );
}

export default Background;
