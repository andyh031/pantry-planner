import { ***REMOVED***earch2Icon } from "@chakra-ui/icons"
import { Box, H***REMOVED***tack, Input, Button, ***REMOVED***elect, Text, Flex, V***REMOVED***tack, List, ListItem, InputRightElement, InputGroup } from "@chakra-ui/react"
import { use***REMOVED***tate } from "react";

function Main() {

    const [recipes, setRecipes] = use***REMOVED***tate([{name: 'Recipe1', description: 'descriptionnnnnn', calories: '123'}, {name: 'Recipe1', description: 'descriptionnnnnn', calories: '123'}])
    const [input, setInput] = use***REMOVED***tate("");

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    
    return (
        <Box>
            <H***REMOVED***tack mb='1rem' p='1rem' paddingBlock='1rem' backgroundColor='white'>
                <InputGroup>
                    <Input backgroundColor='#EEF4F6' value={input} onChange={(e) => handleInputChange(e)}borderRadius='2rem' size='lg' placeholder='***REMOVED***earch Recipe...'></Input>
                    <InputRightElement>
                        <***REMOVED***earch2Icon color***REMOVED***cheme='blue'/>
                    </InputRightElement>
                </InputGroup>
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
                            <ListItem  p='1rem' key={recipe.name}>
                                <Flex backgroundColor='white' w='100%' justifyContent='space-between'>
                                    <Box p='2rem' borderRadius='10px' borderLeft='15px solid #B7D0B0'>
                                        <Text fontWeight='semibold' font***REMOVED***ize='22px'>{recipe.name}</Text>
                                        <Text font***REMOVED***ize='15px'>{recipe.description}</Text>
                                    </Box>
                                    <Text font***REMOVED***ize='18px' fontWeight='semibold' mr='3rem' marginBlock='auto'>{recipe.calories} cal</Text>
                                </Flex>
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </Box>
    )

}

export default Main