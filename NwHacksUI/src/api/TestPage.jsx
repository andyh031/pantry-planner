import React, { useState, useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserContext from "../auth/UserContext";
import { ingredientsApi } from "./IngredientApi";


export default function TestPage() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Check if user is authenticated before making the API call
      if (isAuthenticated) {
        // You can now use the 'user' object for your API call
        try {
          // Make your API call using 'user'
          // debugger;
          let response = await ingredientsApi.getIngredients(user);
          setIngredients(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData(); // Trigger the API call when the component mounts or 'user' changes
  }, [isLoading]);

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