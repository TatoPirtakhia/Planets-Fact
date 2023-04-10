import "./Main.css";
import source from "./images/icon-source.svg";

function Main(props) {
  return (
    <div className="main">
      <div className="image">
        <img width="200" height="200" src={props.button == "overview" ? require(`${props.images.planet}`):props.button == "structure"?require(`${props.images.internal}`):require(`${props.images.planet}`) } alt="mercury" />
        <div className={props.button == "surface" ? "active" : "disable"}>
          <img src={require(`${props.images.geology}`)} width="140" height="165" alt="mercury" />
        </div>
      </div>
      <div className="main_container">
        <div className="About">
          <h1 className="title ANtonio">{props.name}</h1>
          <p className="paragraph spartanMedium">{props.button == "overview" ? props.overview.content:props.button == "structure"? props.structure.content:props.geology.content}</p>
          <div className="container">
            <p className="Source spartanMedium">Source : </p>
            <a
              href={props.button == "overview" ? props.overview.source:props.button == "structure"? props.structure.source:props.geology.source}
              target="_blank"
              className="wikipedia SPartan"
            >
              Wikipedia
            </a>
            <img src={source} alt="source" />
          </div>
        </div>
        <div className="main_buttons">
          <p
            className={
              props.button == "overview" ? "clicked_mainButtons" : "mainButtons"
            }
            onClick={props.Overview}
          >
            <span className="buttons_number">01</span>OVERVIEW
          </p>
          <p
            className={
              props.button == "structure" ? "clicked_mainButtons" : "mainButtons"
            }
            onClick={props.Structure}
          >
            <span className="buttons_number">02</span>Internal Structure
          </p>
          <p
            className={
              props.button == "surface" ? "clicked_mainButtons" : "mainButtons"
            }
            onClick={props.Surface}
          >
            <span className="buttons_number">03</span>Surface Geology
          </p>
        </div>
      </div>
    </div>
  );
}
export default Main;
