import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Alert } from "react-bootstrap"

import "../assets/css/sign-up.css"

import { icons, signUpValue } from "../utils"
import AuthContext from "../context/AuthContext"

function SignUp() {
  const [userName, setUserName] = useState("4")
  const [email, setEmail] = useState("4@gmail.com")
  const [password, setPassword] = useState("4")
  const [confirmedPassword, setConfirmedPassword] = useState("4")
  const [errorMessage, setErrorMessage] = useState("")

  const history = useHistory()
  const authObj = useContext(AuthContext)

  const isInputValid = () => {
    let message = ""
    if (!userName) {
      message += "Please enter your user name!\n"
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
      const result = await authObj.signUp(userName, email, password)

      if (result) {
        history.push("/dashboard")
      }
    }
  }

  const updateValue = (option, value) => {
    switch (option) {
      case signUpValue.user:
        setUserName(value)
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
                value={userName}
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
