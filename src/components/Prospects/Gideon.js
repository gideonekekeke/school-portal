import React from "react";
import "./prospects.css";
import pic from "./img/1.png";
import pic1 from "./img/2.jpg";
import pic3 from "./img/3.jpg";
import pic4 from "./img/4.png";
import pic5 from "./img/5.gif";
import pic6 from "./img/6.jpg";
import { Button } from "antd";
import Background from "./Background";

function Gideon({ bg, beg, back }) {
  return (
    <>
      <div className="container">
        <div className="container_body">
          <div className="container_header">
            {" "}
            Games You Can Create Within A Year
          </div>
          <p>
            Award-winning coding courses let Students create apps and games,
            make art, mod Minecraft, even control robots and drones—with 1,200+
            activities!
          </p>
          <div className="img_header">
            <img style={{ height: "100%", width: "100%" }} src={pic} />
          </div>
        </div>
      </div>
      <div className="highly_rated">
        3 Highly-Rated Mobile Apps for Learning Code
      </div>

      <div className="card_background">
        <Background bg="#007d8a" tt="BASIC" img={pic1} back="green" />
        <Background bg="#2950b5" tt="INTERMEDIATE" img={pic1} back="black" />
        <Background bg="#4928b4" tt="ADVANCE" img={pic1} back="yellow" />
      </div>
      <div className="gaming">
        <div className="gaming_text">
          <h3>Basic</h3>
          <h4>Ages 1 - 6</h4>
          <h5>
            Ten creative coding courses, complete with voice instructions, offer
            fun picture block-coding for ages 5-7.
          </h5>
          <Button
            style={{
              marginTop: "5px",
              height: "40px",
              width: "100px",
              backgroundColor: "#FD7F00",
              color: "white",

              border: "none",
              fontWeight: "bold",
            }}
          >
            Learn More
          </Button>
        </div>
        <div className="gaming_image">
          <img
            style={{ height: "100%", width: "100%", borderRadius: "20px" }}
            src={pic4}
          />
        </div>
      </div>

      <div className="gaming1">
        <div className="gaming_image">
          <img
            style={{ height: "100%", width: "100%", borderRadius: "20px" }}
            src={pic5}
          />
        </div>
        <div className="gaming_text1">
          <h3>Basic</h3>
          <h4>Ages 7 - 9</h4>
          <h5>
            Sixteen exciting courses to learn how to build apps, games, and
            robots with code—a perfect way to learn block coding for ages 7-9.
          </h5>
          <Button
            style={{
              height: "40px",
              width: "100px",
              backgroundColor: "#FD7F00",
              color: "white",

              border: "none",
              fontWeight: "bold",
            }}
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="gaming3">
        <div className="gaming_text">
          <h3>Advanced</h3>
          <h4>Ages 10 +</h4>
          <h5>
            Two self-paced courses that introduce modding with code—another
            great way to learn block coding for ages 10-16.
          </h5>
          <Button
            style={{
              marginTop: "5px",
              height: "40px",
              width: "100px",
              backgroundColor: "#FD7F00",
              color: "white",

              border: "none",
              fontWeight: "bold",
            }}
          >
            Learn More
          </Button>
        </div>
        <div className="gaming_image">
          <img
            style={{ height: "100%", width: "100%", borderRadius: "20px" }}
            src={pic6}
          />
        </div>
      </div>
    </>
  );
}

export default Gideon;
