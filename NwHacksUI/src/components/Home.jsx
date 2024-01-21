import { Box, Grid, GridItem, Text } from "@chakra-ui/layout"
import ***REMOVED***idebar from "./***REMOVED***idebar"
import Main from "./Main"

function Home() {

  return (
    <Box h='100vh' backgroundColor='#F4F4F4'>
      <Grid gridGap='3rem' templateColumns='0.8fr 2fr 1fr' p='2rem'>
        <GridItem>
          <***REMOVED***idebar/>
        </GridItem>
        <GridItem>
          <Main/>
        </GridItem>
        <GridItem>
          <Text>
            ***REMOVED***ome random stuff I guess
          </Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Home