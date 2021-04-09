import React, { useState, useEffect, useContext } from "react";
import { Layout, Menu } from "antd";
// import HeaderViewer from "../HeaderViewer";

import {
  HeaderFile,
  FolderOpenOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BulbOutlined,
  BarChartOutlined,
  SolutionOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { AppContext } from "../../GlobalAuth/GlobalAuth";
import CurriculumHolder from "../components/Peter/CurriculumHolder";
import CoursesPaage from "./CoursesPaage";
import ReportPage from "./ReportPage";
import SelectACourse from "./SelectYourCourse";
import ShowTheCourse from "./ShowTheCourse";

const { Header, Footer, Sider, Content } = Layout;

const Dashboard1 = () => {
  const { datause } = React.useContext(AppContext);
  const { current } = React.useContext(AppContext)


  const [toggle, setToggle] = useState(true);
  const [courses, setCourses] = useState(true);
  const [report, setReport] = useState(false);
  const [perform, setPerform] = useState(false);
  const [show, setShow] = useState(false);

  const Toggled = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          background: "#2E3347"

        }}
      >
        <Sider
          style={{
            height: "100vh",
            color: "white",
            zIndex: "1",
            background: "#2E3347"
          }}
          collapsed={toggle}
        >
          {toggle ? (
            <MenuUnfoldOutlined
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                margin: "10px 25px",
                cursor: "pointer",

              }}
              onClick={Toggled}
            />
          ) : (
            <MenuFoldOutlined
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                margin: "10px 25px",
                cursor: "pointer",
              }}
              onClick={Toggled}
            />
          )}

          <Menu style={{
            background: '#2E3347'
          }} mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item
              style={{
                display: "flex",
                alignItems: "center",
                margin: "30px 0",
                height: "60px",
                color: "white",
                background: "red"
              }}
              onClick={() => {
                setCourses(true);
                setReport(false);
                setPerform(false);
                setShow(false);
              }}
              key="1"
              icon={
                <UserOutlined
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "10px 0px",
                    cursor: "pointer",

                  }}
                />
              }
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  marginLeft: "10px",
                  textTransform: "uppercase",
                }}
              >
                Course
              </div>
            </Menu.Item>

            <Menu.Item
              style={{
                display: "flex",
                alignItems: "center",
                margin: "30px 0",
                height: "60px",
                color: "white"
              }}
              onClick={() => {
                setCourses(false);
                setReport(true);
                setPerform(false);
                setShow(false);
              }}
              key="2"
              icon={
                <VideoCameraOutlined
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "10px 0px",
                    cursor: "pointer",
                  }}
                />
              }
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  marginLeft: "10px",
                  textTransform: "uppercase",
                }}
              >
                Report
              </div>
            </Menu.Item>

            <Menu.Item
              style={{
                display: "flex",
                alignItems: "center",
                margin: "30px 0",
                height: "60px",
                color: "white"
              }}
              onClick={() => {
                setCourses(false);
                setReport(false);
                setPerform(true);
                setShow(false);
                console.log(perform);
              }}
              key="3"
              icon={
                <UploadOutlined
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "10px 0px",
                    cursor: "pointer",
                  }}
                />
              }
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  marginLeft: "10px",
                  textTransform: "uppercase",
                }}
              >
                Performance
              </div>
            </Menu.Item>

            <Menu.Item
              style={{
                display: "flex",
                alignItems: "center",
                margin: "30px 0",
                height: "60px",
                color: "white"
              }}
              onClick={() => {
                setCourses(false);
                setReport(false);
                setPerform(false);
                setShow(true);
                console.log(perform);
              }}
              key="4"
              icon={
                <FolderOpenOutlined
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "10px 0px",
                    cursor: "pointer",
                  }}
                />
              }
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  marginLeft: "10px",
                  textTransform: "uppercase",
                }}
              >
                Show
              </div>
            </Menu.Item>
          </Menu>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {current ? (
              <img
                src={datause && datause.avatar}
                alt="Avatar"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "2px solid white",
                  objectFit: "cover",
                }}
              />
            ) : null}
          </div>
          <div>
            {current ? (
              <h3
                style={{
                  color: "white",
                  lineHeight: "1",
                  fontSize: "12px",
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "10px",
                }}
              >
                {" "}
                {datause && datause.name}{" "}
              </h3>
            ) : null}
          </div>
        </Sider>{" "}
        {courses ? (
          <Content style={{ backgroundColor: "#EDF8FF" }}>
            <CoursesPaage />
          </Content>
        ) : report ? (
          <Content>
            {" "}
            <ReportPage />{" "}
          </Content>
        ) : perform ? (
          <Content>
            {" "}
            <SelectACourse />
          </Content>
        ) : show ? (
          <Content>
            {" "}
            <ShowTheCourse />
          </Content>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard1;
