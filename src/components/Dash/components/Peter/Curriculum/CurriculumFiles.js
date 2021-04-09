import { Button, Modal } from "antd";
import React, { useState } from "react";
import { LaptopOutlined } from "@ant-design/icons";
import "./Curriculum.css";
import pix from "../image/9.png";
import SampleHoder from "./SampleHoder";
import { app } from "../../../../Peter/firebase";
// import ModalNav from "../ModalNav/ModalNav";
import { useHistory } from "react-router-dom";
import sampComp from "../ModalNav/sampComp";
import ModalNav from "../ModalNav/ModalNav";
import MUModal from "../ModalNav/MUmodal";

import { v4 as uuid } from "uuid";

const db = app.firestore().collection("peter");
const courseSelection = app.firestore().collection("studentreg");

const CurriculumFiles = () => {
  const hist = useHistory();
  const [visible, setVisible] = useState(true);
  const [beginer, setBeginer] = useState(false);
  const [intermediate, setIntermediate] = useState(false);
  const [advance, setAdvance] = useState(false);

  const [advanceData, setAdvanceData] = useState([]);
  const [intermediateData, setIntermediateData] = useState([]);
  const [beginersData, setBeginersData] = useState([]);

  const [readUserData, setReadUserData] = React.useState([])
  const [readUserData5, setReadUserData5] = React.useState([])
  const [readUserData6, setReadUserData6] = React.useState([])

  const [readUserDatajs1, setReadUserDatajs1] = React.useState([])
  const [readUserDatajs2, setReadUserDatajs2] = React.useState([])
  const [readUserDatajs3, setReadUserDatajs3] = React.useState([])

  const [readUserDatass1, setReadUserDatass1] = React.useState([])
  const [readUserDatass2, setReadUserDatass2] = React.useState([])
  const [readUserDatass3, setReadUserDatass3] = React.useState([])

  const [data, setData] = useState([]);



  const readTask = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("pr4")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserData(item)
          })
      console.log(readUserData)
    }

  }

  const readTask5 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("pr5")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserData5(item)
          })
      console.log(readUserData5)
    }

  }

  const readTask6 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("pr6")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserData6(item)
          })
      console.log(readUserData5)
    }

  }

  /// this is for jss class

  const readTaskjs1 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("js1")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserDatajs1(item)
          })
      console.log(readUserData5)
    }

  }

  const readTaskjs2 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("js2")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserDatajs2(item)
          })
      console.log(readUserData5)
    }

  }

  const readTaskjs3 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("js3")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserDatajs3(item)
          })
      console.log(readUserData5)
    }

  }


  // this is for the ss class

  const readTaskss1 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("ss1")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserDatass1(item)
          })
      console.log(readUserData5)
    }

  }

  const readTaskss2 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("ss2")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserDatass2(item)
          })
      console.log(readUserData5)
    }

  }

  const readTaskss3 = async () => {
    const getCourse = await app.auth().currentUser

    if (getCourse) {
      await
        courseSelection.doc(getCourse.uid)
          .collection("ss3")
          .onSnapshot((snap) => {
            const item = []
            snap.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id })
            });
            setReadUserDatass3(item)
          })
      console.log(readUserData5)
    }

  }










  // console.log(advanceData);

  React.useEffect(() => {


    readTask()
    readTask5()
    readTask6()
    readTaskjs1()
    readTaskjs2()
    readTaskjs3()
    readTaskss1()
    readTaskss2()
    readTaskss3()

  }, []);

  return (
    <div className="courseData">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {readUserData.map(({ id, sub1, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub1.Image} alt="pix1" className="image" />
                <h3>{sub1.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub1.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub1.desc}
                image={sub1.Image}

              />
            ) : null}
          </div>
        ))}

        {readUserData.map(({ id, sub2, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub2.Image} alt="pix1" className="image" />
                <h3>{sub2.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub2.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub2.desc}
                image={sub2.Image}

              />
            ) : null}
          </div>
        ))}
        {readUserData.map(({ id, sub3, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub3.Image} alt="pix1" className="image" />
                <h3>{sub3.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub3.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub3.desc}
                image={sub3.Image}

              />
            ) : null}
          </div>
        ))}


      </div>
      <div

        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {readUserData5.map(({ id, sub1, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub1.Image} alt="pix1" className="image" />
                <h3>{sub1.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub1.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub1.desc}
                image={sub1.Image}

              />
            ) : null}
          </div>
        ))}

        {readUserData5.map(({ id, sub2, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub2.Image} alt="pix1" className="image" />
                <h3>{sub2.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub2.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub2.desc}
                image={sub2.Image}

              />
            ) : null}
          </div>
        ))}
        {readUserData5.map(({ id, sub3, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub3.Image} alt="pix1" className="image" />
                <h3>{sub3.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub3.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub3.desc}
                image={sub3.Image}

              />
            ) : null}
          </div>
        ))}


      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {readUserData6.map(({ id, sub1, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub1.Image} alt="pix1" className="image" />
                <h3>{sub1.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub1.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub1.desc}
                image={sub1.Image}

              />
            ) : null}
          </div>
        ))}

        {readUserData6.map(({ id, sub2, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub2.Image} alt="pix1" className="image" />
                <h3>{sub2.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub2.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub2.desc}
                image={sub2.Image}

              />
            ) : null}
          </div>
        ))}
        {readUserData6.map(({ id, sub3, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub3.Image} alt="pix1" className="image" />
                <h3>{sub3.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub3.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub3.desc}
                image={sub3.Image}

              />
            ) : null}
          </div>
        ))}


      </div>




      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {readUserDatajs1.map(({ id, sub1, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub1.Image} alt="pix1" className="image" />
                <h3>{sub1.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub1.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub1.desc}
                image={sub1.Image}

              />
            ) : null}
          </div>
        ))}

        {readUserDatajs1.map(({ id, sub2, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub2.Image} alt="pix1" className="image" />
                <h3>{sub2.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub2.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub2.desc}
                image={sub2.Image}

              />
            ) : null}
          </div>
        ))}
        {readUserDatajs1.map(({ id, sub3, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub3.Image} alt="pix1" className="image" />
                <h3>{sub3.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub3.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub3.desc}
                image={sub3.Image}

              />
            ) : null}
          </div>
        ))}


      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {readUserDatajs2.map(({ id, sub1, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub1.Image} alt="pix1" className="image" />
                <h3>{sub1.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub1.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub1.desc}
                image={sub1.Image}

              />
            ) : null}
          </div>
        ))}

        {readUserDatajs2.map(({ id, sub2, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub2.Image} alt="pix1" className="image" />
                <h3>{sub2.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub2.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub2.desc}
                image={sub2.Image}

              />
            ) : null}
          </div>
        ))}
        {readUserDatajs2.map(({ id, sub3, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub3.Image} alt="pix1" className="image" />
                <h3>{sub3.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub3.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub3.desc}
                image={sub3.Image}

              />
            ) : null}
          </div>
        ))}


      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {readUserDatajs3.map(({ id, sub1, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub1.Image} alt="pix1" className="image" />
                <h3>{sub1.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub1.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub1.desc}
                image={sub1.Image}

              />
            ) : null}
          </div>
        ))}

        {readUserDatajs3.map(({ id, sub2, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub2.Image} alt="pix1" className="image" />
                <h3>{sub2.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub2.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub2.desc}
                image={sub2.Image}

              />
            ) : null}
          </div>
        ))}
        {readUserDatajs3.map(({ id, sub3, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub3.Image} alt="pix1" className="image" />
                <h3>{sub3.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub3.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub3.desc}
                image={sub3.Image}

              />
            ) : null}
          </div>
        ))}


      </div>




      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {readUserDatass1.map(({ id, sub1, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub1.Image} alt="pix1" className="image" />
                <h3>{sub1.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub1.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub1.desc}
                image={sub1.Image}

              />
            ) : null}
          </div>
        ))}

        {readUserDatass1.map(({ id, sub2, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub2.Image} alt="pix1" className="image" />
                <h3>{sub2.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub2.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub2.desc}
                image={sub2.Image}

              />
            ) : null}
          </div>
        ))}
        {readUserDatass1.map(({ id, sub3, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub3.Image} alt="pix1" className="image" />
                <h3>{sub3.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub3.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub3.desc}
                image={sub3.Image}

              />
            ) : null}
          </div>
        ))}


      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {readUserDatass2.map(({ id, sub1, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub1.Image} alt="pix1" className="image" />
                <h3>{sub1.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub1.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub1.desc}
                image={sub1.Image}

              />
            ) : null}
          </div>
        ))}

        {readUserDatass2.map(({ id, sub2, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub2.Image} alt="pix1" className="image" />
                <h3>{sub2.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub2.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub2.desc}
                image={sub2.Image}

              />
            ) : null}
          </div>
        ))}
        {readUserDatass2.map(({ id, sub3, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub3.Image} alt="pix1" className="image" />
                <h3>{sub3.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub3.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub3.desc}
                image={sub3.Image}

              />
            ) : null}
          </div>
        ))}


      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {readUserDatass3.map(({ id, sub1, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub1.Image} alt="pix1" className="image" />
                <h3>{sub1.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub1.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub1.desc}
                image={sub1.Image}

              />
            ) : null}
          </div>
        ))}

        {readUserDatass3.map(({ id, sub2, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub2.Image} alt="pix1" className="image" />
                <h3>{sub2.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub2.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub2.desc}
                image={sub2.Image}

              />
            ) : null}
          </div>
        ))}
        {readUserDatass3.map(({ id, sub3, }) => (
          <div
            key={id}
            className="card"
            style={{
              background: "white",
              width: "300px",
              height: "390px",
              margin: "0px 10px",
              marginTop: "20px",
              borderRadius: "5px",
            }}
          >
            <div
              className="courseData"
              onClick={(id) => {
                setVisible(true);
                // hist.push("/modal");
              }}
            >
              <div className="course__hover">
                <img src={sub3.Image} alt="pix1" className="image" />
                <h3>{sub3.title} </h3>
                <div className="course__side">
                  {/* <p> {level}</p> */}
                  <div className="course__sideInner">
                    <LaptopOutlined />

                  </div>
                </div>
                <p className="course__p">{sub3.desc}</p>
              </div>
            </div>
            {visible ? (
              <MUModal
                id={id}
                desc={sub3.desc}
                image={sub3.Image}

              />
            ) : null}
          </div>
        ))}


      </div>
    </div>
  );
};

