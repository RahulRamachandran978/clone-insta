import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
       <SuggestedHeader />
       <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={'bold'} _hover={{color:'gray.400'}} cursor={'pointer'}>
          See All
        </Text>
        </Flex> 
        <SuggestedUser name='Frank Ocean' followers={1292} avatar='https://randomuser.me/api/portraits/men/70.jpg'/>
        <SuggestedUser name='Joe Biden' followers={132} avatar='https://randomuser.me/api/portraits/men/54.jpg'/>
        <SuggestedUser name='Elon Musk' followers={192} avatar='https://randomuser.me/api/portraits/men/42.jpg'/>

        <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
          @ 2023 Built By{' '}
          <Link href='https://github.com/RahulRamachandran978?tab=repositories' target='blank'  color={'blue.500'} fontSize={14}>
            AS a Programmer
          </Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers

