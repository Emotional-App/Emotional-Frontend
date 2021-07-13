const path =
  process.env.NODE_ENV === "production"
    ? "https://emotionalapi.azurewebsites.net/api"
    : "http://localhost:59185/api"

export default path