export default CurriculumFiles;

// <Modal
// title="Modal 1000px width"
// centered
// visible={visible}
// onOk={() => setVisible(false)}
// onCancel={() => setVisible(false)}
// width={1000}
// >
// <p>some contents...</p>
// <p>some contents...</p>
// <p>some contents...</p>
// </Modal>

// <div className="samp">
//                 <SampleHoder />
//                 <SampleHoder />
//               </div>

// <div className="course__container">THe Card</div>

// {data.map(({ id, course, avatar, level, description }) => (
//   <div
//     key={id}
//     className="card"
//     style={{
//       // background: "red",
//       width: "300px",
//       height: "350px",
//       margin: "0px 10px",
//       marginTop: "20px",
//     }}
//   >
//     <div className="courseData">
//       <div className="course__hover">
//         <img src={avatar} alt="pix1" className="image" />
//         <h3>{course} </h3>
//         <div className="course__side">
//           <p> {level}</p>
//           <div className="course__sideInner">
//             <LaptopOutlined />
//             <p>web</p>
//           </div>
//         </div>
//         <p className="course__p">{description}</p>
//       </div>
//     </div>
//   </div>
// ))}

// <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//         }}
//       >
//         {data.map(({ id, course, avatar, level, description }) => (
//           <div
//             key={id}
//             className="card"
//             style={{
//               // background: "red",
//               width: "300px",
//               height: "350px",
//               margin: "0px 10px",
//               marginTop: "20px",
//             }}
//           >
//             <div className="courseData">
//               <div className="course__hover">
//                 <img src={avatar} alt="pix1" className="image" />
//                 <h3>{course} </h3>
//                 <div className="course__side">
//                   <p> {level}</p>
//                   <div className="course__sideInner">
//                     <LaptopOutlined />
//                     <p>web</p>
//                   </div>
//                 </div>
//                 <p className="course__p">{description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

// <Button
//   onClick={(e) => {
//     setBeginer(false);
//     setIntermediate(false);
//     setAdvance(false);
//     console.log("You just Click Advance");
//     console.log("beginer: " + beginer);
//     console.log("intermediate: " + intermediate);
//     console.log("advance: " + advance);
//   }}
// >
//   All
// </Button>
