import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? children : <Navigate to="/login" />}

export default PrivateRoute;
