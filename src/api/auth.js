import axios from "axios"

import path from "./baseUrl"
import { apiPost } from "./axiosObj"

const signUp = async (userName, email, password) => {
  const result = await apiPost("auth/signup", {
    userName,
    email,
    password,
  })

  if (result.token) {
    saveUserLogin(result.token)
  }

  return result
}

const login = async (email, password) => {
  const result = await axios.post(`${path}/auth/login`, {
    email,
    password,
  })

  return result.data
}

// Helpers

const saveUserLogin = (token) => {
  localStorage.setItem("token", token.token)
  localStorage.setItem("expire", token.expires)
  localStorage.setItem("userName", token.userName)
  localStorage.setItem("userId", token.userId)
}

const removeUserLogin = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("expire")
  localStorage.removeItem("userName")
  localStorage.removeItem("userId")
}

const getToken = () => {
  localStorage.getItem("token")
}

const getExpire = () => {
  localStorage.getItem("expire")
}

const getUserName = () => {
  localStorage.getItem("userName")
}

const getUserId = () => {
  localStorage.getItem("userId")
}

export {
  signUp,
  login,
  removeUserLogin,
  getToken,
  getExpire,
  getUserId,
  getUserName,
}
