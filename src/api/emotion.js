import axios from "axios"

import path from "./baseUrl"

const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
}

const getTodayEmotions = async () => {
  const result = await axios.get(`${path}/emotion/today`, config)

  return result.data
}

export { getTodayEmotions }
