import React from "react";

function Body() {
  return (
    <div>
      <center>
        <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
          What Stack are you
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            backgroundColor: "red",
            justifyContent: "space-btween",
          }}
        >
          <div>Button1</div>
          <div>Button2</div>
          <div>Button3</div>
        </div>
      </center>
    </div>
  );
}

export default Body;
