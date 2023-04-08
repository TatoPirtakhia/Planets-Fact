import "./Main.css";
import source from "./images/icon-source.svg";
function Main(props) {
  return (
    <div className="main">
      <div className="image">
        <img src={require(`${props.data.image}`)} alt="mercury" />
      </div>
      <h1 className="title antonio">{props.data.name}</h1>
      <p className="paragraph spartanMedium">{props.data.overview}</p>
      <div className="container">
        <p className="Source spartanMedium">Source : </p>
        <a href={props.data.source} target="_blank" className="wikipedia spartan">
          Wikipedia
        </a>
        <img src={source} alt="source" />
      </div>
    </div>
  );
}
export default Main;
