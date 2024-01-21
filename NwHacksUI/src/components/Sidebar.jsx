import { Image, Box, Button, Text, List, Checkbox, ListItem, Flex} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import React, { use***REMOVED***tate } from 'react'

function ***REMOVED***idebar() {

    const [items, setItems] = use***REMOVED***tate([{name: 'Cheese', date: 'Jan 30'}, {name: 'Apple', date: 'Jan 24'}])

    return (
        <>
        <Box h='100vh'>
            <Flex mb='2rem' justifyContent='center'>
                <Image borderRadius='100%' objectFit='cover' src='https://bit.ly/dan-abramov' box***REMOVED***ize='150px'/>
            </Flex>
            <Box borderTopRadius='2rem' p='2rem' backgroundColor='white'>
                <Flex justifyContent='space-between'>
                    <Box>
                        <Text font***REMOVED***ize='30px' fontWeight='bold'>My Pantry</Text>
                        <Text font***REMOVED***ize='12px'>INGREDIENT***REMOVED***: {items.length}</Text>
                    </Box>
                    <Button width='fit-content' marginBlock='auto' objectFit='cover' size='md' borderRadius='100%' color***REMOVED***cheme='green'>
                        <AddIcon/>
                    </Button>
                </Flex>
            </Box>
            <Box borderBottom = '2px solid #F4F4F4'></Box>
            <Box h='100vh' p='2rem' backgroundColor='white'>
                <List>
                    {items.map((item) => {
                        return (
                            <ListItem key={item.name}>
                                <Checkbox size='lg' borderColor='#B7D0B0' color***REMOVED***cheme='green'>
                                    <Text font***REMOVED***ize='15px'>{item.name}</Text>
                                    <Text font***REMOVED***ize='12px'>Expires {item.date}</Text>
                                </Checkbox>
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