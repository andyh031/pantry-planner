import React, { useContext } from "react";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { userApi } from "../api/UserApi";

function LoginPage() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      userApi.createUser(user);
    }
  }, [isAuthenticated]);
  
  return (
    <div>
      <LoginButton />
      {isAuthenticated && (
        <>
          <h2>Welcome, {user.name}</h2>
          <p>User ID: {user.sub}</p>
        </>
      )}
    </div>
  );
}

export default LoginPage

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};




