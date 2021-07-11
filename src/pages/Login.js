import "../assets/css/login.css"

import { icons } from "../utils"

function Login() {
  return (
    <div id="login">
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div className="picture">
              <img src={icons.leaf} alt="leaf" />
            </div>
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" action="" method="post">
                <h3 className="display-5 green">Login</h3>
                <div className="form-group">
                  <p className=" color"> Username</p>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <p className=" color"> Password</p>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="submit"
                    className="btn "
                    value="submit"
                  />
                </div>
                <div id="register-link" className="text-right">
                  <a href="/sign-up" className="color_footer">
                    Register here
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
