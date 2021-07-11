import axios from "axios"

import path from "./baseUrl"

const signUp = async (userName, email, password) => {
  const result = await axios.post(`${path}/auth/signup`, {
    userName,
    email,
    password,
  })

  if (result) {
    saveUserLogin()
  }

  return result.data
}

const login = async (email, password) => {
  const result = await axios.post(`${path}/auth/login`, {
    email,
    password,
  })

  return result.data
}

// Helpers

const saveUserLogin = (token, expire, userName, userId) => {
  localStorage.setItem("token", token)
  localStorage.setItem("expire", expire)
  localStorage.setItem("userName", userName)
  localStorage.setItem("userId", userId)
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
