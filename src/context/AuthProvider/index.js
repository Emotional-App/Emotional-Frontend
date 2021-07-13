import { useEffect, useState } from "react"
import { apiAuth } from "../../api"

import AuthContext from "../AuthContext"

const AuthProvider = (props) => {
  const [isLoading, setLoading] = useState(true)
  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const token = apiAuth.getToken()

    if (token) {
      // todo: get expire and check expire

      setLoggedIn(true)
    }

    setLoading(false)
  }, [])

  const signUp = async (userName, email, password) => {
    const result = await apiAuth.signUp(userName, email, password)
    setLoggedIn(true)

    return result
  }

  const logIn = async (email, password) => {
    const result = await apiAuth.login(email, password)
    setLoggedIn(true)

    return result
  }

  const logOut = () => {
    apiAuth.removeUserLogin()
  }

  const obj = {
    isLoading,
    isLoggedIn,
    logIn,
    logOut,
    signUp,
  }

  const { children } = props

  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>
}

export default AuthProvider
