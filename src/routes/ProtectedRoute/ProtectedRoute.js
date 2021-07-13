/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React, { useContext } from "react"
import { Spinner } from "react-bootstrap"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "../../context"

const ProtectedRoute = ({ children, ...rest }) => {
  const { isLoggedIn, isLoading } = useContext(AuthContext)

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : isLoggedIn ? (
        <Route {...rest} render={() => children} />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  )
}

export default ProtectedRoute
