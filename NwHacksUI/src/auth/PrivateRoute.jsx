import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  // hardecoded, must implement later
  const I***REMOVED***_U***REMOVED***ER_AUTHENTICATED = true;
  return I***REMOVED***_U***REMOVED***ER_AUTHENTICATED ? children : <Navigate to="/login" />
}

export default PrivateRoute;
