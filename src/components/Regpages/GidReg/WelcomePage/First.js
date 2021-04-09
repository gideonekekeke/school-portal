import React from "react";
import "./wel.css";
import pic from "../img/1.png";
import { Button } from "antd";
import { useHistory } from "react-router";
import { RightOutlined } from "@ant-design/icons";

function First() {
  const hist = useHistory();
  return (
    <div className="backdrop">
      <div className="backdrop_content">
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="backdrop_img">
            <img
              src={pic}
              style={{ height: "100", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              width: "80%",
              // background: "red",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            welcome  long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is
            that it has
            a more-or-less normal distribution of letters, as opposed to usi
          </div>
          <div className="my_button">
            <RightOutlined
              onClick={() => {
                hist.push("/second");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
