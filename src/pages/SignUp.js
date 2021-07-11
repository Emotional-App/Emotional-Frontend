import { useState } from "react"
import { Alert } from "react-bootstrap"

import "../assets/css/sign-up.css"

import { icons, signUpValue } from "../utils"
import { apiAuth } from "../api"

function SignUp() {
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmedPassword, setConfirmedPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const isInputValid = () => {
    let message = ""
    if (!user) {
      message+="Please enter your user name!\n"
    }
    if (!email) {
      message += "Please enter your email!\n"
    }
    if (!password) {
      message += "Please enter your password!\n"
    }
    if (!confirmedPassword) {
      message += "Please enter your confirmed password!\n"
    }
    if (password !== confirmedPassword) {
      message += "Password is not matched!\n"
    }

    if (message) {
      setErrorMessage(message)
      return false
    }

    return true
  }

  const handleSignUp = async () => {
    if (isInputValid()) {
      const token = await apiAuth.signUp(user, email, password)
      console.log(token)
    }
  }

  const updateValue = (option, value) => {
    switch (option) {
      case signUpValue.user:
        setUser(value)
        break
      case signUpValue.email:
        setEmail(value)
        break
      case signUpValue.password:
        setPassword(value)
        break
      case signUpValue.confirmPassword:
        setConfirmedPassword(value)
        break
      default:
        break
    }

    setErrorMessage("")
  }

  return (
    <div>
      <Alert show={errorMessage} variant="primary">
        {errorMessage}
      </Alert>
      <div className="register">
        <div className="image-holder">
          <img src={icons.leaf} alt="leaf" />
        </div>
        <div className="sign-up">
          <form>
            <h2 className="text-center">
              <strong>Create</strong> an account.
            </h2>
            <div className="form-group mb-3">
              <input
                className="form-control"
                placeholder={signUpValue.user}
                value={user}
                onChange={(e) => updateValue(signUpValue.user, e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                className="form-control"
                placeholder={signUpValue.email}
                value={email}
                onChange={(e) => updateValue(signUpValue.email, e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                className="form-control"
                type="password"
                placeholder={signUpValue.password}
                value={password}
                onChange={(e) =>
                  updateValue(signUpValue.password, e.target.value)
                }
              />
            </div>
            <div className="form-group mb-3">
              <input
                className="form-control"
                type="password"
                placeholder={signUpValue.confirmPassword}
                value={confirmedPassword}
                onChange={(e) =>
                  updateValue(signUpValue.confirmPassword, e.target.value)
                }
              />
            </div>
            <div className="form-group">
              <button
                className="btn mb-3 signup-btn"
                type="button"
                onClick={handleSignUp}
              >
                <div>Sign Up</div>
              </button>
            </div>
            <a className="already" href="/Login">
              You already have an account? Login here.
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
