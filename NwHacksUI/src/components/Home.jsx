import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import ***REMOVED***idebar from "./***REMOVED***idebar"
import Main from "./Main"
import RightPanel from "./RightPanel"
import bgImage from './food_background_banner.png'

function Home() {

  return (
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
  )
}

export default Home