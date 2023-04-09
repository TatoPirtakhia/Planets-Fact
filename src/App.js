import "./App.css";
import data from "./data.json";
import { useState } from "react";
import Main from "./Main";
import Footer from "./Footer";
function App() {
  const { name, overview, images, rotation, revolution, radius, temperature } =
    data[0];
  const [overviewBOrder, setOverviewBorder] = useState(true);
  const [structureBorder, setStructureBorder] = useState(false);
  const [surfaceBorder, setSurfaceBorder] = useState(false);
  const [component, setComponent] = useState({
    rotation: rotation,
    revolution: revolution,
    radius: radius,
    temperature: temperature,
  });
  const [Data, setData] = useState({
    name: name,
    overview: overview.content,
    source: overview.source,
    image: images.planet,
  });
  const Overview = () => {
    setOverviewBorder(true);
    setStructureBorder(false);
    setSurfaceBorder(false);
  };
  const Structure = () => {
    setOverviewBorder(false);
    setStructureBorder(true);
    setSurfaceBorder(false);
  };
  const Surface = () => {
    setOverviewBorder(false);
    setStructureBorder(false);
    setSurfaceBorder(true);
  };
  return (
    <>
      <div className="App">
        <header>
          <h1 className="header_title antonio">THE PLANETS</h1>
          <svg
            className="hamburger"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="17"
          >
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </svg>
          <div className="tablet_menu">
            <p className="tablet_title spartan">mercury</p>
            <p className="tablet_title spartan">venus</p>
            <p className="tablet_title spartan">earth</p>
            <p className="tablet_title spartan">mars</p>
            <p className="tablet_title spartan">jupiter</p>
            <p className="tablet_title spartan">saturn</p>
            <p className="tablet_title spartan">uranus</p>
            <p className="tablet_title spartan">neptune</p>
          </div>
        </header>
        <nav>
          <p
            className={overviewBOrder ? "clicked_btn" : "btn"}
            onClick={Overview}
          >
            OVERVIEW
          </p>
          <p
            className={structureBorder ? "clicked_btn" : "btn"}
            onClick={Structure}
          >
            Structure
          </p>
          <p
            className={surfaceBorder ? "clicked_btn" : "btn"}
            onClick={Surface}
          >
            Surface{" "}
          </p>
        </nav>
      </div>
      <Main data={Data} />
      <Footer component={component} />
    </>
  );
}

export default App;
