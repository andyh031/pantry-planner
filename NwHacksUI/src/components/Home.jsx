import { Box, Grid, GridItem, Flex, Image } from "@chakra-ui/react"
import Sidebar from "./Sidebar"
import Main from "./Main"
import RightPanel from "./RightPanel"
import bgImage from '../images/food_background_banner.png'
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react"
import logo from '../images/logo.png'

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [eatenMeals, setEatenMeals] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Flex w='100vw' h='100vh' justifyContent='center' alignItems='center'>
        <Image src={logo} w='300px' h='200px' alt='homepage image'/>
      </Flex>
    )
  } else {
      return (
        <Box h='100vh' backgroundColor='#F4F4F4' backgroundImage={bgImage} backgroundRepeat='repeat-x' backgroundSize='1547px 300px' backgroundPosition='initial'>
        <Grid gridGap='3rem' templateColumns='0.8fr 2fr 1fr' p='2rem'>
          <GridItem>
            <Sidebar user={user} checkedItems={checkedItems} setCheckedItems={setCheckedItems} recipes={recipes} setRecipes={setRecipes} />
          </GridItem>
          <GridItem>
            <Main user={user} recipes={recipes} setRecipes={setRecipes} setEatenMeals={setEatenMeals} setTotalCalories={setTotalCalories}/>
          </GridItem>
          <GridItem bgColor='white' borderRadius='1rem'>
            <RightPanel user={user} eatenMeals={eatenMeals} setEatenMeals={setEatenMeals} totalCalories={totalCalories} setTotalCalories={setTotalCalories}/>
          </GridItem>
        </Grid>
      </Box>
    )
  }
}

export default Home