import axios from "axios"

import path from "./baseUrl"

// signup

const signUp = async (email, password) => {
  const result = await axios.post(`${path}/auth/signup`, { email, password })

  return result.data
}

// login

const login = (email, password) => {}

export { signUp, login }
