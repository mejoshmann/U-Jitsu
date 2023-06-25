import { Link } from "react-router-dom";
import "./Nav.scss";
function Nav() {
  return (
    
      <nav className="nav">
        <Link to="/">
          <div className="nav__home"></div>
        </Link>

        <Link to="/Activity">
          <div className="nav__activity"></div>
        </Link>

        <Link to="/Training">
          <div className="nav__add"></div>
        </Link>

        <Link to="/Knowledge">
          <div className="nav__knowledge"></div>
        </Link>

        <Link to="/Profile">
          <div className="nav__profile"></div>
        </Link>
      </nav>

  );
}

export default Nav;
