import React, { useState } from "react";
import Home from "./pages/Home";
import Nav from "./comps/Nav";
function App() {
  const [show, setShow] = useState(false);
  const navToggle = () => {
    setShow(!show);
  };
  return (
    <>
      <div className={show ? "overlay d-block" : "overlay d-none"}></div>
      <div className="container sub-container">
        <Nav show={show} navToggle={navToggle} />
        <Home />

      </div>
    </>
  );
}

export default App;
