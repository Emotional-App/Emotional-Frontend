const path =
  process.env.NODE_ENV === "production"
    ? "https://emotionalapi.azurewebsites.net/api"
    : "https://localhost:5001/api"

export default path
