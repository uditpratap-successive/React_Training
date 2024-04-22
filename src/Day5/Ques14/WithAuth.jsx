//14.Create an HOC named withAuth that restricts access to a specific component to authenticated users only.
//Implement this HOC on a sample component and demonstrate how it protects routes.

import React from "react";
import { Navigate } from "react-router-dom";

const WithAuth = (WrappedComponent) => {
  return function WithAuth(props) {
    const isAuthenticated = localStorage.getItem("login");

    if (isAuthenticated !== "true") {
      return <Navigate to="/" />;
    }

    return <WrappedComponent {...props} isAuthenticated={isAuthenticated} />;
  };
};

export default WithAuth;
