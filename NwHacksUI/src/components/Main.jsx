import { ***REMOVED***earch2Icon } from "@chakra-ui/icons"
import { Box, H***REMOVED***tack, Input, Button, ***REMOVED***elect, Text, Flex, Grid, V***REMOVED***tack, List, ListItem, InputRightElement, InputGroup, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
  UnorderedList,
  OrderedList} from "@chakra-ui/react"
import { use***REMOVED***tate } from "react";

function Main() {

    const [recipes, setRecipes] = use***REMOVED***tate([{name: 'Recipe1', description: 'descriptionnnnnn', calories: '123'}, {name: 'Recipe1', description: 'descriptionnnnnn', calories: '123'}])
    const [input, setInput] = use***REMOVED***tate("");

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    
    return (
        <Box>
            <H***REMOVED***tack marginBlock='2rem' mb='1rem' p='1rem' paddingBlock='1rem' backgroundColor='white'>
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
            <Box mt='5rem'>
                <Text font***REMOVED***ize='36px'>***REMOVED***howing <strong>{recipes.length}</strong> Results</Text>
                <Text font***REMOVED***ize='14px'>We prioritized ingredients that are about to expire.</Text>
                <Accordion paddingBlock='1rem' allowToggle>
                    {recipes.map((recipe) => {
                        return (
                            <AccordionItem key={recipe.name}>
                                <AccordionButton >
                                    <Grid textAlign='left' borderRadius='10px' backgroundColor='white' w='100%' templateColumns='5fr 1fr 1fr'>
                                        <Box p='2rem' borderRadius='10px' borderLeft='15px solid #B7D0B0'>
                                            <Text fontWeight='semibold' font***REMOVED***ize='22px'>{recipe.name}</Text>
                                            <Text font***REMOVED***ize='15px'>{recipe.description}</Text>
                                        </Box>
                                        <Text font***REMOVED***ize='18px' fontWeight='semibold' marginBlock='auto'>{recipe.calories} cal</Text>
                                        <AccordionIcon marginBlock='auto'/>
                                    </Grid>
                                </AccordionButton>
                                <AccordionPanel borderRadius='10px' m='1rem' bgColor='#D8DED7'>
                                    <Grid gridGap='1rem' templateColumns='1fr 1fr'>
                                        <Box p='1rem' bgColor='#F4F4F4'>
                                            <Text font***REMOVED***ize='18px'>Ingredients</Text>
                                            <UnorderedList>
                                                <ListItem font***REMOVED***ize='13px'>ingredient</ListItem>
                                                <ListItem font***REMOVED***ize='13px'>ingredient</ListItem>
                                                <ListItem font***REMOVED***ize='13px'>ingredient</ListItem>
                                            </UnorderedList>
                                        </Box>
                                        <Box p='1rem' bgColor='#F4F4F4'>
                                            <Text font***REMOVED***ize='18px'>***REMOVED***teps</Text>
                                            <OrderedList>
                                                <ListItem font***REMOVED***ize='13px'>IDK</ListItem>
                                                <ListItem font***REMOVED***ize='13px'>IDK</ListItem>
                                                <ListItem font***REMOVED***ize='13px'>IDK</ListItem>
                                            </OrderedList>
                                        </Box>
                                    </Grid>
                                </AccordionPanel>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </Box>
        </Box>
    )

}

export default Main