import { Box, Text, Flex, HStack, Avatar, Input, List, ListItem, CloseButton, Button} from "@chakra-ui/react"
import { useState } from "react"


function RightPanel({user}) {
    const name = user.name
    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
    let date = new Date()
    let day = date.getDate()
    let year = date.getFullYear()
    let month = date.getMonth()

    const [calorieLimit, setCalorieLimit] = useState(1200);
    const [eatenMeals, setEatenMeals] = useState(['thing1', 'thing2', 'thing3'])

    const signOut = () => {
        console.log("Signing Out");
    }
    
    return (
        <>
        <Box bgColor='white'>
            <HStack p='2rem' paddingInline='3rem'>
                <Avatar marginBlock='auto' marginInline='2rem' size='md' name={name} bg='teal.200'/>
                <Box>
                    <Text>{name}</Text>
                    <Button onClick={signOut}>Sign out</Button>
                </Box>
            </HStack>
            <Box borderBottom = '2px solid #B7D0B0'></Box>
            <Box p='3rem'>
                <Text fontSize='24px' fontWeight='semibold'>{months[month]} {day}, {year}</Text>
                <Text fontSize='12px'>MY MEALS TODAY: 2</Text>
                <HStack mt='1rem'>
                    <Text>Calorie Limit: </Text>
                    <Input marginInline='2rem' w='100px' placeholder={calorieLimit}></Input>
                </HStack>
                <HStack mt='1rem'>
                    <Text>Total Calories: </Text>
                    <Text marginInline='2rem'>1100</Text>
                </HStack>
                <List p='1rem' border='1px solid #E8F5E4' borderRadius='1rem' marginBlock='2rem'>
                    {eatenMeals.map((meal) => {
                        return (
                            <ListItem key={meal} >
                                <Flex justifyContent='space-between'>
                                    <Text>{meal}</Text>
                                    <CloseButton/>
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

export default RightPanel