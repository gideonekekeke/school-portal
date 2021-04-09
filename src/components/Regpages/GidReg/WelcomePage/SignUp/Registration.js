import React, { useState, useEffect } from "react";
import "./registration.css";
import img from "../../img/sign.png";
import { Button, Input } from "antd";

import { Link, useHistory } from "react-router-dom";
import { FaTimes } from "react-icons/fa";



// const authUser = app.firestore().collection("user");
const Registration = () => {
  const hist = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pix, setPix] = useState("");

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // const SignInUser = async () => {
  //   await app.auth().signInWithEmailAndPassword(email, password);
  //   history.push("/dashboard");
  // };

  // const uploadImage = async (e) => {
  //   const file = e.target.files[0];
  //   const storageRef = app.storage().ref();
  //   const fileRef = storageRef.child(file.name);
  //   await fileRef.put(file);
  //   setPix(await fileRef.getDownloadURL());
  // };

  // const SignUpUser = async () => {
  //   const newUser = await app
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password);

  //   authUser.doc(newUser.user.uid).set({
  //     name,
  //     email,
  //     password,
  //     avatar: await pix,
  //   });
  //   history.push("/dashboard");
  // };

  return (
    <div
      className="register__container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <br />
      <br />

      <center>
        <Link
          to="/"
          style={{
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "20px",
            color: "black",
          }}
        >
          School Logo Here
        </Link>
      </center>
      <br />

      <center className="registration">

        <div className="reg__form">
          {toggle ? (
            <div className="reg_holder">
              <div className="holderArrange">
                <br />

                <label>Avatar</label>

                <Input
                  placeholder="Picture"
                  type="file"
                // onChange={uploadImage}
                />
              </div>

              <div className="holderArrange">
                <label>Name</label>

                <Input
                  style={{ height: "30px", width: "250px" }}
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="holderArrange">
                <label>Email</label>

                <Input
                  style={{ height: "30px", width: "250px" }}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="holderArrange">
                <label>Password</label>

                <Input
                  style={{ height: "30px", width: "250px" }}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <br />
              <Button
                onClick={() => {
                  hist.push("/1");
                }}
                style={{
                  height: "50%",
                  width: "100px",
                  backgroundColor: "red",
                }}
                type="primary"
                danger
                style={{
                  width: "90%",
                  fontWeight: "bold",
                }}
              // onClick={SignUpUser}
              >
                Sign Up
              </Button>
              <br />
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div>Already have an Account,</div>
                <div
                  style={{
                    marginLeft: "5px",
                    color: "red",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  onClick={handleToggle}
                >
                  Sign In here
                </div>
              </div>
            </div>
          ) : (
            <div className="reg_holder">
              <br />
              <br />

              <div className="holderArrange">
                <label>Email</label>

                <Input
                  style={{ height: "30px", width: "250px" }}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="holderArrange">
                <label>Password</label>

                <Input
                  style={{ height: "30px", width: "250px" }}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <br />
              <Button
                onClick={() => {
                  hist.push("/1");
                }}
                type="primary"
                // danger
                style={{
                  width: "90%",
                  fontWeight: "bold",
                }}
              // onClick={SignInUser}
              >
                Sign In
              </Button>
              <br />
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div>Don't have an Account,</div>
                <div
                  style={{
                    marginLeft: "5px",
                    color: "#41A8FC",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  onClick={handleToggle}
                >
                  Sign Up here
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="reg_holder1">
          <div className="content__piece">Create a free Student's Account</div>
          <div className="bullet">
            <div className="bullet__space"></div>
            <div>20 free coding games</div>
          </div>
          <div className="bullet">
            <div className="bullet__space"></div>
            <div>All Minecraft skins and mods</div>
          </div>
          <div className="bullet">
            <div className="bullet__space"></div>
            <div>Free Minecraft private server</div>
          </div>
          <div className="bullet">
            <div className="bullet__space"></div>
            <div>Play more projects</div>
          </div>
          <div>
            <img
              src={img}
              alt="sign"
              style={{
                height: "90px",
                width: "90px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </center>
      <br />
      <br />

    </div >
  );
};

export default Registration;
