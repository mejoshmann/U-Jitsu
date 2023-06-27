import { Link } from "react-router-dom";
import "./SignUp.scss";

function SignUp() {
  return (
    <>
      <div className="signup">
        <div className="signup__logo">
          <div className="signup__image"></div>
          <h1 className="signup__heading">U-Jitsu</h1>
        </div>
        <form action="post" className="signup__form">
          <label htmlFor="email" className="signup__eLabel">
            <input type="email" id="email" className="signup__input" placeholder="Email" required/>
          </label>
          <label htmlFor="password" className="signup__ePassword">
            <input
              type="password"
              id="password"
              className="signup__input"
              placeholder="Password"
              required
            />
          </label>
          <Link to="/Home">
            <button className="signup__button">Login</button>
          </Link>
          <Link to="/Profile">
            <button className="signup__button">Create Account</button>
          </Link>
        </form>

        <div className="signup__terms">
          <p className="signup__forgot">Forgot password?</p>

          <p className="signup__termsCond">Terms & Conditions, Privacy Policy</p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
