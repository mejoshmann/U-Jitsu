import { Link } from "react-router-dom";
import "../components/Knowledge/Knowledge.scss"

function Knowledge() {

  return (
    <>
      <div className="knowledge">
        <h1 className="knowledge__heading">Knowledge</h1>
        <div className="knowledge__container">
         <Link to="/Points" className="knowledge__icon points">Points</Link>
          <Link to="/Takedowns" className="knowledge__icon takedowns">Takedowns</Link>
          <Link to="/Positions" className="knowledge__icon positions">Positions</Link>
          <Link to="/Submissions" className="knowledge__icon submissions">Submissions</Link>
          <Link to="/Joints" className="knowledge__icon movements">Joint Locks</Link>
          <div to="/Videos" className="knowledge__icon videos">Videos</div>
        </div>
      </div>
    </>
  );
}

export default Knowledge;
