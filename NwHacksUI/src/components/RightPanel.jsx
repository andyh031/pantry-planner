import { Box, Text, Flex, H***REMOVED***tack, Avatar, Input, List, ListItem, CloseButton, Button} from "@chakra-ui/react"
import { use***REMOVED***tate } from "react"


function RightPanel() {
    const name = "Ben Dover"
    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGU***REMOVED***T", "***REMOVED***EPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
    let date = new Date()
    let day = date.getDate()
    let year = date.getFullYear()
    let month = date.getMonth()

    const [calorieLimit, setCalorieLimit] = use***REMOVED***tate(1200);
    const [eatenMeals, setEatenMeals] = use***REMOVED***tate(['thing1', 'thing2', 'thing3'])

    const signOut = () => {
        console.log("***REMOVED***igning Out");
    }
    
    return (
        <>
        <Box bgColor='white'>
            <H***REMOVED***tack p='2rem' paddingInline='3rem'>
                <Avatar marginBlock='auto' marginInline='2rem' size='md' name='Ben Dover' bg='teal.200'/>
                <Box>
                    <Text>{name}</Text>
                    <Button onClick={signOut}>***REMOVED***ign out</Button>
                </Box>
            </H***REMOVED***tack>
            <Box borderBottom = '2px solid #B7D0B0'></Box>
            <Box p='3rem'>
                <Text font***REMOVED***ize='24px' fontWeight='semibold'>{months[month]} {day}, {year}</Text>
                <Text font***REMOVED***ize='12px'>MY MEAL***REMOVED*** TODAY: 2</Text>
                <H***REMOVED***tack mt='1rem'>
                    <Text>Calorie Limit: </Text>
                    <Input marginInline='2rem' w='100px' placeholder={calorieLimit}></Input>
                </H***REMOVED***tack>
                <H***REMOVED***tack mt='1rem'>
                    <Text>Total Calories: </Text>
                    <Text marginInline='2rem'>1100</Text>
                </H***REMOVED***tack>
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