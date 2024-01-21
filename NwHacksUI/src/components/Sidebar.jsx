import { Image, Box, Button, Text, List, Checkbox, ListItem, Flex, useDisclosure, ModalContent, ModalOverlay, Modal, ModalHeader, ModalCloseButton, ModalBody, H***REMOVED***tack, ***REMOVED***elect, Input, ModalFooter, V***REMOVED***tack, FormControl, FormLabel, Textarea, Badge, CloseButton, GridItem, Grid} from '@chakra-ui/react'
import { AddIcon, CloseIcon } from '@chakra-ui/icons'
import React, { use***REMOVED***tate } from 'react'
import logoImage from './logo.png'

function ***REMOVED***idebar() {

    const [items, setItems] = use***REMOVED***tate([{ingredientName: 'Banana', expiryDate: '2024-08-08'}])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [newAddition, setNewAddition] = use***REMOVED***tate('Ingredient')
    const [checkedItems, setCheckedItems] = use***REMOVED***tate([])

    // for ingredient addition
    const [ingredientName, setIngredientName] = use***REMOVED***tate("");
    const [expiryDate, setExpiryDate] = use***REMOVED***tate();

    // for recipe addition
    const [recipeName, setRecipeName] = use***REMOVED***tate("");
    const [calories, setCalories] = use***REMOVED***tate(null);
    const [curIngredient, setCurIngredient] = use***REMOVED***tate("");
    const [cur***REMOVED***tep, setCur***REMOVED***tep] = use***REMOVED***tate("");
    const [description, setDescription] = use***REMOVED***tate("");
    const [steps, set***REMOVED***teps] = use***REMOVED***tate([])
    const [ingredients, setIngredients] = use***REMOVED***tate([]);

    const deleteItem = (name) => {
        console.log(name);
        setItems((prevItems) => {
            return prevItems.filter((item) => item.ingredientName !== name)
        })
    }

    const addIngredientToRecipe = () => {
        setIngredients((prevIngredients) => {
            return [...prevIngredients, curIngredient];
        })
        setCurIngredient("");
    }

    const add***REMOVED***tep = () => {
        set***REMOVED***teps((prev***REMOVED***teps) => {
            return [...prev***REMOVED***teps, cur***REMOVED***tep]
        })
        setCur***REMOVED***tep("");
    }

    const resetFields = () => {
        setIngredientName("")
        setExpiryDate(null)
        setRecipeName("")
        setCalories(null)
        setCurIngredient([]);
        setDescription("")
        setIngredients([]);
        set***REMOVED***teps([]);
    }

    const addNewEntry = () => {
        let object;
        if (newAddition === 'Ingredient') {
            object = {
                name: ingredientName,
                expiration_date: expiryDate,
                calories: 123,
                user_id: "U***REMOVED***ER_ID"
            }
            
            setItems((prevItems) => {
                return [...prevItems, {ingredientName, expiryDate}]
            })
            
        } else {
            object = {
                name: recipeName,
                ingredients,
                description,
                steps,
                calories,
                user_id: "U***REMOVED***ER_ID"
            }
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
        console.log(checkedItems);
    }

    return (
        <>
        <Box h='100vh'>
            <Flex mb='2rem' justifyContent='center'>
                <Image w='250px' src={logoImage}/>
            </Flex>
            <Box borderTopRadius='2rem' p='2rem' backgroundColor='white'>
                <Flex justifyContent='space-between'>
                    <Box>
                        <Text font***REMOVED***ize='30px' fontWeight='bold'>My Pantry</Text>
                        <Text font***REMOVED***ize='12px'>INGREDIENT***REMOVED***: {items.length}</Text>
                    </Box>
                    <Button onClick={onOpen} width='fit-content' marginBlock='auto' objectFit='cover' size='md' borderRadius='100%' color***REMOVED***cheme='green'>
                        <AddIcon/>
                    </Button>
                    <Modal size='4xl' isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent paddingInline='3rem' pb='3rem'>
                            <ModalCloseButton onClick={resetFields}/>
                            <ModalBody>
                                <Flex paddingBlock='2rem' >
                                    <Text font***REMOVED***ize='24px' fontWeight='semibold'>Add New</Text>
                                    <***REMOVED***elect ml='2rem' w='150x' value={newAddition} onChange={(e) => setNewAddition(e.target.value)}>
                                        <option value='Ingredient'>Ingredient</option>
                                        <option value='Recipe'>Recipe</option>
                                    </***REMOVED***elect>
                                </Flex>
                            {(newAddition === 'Ingredient') ?
                            <V***REMOVED***tack spacing="5">
                                <FormControl isRequired>
                                    <H***REMOVED***tack>
                                        <FormLabel minWidth='100px'>Name</FormLabel>
                                        <Input value={ingredientName} onChange={(e) => setIngredientName(e.target.value)} size='lg' variant='filled' placeholder='Item...'></Input>
                                    </H***REMOVED***tack>
                                </FormControl>
                                <FormControl isRequired>
                                    <H***REMOVED***tack>
                                        <FormLabel minWidth='100px'>Expires On</FormLabel>
                                        <Input value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} type='date' w='200px' size='lg' variant='filled'></Input>
                                    </H***REMOVED***tack>
                                </FormControl>
                            </V***REMOVED***tack>
                            :
                            <Box>
                                <V***REMOVED***tack spacing="5">
                                    <FormControl isRequired>
                                        <H***REMOVED***tack>
                                            <FormLabel minWidth='100px'>Name</FormLabel>
                                            <Input value={recipeName} onChange={(e) => setRecipeName(e.target.value)} type='text' variant='filled'/>
                                        </H***REMOVED***tack>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <H***REMOVED***tack>
                                            <FormLabel minWidth='100px'>Calories</FormLabel>
                                            <Input value={calories} onChange={(e) => setCalories(e.target.value)} type='number' variant='filled' w='100px'/>
                                        </H***REMOVED***tack>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <H***REMOVED***tack>
                                            <FormLabel minWidth='100px'>Ingredients</FormLabel>
                                            <Flex w='100%' flexDirection='column' justifyContent='start'>
                                                <H***REMOVED***tack marginBottom='10px'>
                                                    <Input w='100%' value={curIngredient} onChange={(e) => setCurIngredient(e.target.value)} type='text' variant='filled' placeholder='Ingredient...'/>
                                                    <Button color***REMOVED***cheme='green' onClick={addIngredientToRecipe}>
                                                        <AddIcon/>
                                                    </Button>
                                                </H***REMOVED***tack>
                                                <H***REMOVED***tack>
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
                                                </H***REMOVED***tack>
                                            </Flex>
                                        </H***REMOVED***tack>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <H***REMOVED***tack>
                                            <FormLabel minWidth='100px'>***REMOVED***teps</FormLabel>
                                            <Flex w='100%' flexDirection='column' justifyContent='start'>
                                                <H***REMOVED***tack marginBottom='10px'>
                                                    <Textarea w='100%' value={cur***REMOVED***tep} onChange={(e) => setCur***REMOVED***tep(e.target.value)} variant='filled'/>
                                                    <Button color***REMOVED***cheme='green' onClick={add***REMOVED***tep}>
                                                        <AddIcon/>
                                                    </Button>
                                                </H***REMOVED***tack>
                                                <Flex flexDirection='column' justifyContent='self'>
                                                    {steps.map((step, index) => {
                                                        return (
                                                                <Box key={step}>
                                                                    <Button marginBottom='10px' onClick={() => set***REMOVED***teps((prev***REMOVED***teps) => {
                                                                        return prev***REMOVED***teps.filter((prev***REMOVED***tep) => prev***REMOVED***tep !== step);
                                                                    })}>
                                                                        {index + 1}. {step}
                                                                        <CloseButton/>
                                                                    </Button>
                                                                </Box>
                                                        )
                                                    })}
                                                </Flex>
                                            </Flex>
                                        </H***REMOVED***tack>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <H***REMOVED***tack>
                                            <FormLabel minWidth='100px'>Description</FormLabel>
                                            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} size='lg' variant='filled' placeholder="***REMOVED***omething about your recipe..."/>
                                        </H***REMOVED***tack>
                                    </FormControl>
                                </V***REMOVED***tack>
                            </Box>
                            }
                            </ModalBody>
                            
                            <ModalFooter>
                                <Button color***REMOVED***cheme='green' onClick={addNewEntry}>Add {newAddition}</Button>
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
                            <ListItem key={item.ingredientName}>
                                <Flex justifyContent='space-between'>
                                    <Checkbox onChange={() => handleCheck(item.ingredientName)}size='lg' borderColor='#B7D0B0' color***REMOVED***cheme='green'>
                                        <Text font***REMOVED***ize='15px'>{item.ingredientName}</Text>
                                        <Text font***REMOVED***ize='12px'>Expires {item.expiryDate}</Text>
                                    </Checkbox>
                                    <Button size='sm' onClick={() => deleteItem(item.ingredientName)}>
                                        <CloseIcon/>
                                    </Button>
                                </Flex>
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </Box>
        </>
    )
}

export default ***REMOVED***idebar