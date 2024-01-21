import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Text, VStack, Flex } from "@chakra-ui/react";
import { userApi } from "../api/UserApi";


function LoginPage() {
  const {user, isAuthenticated, isLoading} = useAuth0();
  const { loginWithRedirect } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      userApi.createUser(user);
    }
  }, [isAuthenticated])
  
  return (
    <>
      <Flex w='100vw' justifyContent='center' pt='5rem'>
        <VStack>
          <Text>Log in to get started!</Text>
        <Button size='lg' onClick={() => loginWithRedirect()}>Log In</Button>;
        </VStack>
      </Flex>
    </>
  );
}

export default LoginPage
