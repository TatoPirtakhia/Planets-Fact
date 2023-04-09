import "./Main.css";
import source from "./images/icon-source.svg";
import { useState } from "react";
function Main(props) {

  return (
    <div className="main">
      <div className="image">
        <img src={require(`${props.data.image}`)} alt="mercury" />
      </div>
      <div className="main_container">
        <div className="About">
          <h1 className="title ANtonio">{props.data.name}</h1>
          <p className="paragraph spartanMedium">{props.data.overview}</p>
          <div className="container">
            <p className="Source spartanMedium">Source : </p>
            <a
              href={props.data.source}
              target="_blank"
              className="wikipedia SPartan"
            >
              Wikipedia
            </a>
            <img src={source} alt="source" />
          </div>
        </div>
        <div className="main_buttons">
          <p className="mainButtons SPartan"><span className="buttons_number">01</span>OVERVIEW</p>
          <p className="mainButtons SPartan"><span className="buttons_number">02</span>Internal Structure</p>
          <p className="mainButtons SPartan"><span className="buttons_number">03</span>Surface Geology</p>
        </div>
      </div>
    </div>
  );
}
export default Main;
