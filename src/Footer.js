import "./Footer.css";

function Footer(props) {
  return (
    <footer>
      <div className="footer_box">
        <p className="footer_title spartan">ROTATION TIME</p>
        <span className="antonio">{props.component.rotation}</span>
      </div>
      <div className="footer_box">
        <p className="footer_title spartan">REVOLUTION TIME</p>
        <span className="antonio">{props.component.revolution}</span>
      </div>
      <div className="footer_box">
        <p className="footer_title spartan">radius</p>
        <span className="antonio">{props.component.radius}</span>
      </div>
      <div className="footer_box ">
        <p className="footer_title spartan">AVERAGE TEMP.</p>
        <span className=" antonio">{props.component.temperature}</span>
      </div>
    </footer>
  );
}

export default Footer;
