import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import NdiHome from "./components/Ndi/NdiHome";
import NavBar from "./components/NavBar/index";
import SideBar from "./components/SideBar/SideBar";
import React from "react"
import Footer from "./components/Footer";
import Elementry from "./components/samuel/Elementry/Elementry"
import CurriculumHolder from "./components/Peter/CurriculumHolder";
import Gideon from "./components/Prospects/Gideon";
import Overview from "./components/ola/Overview/MainPart/Overview"
import WhatisCodingPage from "./components/Lakun/WhatisCodingPage"
import RegModal from "./components/Regpages/RegModal"
import First from "./components/Regpages/GidReg/WelcomePage/First"
import Second from "./components/Regpages/GidReg/WelcomePage/Second"
import pry from "./components/Regpages/GidReg/SchoolPage/PrimaryPage"
import jun from "./components/Regpages/GidReg/SchoolPage/JuniorPage"
import sen from "./components/Regpages/GidReg/SchoolPage/SeniorPage"
import SelectCourse from "./components/Regpages/GidReg/WelcomePage/SelectCourse"
import Registration from "./components/Regpages/GidReg/WelcomePage/SignUp/Registration";
import Dashboard from "./components/Dash/DashBord/Dashboard"
import { AppProvider } from "./components/GlobalAuth/GlobalAuth"


function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AppProvider>
      <Router>
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={NdiHome} />
          <Route exact path="/Elementry" component={Elementry} />
          <Route exact path="/curriculum" component={CurriculumHolder} />
          <Route exact path="/prospect" component={Gideon} />
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/whatis" component={WhatisCodingPage} />
          <Route exact path="/Gidreg" component={Registration} />
          <Route exact path="/Regmodel" component={RegModal} />
          <Route exact path="/dasboard" component={Dashboard} />
          <Route exact path="/first" component={First} />
          <Route exact path="/second" component={Second} />
          <Route exact path="/course" component={SelectCourse} />
          <Route exact path="/pry" component={pry} />
          <Route exact path="/jun" component={jun} />
          <Route exact path="/sen" component={sen} />
        </Switch>

      </Router>
    </AppProvider>
  );
}

export default App;

// <Footer />
