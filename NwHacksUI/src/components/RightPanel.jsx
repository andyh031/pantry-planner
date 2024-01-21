import { Box, Text, Flex, HStack, Avatar, Input, List, ListItem, Button} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { userApi } from "../api/UserApi"
import { CloseIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"


function RightPanel({user, eatenMeals, setEatenMeals, totalCalories, setTotalCalories}) {
    const username = user.name
    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
    let date = new Date()
    let day = date.getDate()
    let year = date.getFullYear()
    let month = date.getMonth()

    const [calorieLimit, setCalorieLimit] = useState();
    const navigate = useNavigate();

    const signOut = () => {
        console.log("Signing Out");
        
        navigate("/login");
    }

    const deleteItem = (meal) => {
        setTotalCalories((prev) => prev - meal.cals)
        setEatenMeals((prevMeals)=> {
            return prevMeals.filter((prevMeal) => prevMeal.name !== meal.name)
        })
    }

    const handleClick = () => {
        userApi.updateCalories(user, calorieLimit)
    }

    useEffect(() => {
        userApi.getCalories(user).
        then((res) => {
            setCalorieLimit(res.data)
        })
    }, [])
    
    return (
        <>
        <Box bgColor='white'>
            <HStack  p='2rem' paddingInline='3rem'>
                <Avatar marginBlock='auto' marginInline='2rem' size='md' name={username} bg='teal.200'/>
                <Box>
                    <Text>{username}</Text>
                    <Button onClick={signOut}>Sign out</Button>
                </Box>
            </HStack>
            <Box borderBottom = '2px solid #F4F4F4'></Box>
            <Box p='3rem'>
                <Text fontSize='24px' fontWeight='semibold'>{months[month]} {day}, {year}</Text>
                <Text fontSize='12px'>MY MEALS TODAY: {eatenMeals.length}</Text>
                <HStack mt='1rem'>
                    <Text>Calorie Limit: </Text>
                    <Input marginInline='2rem' w='100px' type='number' value={calorieLimit} onChange={(e) => setCalorieLimit(e.target.value)}></Input>
                    <Button onClick={handleClick}>Update</Button>
                </HStack>
                <HStack mt='1rem'>
                    <Text>Total Calories: </Text>
                    {totalCalories > calorieLimit ? <Text marginInline='2rem' color='red'>{totalCalories}</Text> : <Text marginInline='2rem'>{totalCalories}</Text>}
                </HStack>
                <List p='1rem' border='1px solid #E8F5E4' borderRadius='1rem' marginBlock='2rem' spacing='10px'>
                    {eatenMeals?.map((meal) => {
                        return (
                            <ListItem key={meal} >
                                <Flex justifyContent='space-between'>
                                    <Text>{meal.name} ({meal.cals} cal)</Text>
                                    <Button size='sm' onClick={() => deleteItem(meal)}>
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

export default RightPanel