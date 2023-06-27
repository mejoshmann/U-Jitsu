import { Link } from "react-router-dom";
import "./Heading.scss";

function Heading() {
  return (
    <div className="heading">
     <Link to="/Settings"><div className="heading__icon"></div></Link>
      <Link className="heading__logo" to="/Home">
        <h1>U-Jitsu</h1>
      </Link>
      <Link to="/Settings">
        {" "}
        <div className="heading__setting"></div>
      </Link>
    </div>
  );
}

export default Heading;
