import { useState, useEffect } from "react";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data.json";
import { useParams, Link } from "react-router-dom";

function Planet(props) {
  const params = useParams();
  const object = data.find((element) => {
    return element.name.toLowerCase() === params.name;
  });
  const {
    name,
    overview,
    structure,
    geology,
    images,
    rotation,
    revolution,
    radius,
    temperature,
    color,
  } = object;
  const [backgroundColor, setBackgroundColor] = useState(color);
  useEffect(() => {
    setBackgroundColor(color);
  }, [object]);

  document.documentElement.style.setProperty(
    "--my-background-color",
    backgroundColor
  );
  const [planet, setPlanet] = useState("overview");
  const Overview = () => {
    setPlanet("overview");
  };
  const Structure = () => {
    setPlanet("structure");
  };
  const Surface = () => {
    setPlanet("surface");
  };
  return (
    <>
      <nav>
        <div className={props.active ? "Disable" : "Active"}>
          <p
            className={planet == "overview" ? "clicked_btn" : "btn"}
            onClick={Overview}
          >
            OVERVIEW
          </p>
          <p
            className={planet == "structure" ? "clicked_btn" : "btn"}
            onClick={Structure}
          >
            Structure
          </p>
          <p
            className={planet == "surface" ? "clicked_btn" : "btn"}
            onClick={Surface}
          >
            Surface
          </p>
        </div>
        <div className={props.active ? "mobile_planets" : "Disable"}>
          <div className="mobile_box Mercury">
            <div className="circle mercury"></div>
            <Link
              onClick={props.activeButton}
              to="/mercury"
              className="mobile_planets_name spartan"
            >
              mercury
            </Link>
          </div>
          <div className="mobile_box">
            <div className="circle venus"></div>
            <Link
              onClick={props.activeButton}
              to="/venus"
              className="mobile_planets_name spartan"
            >
              venus
            </Link>
          </div>

          <div className="mobile_box">
            <div className="circle earth"></div>
            <Link
              onClick={props.activeButton}
              to="/earth"
              className="mobile_planets_name spartan"
            >
              earth
            </Link>
          </div>

          <div className="mobile_box">
            <div className="circle mars"></div>
            <Link
              onClick={props.activeButton}
              to="/mars"
              className="mobile_planets_name spartan"
            >
              mars
            </Link>
          </div>

          <div className="mobile_box">
            <div className="circle jupiter"></div>

            <Link
              onClick={props.activeButton}
              to="/jupiter"
              className="mobile_planets_name spartan"
            >
              jupiter
            </Link>
          </div>

          <div className="mobile_box">
            <div className="circle saturn"></div>

            <Link
              onClick={props.activeButton}
              to="/saturn"
              className="mobile_planets_name spartan"
            >
              saturn
            </Link>
          </div>

          <div className="mobile_box">
            <div className="circle uranus"></div>
            <Link
              onClick={props.activeButton}
              to="/uranus"
              className="mobile_planets_name spartan"
            >
              uranus
            </Link>
          </div>
          <div className="mobile_box">
            <div className="circle neptune "></div>
            <Link
              onClick={props.activeButton}
              to="/neptune"
              className="mobile_planets_name spartan"
            >
              neptune
            </Link>
          </div>
        </div>
      </nav>
      <Main
        name={name}
        structure={structure}
        geology={geology}
        overview={overview}
        images={images}
        button={planet}
        Overview={Overview}
        Structure={Structure}
        Surface={Surface}
      />
      <Footer
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
        structure={structure}
      />
    </>
  );
}
export default Planet;
