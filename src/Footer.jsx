import "./Footer.css";

function Footer(props) {
  return (
    <footer>
      <div className="footer_box">
        <p className=" Spartan">ROTATION TIME</p>
        <span className="Antonio">{props.rotation}</span>
      </div>
      <div className="footer_box">
        <p className=" Spartan">REVOLUTION TIME</p>
        <span className="Antonio">{props.revolution}</span>
      </div>
      <div className="footer_box">
        <p className=" Spartan">radius</p>
        <span className="Antonio">{props.radius}</span>
      </div>
      <div className="footer_box ">
        <p className=" Spartan">AVERAGE TEMP.</p>
        <span className=" Antonio">{props.temperature}</span>
      </div>
    </footer>
  );
}

export default Footer;
