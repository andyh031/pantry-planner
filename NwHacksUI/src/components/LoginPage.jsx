import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginPage() {
  const { user, isAuthenticated, isLoading } = useAuth0();

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




