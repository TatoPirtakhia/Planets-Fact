import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Planet from "./Planet";
import { useState } from "react";
function App() {
  const [hamburgerButton, sethamburgerButton] = useState(false);
  const active = () => {
    sethamburgerButton(!hamburgerButton);
    if (hamburgerButton) {
     
      document.body.style.overflow = "visible";
    }
    else{
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <div className="App">
        <header>
          <h1 className="header_title antonio">THE PLANETS</h1>
          <svg
            onClick={active}
            className="hamburger"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="17"
          >
            <g fill={hamburgerButton ? "#38384F" : "#FFF"} fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </svg>
          <div className="tablet_menu">
            <Link to="/mercury" className="tablet_title spartan">
              mercury
            </Link>
            <Link to="/venus" className="tablet_title spartan">
              venus
            </Link>
            <Link to="/earth" className="tablet_title spartan">
              earth
            </Link>
            <Link to="/mars" className="tablet_title spartan">
              mars
            </Link>
            <Link to="/jupiter" className="tablet_title spartan">
              jupiter
            </Link>
            <Link to="/saturn" className="tablet_title spartan">
              saturn
            </Link>
            <Link to="/uranus" className="tablet_title spartan">
              uranus
            </Link>
            <Link to="/neptune" className="tablet_title spartan">
              neptune
            </Link>
          </div>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/mercury" />} />
        <Route
          path="/:name"
          element={<Planet activeButton={active} active={hamburgerButton} />}
        />
      </Routes>
    </>
  );
}

export default App;
