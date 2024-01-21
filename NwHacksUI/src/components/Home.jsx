import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import Sidebar from "./Sidebar"
import Main from "./Main"
import RightPanel from "./RightPanel"
import bgImage from './food_background_banner.png'
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./LoginPage"
import { useState } from "react"
import { userApi } from "../api/UserApi";

function Home() {

  const { user, isAuthenticated, isLoading } = useAuth0();


  return (
    <Box h='100vh' backgroundColor='#F4F4F4' backgroundImage={bgImage} backgroundRepeat='repeat-x' backgroundSize='1547px 300px' backgroundPosition='initial'>
      <Grid gridGap='3rem' templateColumns='0.8fr 2fr 1fr' p='2rem'>
        <GridItem>
          <Sidebar/>
        </GridItem>
        <GridItem>
          <Main/>
        </GridItem>
        <GridItem bgColor='white'>
          <RightPanel/>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Home