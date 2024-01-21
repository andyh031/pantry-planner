import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import Sidebar from "./Sidebar"
import Main from "./Main"
import RightPanel from "./RightPanel"
import bgImage from './food_background_banner.png'
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./LoginPage"
import { useState } from "react"
import { useEffect } from "react"
import { userApi } from "../api/UserApi";
import { ingredientsApi } from "../api/IngredientApi"

function Home() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      // Check if user is authenticated before making the API call
      if (isAuthenticated) {
        // You can now use the 'user' object for your API call
        try {
          // Make your API call using 'user'
          // debugger;
          // let response = await ingredientsApi.getIngredients(user);
          // setIngredients(response.data);
          // console.log(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData(); // Trigger the API call when the component mounts or 'user' changes
  }, [isLoading]);

  if (isLoading) {
    return (
      <div>
        LOADING
      </div>
    )
  } else {
      return (
        <Box h='100vh' backgroundColor='#F4F4F4' backgroundImage={bgImage} backgroundRepeat='repeat-x' backgroundSize='1547px 300px' backgroundPosition='initial'>
        <Grid gridGap='3rem' templateColumns='0.8fr 2fr 1fr' p='2rem'>
          <GridItem>
            <Sidebar user={user}/>
          </GridItem>
          <GridItem>
            <Main user={user}/>
          </GridItem>
          <GridItem bgColor='white'>
            <RightPanel user={user}/>
          </GridItem>
        </Grid>
      </Box>
    )
  }
}

export default Home