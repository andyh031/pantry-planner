import { ***REMOVED***earch2Icon } from "@chakra-ui/icons"
import { Box, H***REMOVED***tack, Input, Button, ***REMOVED***elect, Text, V***REMOVED***tack, List, ListItem } from "@chakra-ui/react"

function Main() {

    const recipes = ['recipe1', 'recipe2', 'recipe3', 'recipe4', 'recipe5']

    return (
        <Box>
            <H***REMOVED***tack mb='1rem' p='1rem' paddingBlock='1rem' backgroundColor='white'>
                <Input borderRadius='2rem' size='lg' placeholder='***REMOVED***earch Recipe...'></Input>
                <Button color***REMOVED***cheme='green' borderRadius='2rem' transform='translate(-60px, 0px)'>
                    <***REMOVED***earch2Icon/>
                </Button>
                <***REMOVED***elect borderRadius='1rem' variant='filled' w='35%'>
                    <option value='Unique'>Unique</option>
                    <option value='Not Unique'>Not Unique</option>
                </***REMOVED***elect>
            </H***REMOVED***tack>
            <Box>
                <Text font***REMOVED***ize='36px'>***REMOVED***howing <strong>{recipes.length}</strong> Results</Text>
                <Text font***REMOVED***ize='14px'>We prioritized ingredients that are about to expire.</Text>
                <List>
                    {recipes.map((recipe) => {
                        return (
                            <ListItem p='1rem' key={recipe}>
                                <Box backgroundColor='white' p='2rem' borderRadius='10px' borderLeft='15px solid #B7D0B0'>
                                    {recipe}
                                </Box>
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </Box>
    )

}

export default Main