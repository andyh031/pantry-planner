import { Search2Icon } from "@chakra-ui/icons"
import { Box, HStack, Input, Button, Select, Text, Flex, Grid, VStack, List, ListItem, InputRightElement, InputGroup, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
  UnorderedList,
  OrderedList} from "@chakra-ui/react"
import { useState } from "react";

function Main() {

    const [recipes, setRecipes] = useState([{name: 'Recipe1', description: 'descriptionnnnnn', calories: '123'}, {name: 'Recipe1', description: 'descriptionnnnnn', calories: '123'}])
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    
    return (
        <Box>
            <HStack marginBlock='2rem' mb='1rem' p='1rem' paddingBlock='1rem' backgroundColor='white'>
                <InputGroup>
                    <Input backgroundColor='#EEF4F6' value={input} onChange={(e) => handleInputChange(e)}borderRadius='2rem' size='lg' placeholder='Search Recipe...'></Input>
                    <InputRightElement>
                            <Search2Icon colorScheme='blue'/>
                    </InputRightElement>
                </InputGroup>
            </HStack>
            <Box mt='5rem'>
                <Text fontSize='36px'>Showing <strong>{recipes.length}</strong> Results</Text>
                <Text fontSize='14px'>We prioritized ingredients that are about to expire.</Text>
                <Accordion paddingBlock='1rem' allowToggle>
                    {recipes.map((recipe) => {
                        return (
                            <AccordionItem key={recipe.name}>
                                <AccordionButton >
                                    <Grid textAlign='left' borderRadius='10px' backgroundColor='white' w='100%' templateColumns='5fr 1fr 1fr'>
                                        <Box p='2rem' borderRadius='10px' borderLeft='15px solid #B7D0B0'>
                                            <Text fontWeight='semibold' fontSize='22px'>{recipe.name}</Text>
                                            <Text fontSize='15px'>{recipe.description}</Text>
                                        </Box>
                                        <Text fontSize='18px' fontWeight='semibold' marginBlock='auto'>{recipe.calories} cal</Text>
                                        <AccordionIcon marginBlock='auto'/>
                                    </Grid>
                                </AccordionButton>
                                <AccordionPanel borderRadius='10px' m='1rem' bgColor='#D8DED7'>
                                    <Grid gridGap='1rem' templateColumns='1fr 1fr'>
                                        <Box p='1rem' bgColor='#F4F4F4'>
                                            <Text fontSize='18px'>Ingredients</Text>
                                            <UnorderedList>
                                                <ListItem fontSize='13px'>ingredient</ListItem>
                                                <ListItem fontSize='13px'>ingredient</ListItem>
                                                <ListItem fontSize='13px'>ingredient</ListItem>
                                            </UnorderedList>
                                        </Box>
                                        <Box p='1rem' bgColor='#F4F4F4'>
                                            <Text fontSize='18px'>Steps</Text>
                                            <OrderedList>
                                                <ListItem fontSize='13px'>IDK</ListItem>
                                                <ListItem fontSize='13px'>IDK</ListItem>
                                                <ListItem fontSize='13px'>IDK</ListItem>
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