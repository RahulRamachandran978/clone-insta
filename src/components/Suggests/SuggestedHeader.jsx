import { Avatar, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'} gap={2}> 
            <Avatar name='as a programmer' size={'lg'} src='/profilepic.png' />
            <Text fontSize={12} fontWeight={'bold'}>
                asaprogrammer
            </Text>
        </Flex>
        <Link as={RouterLink} to={'/auth'} fontSize={12} fontWeight={'medium'} color={'blue.500'} cursor={'pointer'} _hover={{textDecoration:'none',color:'blue.300'}}>
             Log Out
        </Link>
    </Flex>
  )
}

export default SuggestedHeader
