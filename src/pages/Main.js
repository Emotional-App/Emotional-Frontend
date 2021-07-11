import React from "react"
import { useHistory } from "react-router-dom"

import "../assets/css/style.css"

import { icons } from "../utils"

const options = [
  { name: "Home", url: "/" },
  { name: "About", url: "/" },
  { name: "Home", url: "/" },
  { name: "Home", url: "/" },
]

export default function Main() {
  const history = useHistory()

  const goToSignUp = () => {
    history.push("/sign-up")
  }

  const goToLogIn = () => {
    history.push("/login")
  }

  const renderNavBarMenu = (option, url) => {
    return (
      <li>
        <a href={url}>{option}</a>
      </li>
    )
  }

  return (
    <div className="main">
      <header id="header" className="align-items-center">
        <div className="logo">
          <h1 className="float-child flex-logo">
            <a href="#">Emotional</a>
          </h1>
        </div>
        <ul id="navbar">
          {options.map((o) => renderNavBarMenu(o.name, o.url))}
        </ul>
        <button className="login-btn" onClick={goToLogIn}>
          Login
        </button>
      </header>

      <div id="sign-up">
        <div className="text-content">
          <h1>Welcome to Emotional</h1>
          <h2>
            Happiness is simple. We are here to help you feel simple thing.
          </h2>
        </div>
        <button className="sign-up-btn" onClick={goToSignUp}>
          Sign up
        </button>
      </div>

      <div id="about-us">
        <div className="container">
          <h2 className="title">About us</h2>
          <div className="row">
            <div className="col-1">
              <h3>
                Our team provide several features to help improving emotion.
              </h3>
              <ul>
                <li>Rating emtional everyday</li>
                <li>Writing diary</li>
                <li>Follow emotion trend every month</li>
                <li>Symphony to relax</li>
              </ul>
            </div>
            <div className="col-2">
              <img src={icons.relax} alt="relax" />
            </div>
          </div>
        </div>
      </div>
      <div id="features">
        <div className="content">
          <div className="title">
            <h2>Features</h2>
          </div>
          <div className="features">
            <div className="rating child">
              <a href="">Rating</a>
              <div>
                <img src={icons.rate} alt="rating" />
              </div>
            </div>
            <div className="emtional-chart child">
              <a href="">Emtional-chart</a>
              <div>
                <img src={icons.chart} alt="chart" />
              </div>
            </div>
            <div className="Symphony child">
              <a href="">Symphony</a>
              <div>
                <img src={icons.symphony} alt="symphony" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
