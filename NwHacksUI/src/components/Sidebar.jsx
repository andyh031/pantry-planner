import { Image, Box, Button, Text, List, Checkbox, ListItem, Flex, useDisclosure, ModalContent, ModalOverlay, Modal,  ModalCloseButton, ModalBody, HStack, Select, Input, ModalFooter, VStack, FormControl, FormLabel, Textarea, Badge, CloseButton, GridItem, Grid} from '@chakra-ui/react'
import { AddIcon, CloseIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react'
import logoImage from '../images/logo.png'
import { ingredientsApi } from '../api/IngredientApi'
import { recipeApi } from '../api/RecipeApi'

function Sidebar({user, checkedItems, setCheckedItems, recipes, setRecipes}) {

    const [items, setItems] = useState([{ingredientName: 'Banana', expiryDate: '2024-08-08'}])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [newAddition, setNewAddition] = useState('Ingredient')

    // for ingredient addition
    const [ingredientName, setIngredientName] = useState("");
    const [expiryDate, setExpiryDate] = useState();

    // for recipe addition
    const [recipeName, setRecipeName] = useState("");
    const [calories, setCalories] = useState(null);
    const [curIngredient, setCurIngredient] = useState("");
    const [curStep, setCurStep] = useState("");
    const [description, setDescription] = useState("");
    const [steps, setSteps] = useState([])
    const [ingredients, setIngredients] = useState([]);

    const generateRecipes = () => {
        recipeApi.findRecipeGivenIngredients(checkedItems).
        then((res) => {
            console.log("generated recipes from checked items")
            setRecipes(res.data);
        });
    }

    const deleteItem = (name) => {
        console.log(name);
        setItems((prevItems) => {
            return prevItems.filter((item) => item.ingredientName !== name)
        })
        ingredientsApi.deleteIngredient(user, name).then(() => fetchItems());
    }

    const addIngredientToRecipe = () => {
        setIngredients((prevIngredients) => {
            return [...prevIngredients, curIngredient]
        })
        setCurIngredient("");
    }

    const addStep = () => {
        setSteps((prevSteps) => {
            return [...prevSteps, curStep]
        })
        setCurStep("");
    }

    const resetFields = () => {
        setIngredientName("")
        setExpiryDate(null)
        setRecipeName("")
        setCalories(null)
        setCurIngredient([]);
        setDescription("")
        setIngredients([]);
        setSteps([]);
    }

    const addNewEntry = () => {
        let object;
        if (newAddition === 'Ingredient') {
            object = {
                name: ingredientName,
                expiration_date: expiryDate,
                calories: 123,
            }
            setItems((prevItems) => {
                return [...prevItems, {ingredientName, expiryDate}]
            })
            ingredientsApi.addIngredient(user, object).then(() => {
                fetchItems()
            });
            
        } else {
            object = {
                name: recipeName,
                ingredients,
                description,
                steps,
                calories
            }
            recipeApi.createRecipe(user, object);
        }
        console.log(object)
        onClose()
        resetFields()
    }

    const handleCheck = (item) => {
        setCheckedItems((prevItems) => {
            const containsIt = prevItems.includes(item);
            if (containsIt) {
                return prevItems.filter((checkedItem) => item != checkedItem)
            } else {
                return [...prevItems, item];
            }
        })
    }
    
    async function fetchItems() {
        ingredientsApi.getIngredients(user).then((res) => {
            setItems(res.data)
        })
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <>
        <Box h='100vh'>
            <Flex mb='2rem' justifyContent='center'>
                <Image w='250px' src={logoImage}/>
            </Flex>
            <Box borderTopRadius='2rem' p='2rem' backgroundColor='white'>
                <Flex justifyContent='space-between'>
                    <Box>
                        <Text fontSize='30px' fontWeight='bold'>My Pantry</Text>
                        <Text fontSize='12px'>INGREDIENTS: {items.length}</Text>
                    </Box>
                    <Button onClick={onOpen} width='fit-content' marginBlock='auto' objectFit='cover' size='md' borderRadius='100%' colorScheme='green'>
                        <AddIcon/>
                    </Button>
                    <Modal size='4xl' isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent paddingInline='3rem' pb='3rem'>
                            <ModalCloseButton onClick={resetFields}/>
                            <ModalBody>
                                <Flex paddingBlock='2rem' >
                                    <Text fontSize='24px' fontWeight='semibold'>Add New</Text>
                                    <Select ml='2rem' w='150x' value={newAddition} onChange={(e) => setNewAddition(e.target.value)}>
                                        <option value='Ingredient'>Ingredient</option>
                                        <option value='Recipe'>Recipe</option>
                                    </Select>
                                </Flex>
                            {(newAddition === 'Ingredient') ?
                            <VStack spacing="5">
                                <FormControl isRequired>
                                    <HStack>
                                        <FormLabel minWidth='100px'>Name</FormLabel>
                                        <Input value={ingredientName} onChange={(e) => setIngredientName(e.target.value)} size='lg' variant='filled' placeholder='Item...'></Input>
                                    </HStack>
                                </FormControl>
                                <FormControl isRequired>
                                    <HStack>
                                        <FormLabel minWidth='100px'>Expires On</FormLabel>
                                        <Input value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} type='date' w='200px' size='lg' variant='filled'></Input>
                                    </HStack>
                                </FormControl>
                            </VStack>
                            :
                            <Box>
                                <VStack spacing="5">
                                    <FormControl isRequired>
                                        <HStack>
                                            <FormLabel minWidth='100px'>Name</FormLabel>
                                            <Input value={recipeName} onChange={(e) => setRecipeName(e.target.value)} type='text' variant='filled'/>
                                        </HStack>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <HStack>
                                            <FormLabel minWidth='100px'>Calories</FormLabel>
                                            <Input value={calories} onChange={(e) => setCalories(e.target.value)} type='number' variant='filled' w='100px'/>
                                        </HStack>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <HStack>
                                            <FormLabel minWidth='100px'>Ingredients</FormLabel>
                                            <Flex w='100%' flexDirection='column' justifyContent='start'>
                                                <HStack marginBottom='10px'>
                                                    <Input w='100%' value={curIngredient} onChange={(e) => setCurIngredient(e.target.value)} type='text' variant='filled' placeholder='Ingredient...'/>
                                                    <Button colorScheme='green' onClick={addIngredientToRecipe}>
                                                        <AddIcon/>
                                                    </Button>
                                                </HStack>
                                                <HStack>
                                                    {ingredients.map((ingredient) => {
                                                        return (
                                                            <Box key={ingredient}>
                                                                <Button onClick={() => setIngredients((prevIngredients) => {
                                                                    return prevIngredients.filter((ing) => ing !== ingredient);
                                                                })}>
                                                                    {ingredient}
                                                                    <CloseButton/>
                                                                </Button>
                                                            </Box>
                                                        )
                                                    })}
                                                </HStack>
                                            </Flex>
                                        </HStack>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <HStack>
                                            <FormLabel minWidth='100px'>Steps</FormLabel>
                                            <Flex w='100%' flexDirection='column' justifyContent='start'>
                                                <HStack marginBottom='10px'>
                                                    <Textarea w='100%' value={curStep} onChange={(e) => setCurStep(e.target.value)} variant='filled'/>
                                                    <Button colorScheme='green' onClick={addStep}>
                                                        <AddIcon/>
                                                    </Button>
                                                </HStack>
                                                <Flex flexDirection='column' justifyContent='self'>
                                                    {steps.map((step, index) => {
                                                        return (
                                                                <Box key={step}>
                                                                    <Button marginBottom='10px' onClick={() => setSteps((prevSteps) => {
                                                                        return prevSteps.filter((prevStep) => prevStep !== step);
                                                                    })}>
                                                                        {index + 1}. {step}
                                                                        <CloseButton/>
                                                                    </Button>
                                                                </Box>
                                                        )
                                                    })}
                                                </Flex>
                                            </Flex>
                                        </HStack>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <HStack>
                                            <FormLabel minWidth='100px'>Description</FormLabel>
                                            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} size='lg' variant='filled' placeholder="Something about your recipe..."/>
                                        </HStack>
                                    </FormControl>
                                </VStack>
                            </Box>
                            }
                            </ModalBody>
                            
                            <ModalFooter>
                                <Button colorScheme='green' onClick={addNewEntry}>Add {newAddition}</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Flex>
            </Box>
            <Box borderBottom = '2px solid #F4F4F4'></Box>
            <Box h='100vh' p='2rem' backgroundColor='white'>
                <List>
                    {items.map((item) => {
                        return (
                            <ListItem key={item.name}>
                                <Flex justifyContent='space-between'>
                                    <Checkbox onChange={() => handleCheck(item.name)}size='lg' borderColor='#B7D0B0' colorScheme='green'>
                                        <Text fontSize='15px'>{item.name}</Text>
                                        <Text fontSize='12px'>Expires {item.expiration_date}</Text>
                                    </Checkbox>
                                    <Button size='sm' onClick={() => deleteItem(item.name)}>
                                        <CloseIcon/>
                                    </Button>
                                </Flex>
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </Box>
        <Button onClick={generateRecipes} colorScheme='green' marginInline='4rem' transform='translate(0, -150px)'>
            Generate Recipes
        </Button>
        </>
    )
}

export default Sidebar