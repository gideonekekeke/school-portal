import React from "react";
import ModalButton from "./Body/Body";
import Footer from "./Footer";


import NavBar from "./NavBar";
import SideBar from "./SideBar/SideBar";

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />

      <ModalButton />
      <Footer />
    </div>
  );
}

export default Home;
