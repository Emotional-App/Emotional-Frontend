import axios from "axios"

import path from "./baseUrl"

const methods = {
  GET: "GET",
  POST: "POST",
}

const isAuth = {
  authorised: true,
  unauthorised: false,
}

const authConfig = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
}

const apiPost = async (directPath, obj, isAuth = false) => {
  const config = isAuth ? authConfig : null
  try {
    const result = await axios.post(`${path}/${directPath}`, obj, config)

    return result.data
  } catch (err) {
    console.log(err.response?.status)
    console.log(err.response?.data)
  }
}

export { methods, isAuth, apiPost }
