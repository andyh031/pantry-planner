import { Image, Box, Button, Text, List, Checkbox, ListItem, Flex} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import React, { use***REMOVED***tate } from 'react'

function ***REMOVED***idebar() {

    const items = [{name: 'Cheese', date: 'Jan 30'}, {name: 'Apple', date: 'Jan 24'}]

    return (
        <>
        <Box>
            <Flex mb='2rem' justifyContent='center'>
                <Image borderRadius='100%' objectFit='cover' src='https://bit.ly/dan-abramov' box***REMOVED***ize='150px'/>
            </Flex>
            <Box borderRadius='2rem' h='70vh' p='2rem' backgroundColor='white'>
                <Flex justifyContent='space-between'>
                    <Box>
                        <Text font***REMOVED***ize='30px' fontWeight='bold'>My Pantry</Text>
                        <Text font***REMOVED***ize='12px'>You have {items.length} ingredients</Text>
                    </Box>
                    <Button objectFit='cover' size='md' borderRadius='100%' color***REMOVED***cheme='green' transform='translate(0, 55px)' marginRight='20px'>
                        <AddIcon/>
                    </Button>
                </Flex>
                <Box marginBlock='1rem' borderBottom = '2px solid green'></Box>
                <List>
                    {items.map((item) => {
                        return (
                            <ListItem key={item.name}>
                                <Checkbox color***REMOVED***cheme='green'>
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