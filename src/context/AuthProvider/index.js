import { useEffect, useState } from "react"
import { apiAuth } from "../../api"

import AuthContext from "../AuthContext"

const AuthProvider = (props) => {
  const [userName, setUserName] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [uid, setUid] = useState("")
  const [token, setToken] = useState("")

  useEffect(() => {
    const token = apiAuth.getToken()

    if (token) {
      // check expire -> logout
      // else assign values
    }

    setIsLoading(false)
  }, [])

  const logIn = async (email, password) => {
    return await apiAuth.login(email, password)
  }

  const signUp = async (userName, email, password) => {
    return await apiAuth.signUp(userName, email, password)
  }

  const logOut = () => {
    apiAuth.removeUserLogin()
  }

  const obj = {
    userName,
    isLoggedIn,
    isLoading,
    uid,
    token,
    logIn,
    logOut,
    signUp,
  }

  const { children } = props

  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>
}

export default AuthProvider
