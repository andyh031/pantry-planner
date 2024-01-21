import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export default function TestPage() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  


    if (isLoading) {
      // Show loading indicator or placeholder content while authentication is in progress
      return <div>Loading...</div>;
    }
  
    return isAuthenticated ? (
      <div>Welcome, {user.name}</div>
    ) : (
      <div>Not authenticated</div>
    );

}