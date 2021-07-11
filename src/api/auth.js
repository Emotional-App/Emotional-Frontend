import axios from "axios"

import path from "./baseUrl"

// signup

const signUp = async (user, email, password) => {
  const result = await axios.post(`${path}/auth/signup`, {user, email, password })

  return result.data
}

// login

const login = (user, email, password) => {}

export { signUp, login }
