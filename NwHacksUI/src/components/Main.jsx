import { AddIcon,Search2Icon } from "@chakra-ui/icons"
import { Box, HStack, Input, Button, Text, Grid, ListItem, InputRightElement, InputGroup, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
  UnorderedList,
  OrderedList} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { recipeApi } from "../api/RecipeApi";

function Main({user, recipes, setRecipes, setEatenMeals, setTotalCalories}) {

    // const [recipes, setRecipes] = useState([{name: 'Recipe1', description: 'descriptionnnnnn', calories: '123'}, {name: 'Recipe1', description: 'descriptionnnnnn', calories: '123'}])
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const search = () => {
        recipeApi.searchRecipes(input).
        then((res) => {
            setRecipes(res.data)
            setInput("");
        })
    }

    const addItem = (recipe) => {
        setTotalCalories((prev) => {
            if (prev) {
                console.log("there is prev")
                return prev + parseInt(recipe.cals)
            } else {
                console.log("no prev");
                return parseInt(recipe.cals)
            }
        })
        setEatenMeals((prevMeals) => {
            return [...prevMeals, recipe]
        })
    }
    
    return (
        <Box>
            <HStack borderRadius='1rem' marginBlock='2rem' mb='1rem' p='1rem' paddingBlock='1rem' backgroundColor='white'>
                <InputGroup>
                    <Input backgroundColor='#EEF4F6' value={input} onChange={(e) => handleInputChange(e)}borderRadius='2rem' size='lg' placeholder='Search Recipe...'></Input>
                    <InputRightElement onClick={search} transform='translate(-5px, 5px)'>
                        <Button borderRadius='100%' colorScheme='green'>
                            <Search2Icon/>
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </HStack>
            <Box mt='5rem'>
                <Text fontSize='36px'>Showing <strong>{recipes.length}</strong> Results</Text>
                <Text fontSize='14px'>We prioritized ingredients that are about to expire.</Text>
                <Accordion maxHeight='600px' overflowY='auto' paddingBlock='2rem' allowToggle>
                    {recipes.map((recipe) => {
                        return (
                            <AccordionItem key={recipe.name}>
                                <AccordionButton >
                                    <Grid textAlign='left' borderRadius='10px' backgroundColor='white' w='100%' templateColumns='5fr 1fr 1fr 0.5fr'>
                                        <Box p='2rem' borderRadius='10px' borderLeft='15px solid #B7D0B0'>
                                            <Text fontWeight='semibold' fontSize='22px'>{recipe.name}</Text>
                                            <Text fontSize='15px'>{recipe.description}</Text>
                                        </Box>
                                        <Text fontSize='18px' fontWeight='semibold' marginBlock='auto'>{recipe.calories} cal</Text>
                                        <Button w='30px' marginBlock='auto' onClick={() => addItem({name: recipe.name, cals: recipe.calories})}>
                                            <AddIcon/>
                                        </Button>
                                        <AccordionIcon marginBlock='auto'/>
                                    </Grid>
                                </AccordionButton>
                                <AccordionPanel borderRadius='10px' m='1rem' bgColor='#D8DED7'>
                                    <Grid gridGap='1rem' templateColumns='1fr 1fr'>
                                        <Box p='1rem' bgColor='#F4F4F4'>
                                            <Text fontSize='18px'>Ingredients</Text>
                                            <UnorderedList>
                                                {recipe.ingredients.map((ingredient) => {
                                                    return (
                                                        <ListItem key={ingredient} fontSize='13px'>{ingredient}</ListItem>
                                                    )
                                                })}
                                            </UnorderedList>
                                        </Box>
                                        <Box p='1rem' bgColor='#F4F4F4'>
                                            <Text fontSize='18px'>Steps</Text>
                                            <OrderedList>
                                                {recipe.steps.map((step) => {
                                                    return (
                                                        <ListItem key={step} fontSize='13px'>{step}</ListItem>
                                                    )
                                                })}
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