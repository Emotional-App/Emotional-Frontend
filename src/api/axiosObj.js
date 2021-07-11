import axios from "axios"
import path from "./baseUrl"

export const methods = {
  GET: axios.get,
  POST: axios.post,
}

const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
}

export const apiCall = (axiosMethod, directPath, obj) => {
  if (obj && axiosMethod === methods.POST) {
    return axiosMethod(`${path}/${directPath}`, obj, config)
  }

  return axiosMethod(`${path}/${directPath}`, config)
}
