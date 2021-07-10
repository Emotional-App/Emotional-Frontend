import "../assets/css/sign-up.css";

import { icons } from "../utils";

function SignUp() {
  return (
    <div className="register">
      <div className="image-holder">
        <img src={icons.leaf} alt="image" />
      </div>
      <div className="sign-up">
        <form method="post">
          <h2 className="text-center">
            <strong>Create</strong> an account.
          </h2>
          <div className="form-group mb-3">
            <input
              className="form-control"
              type="email"
              required
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group mb-3">
            <input
              className="form-control"
              type="password"
              required
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group mb-3">
            <input
              className="form-control"
              type="password"
              required
              name="password-repeat"
              placeholder="Password (repeat)"
            />
          </div>
          <div className="form-group mb-3">
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />I agree to
                the license terms
              </label>
            </div>
          </div>
          <div className="form-group">
            <button className="btn mb-3 signup-btn" type="submit">
              <div>Sign Up</div>
            </button>
          </div>
          <a className="already" href="/Login">
            You already have an account? Login here.
          </a>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
