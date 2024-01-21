import { Box, Grid, GridItem, Text, Button, Flex, V***REMOVED***tack } from "@chakra-ui/react"
import ***REMOVED***idebar from "./***REMOVED***idebar"
import Main from "./Main"
import RightPanel from "./RightPanel"
import bgImage from './food_background_banner.png'
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./LoginPage"
import { useEffect } from "react"
import { userApi } from "../api/UserApi";

function Home() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      userApi.createUser(user);
    }
  }, [isAuthenticated]);

  return (
    !isAuthenticated ? (
      <Box h='100vh' backgroundColor='#F4F4F4' backgroundImage={bgImage} backgroundRepeat='repeat-x' background***REMOVED***ize='1547px 300px' backgroundPosition='initial'>
        <Grid gridGap='3rem' templateColumns='0.8fr 2fr 1fr' p='2rem'>
          <GridItem>
            <***REMOVED***idebar/>
          </GridItem>
          <GridItem>
            <Main/>
          </GridItem>
          <GridItem bgColor='white'>
            <RightPanel/>
          </GridItem>
        </Grid>
      </Box>
    ) : (
      <Flex w="100vw" h="100vh" justifyContent='center' alignItems='center'>
        <V***REMOVED***tack>
          <Text>You need an account to login!</Text>
          <LoginButton/>
        </V***REMOVED***tack>
      </Flex>
    )
  );
}

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};


export default Home