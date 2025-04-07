import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants';

const PostFooter = ({username}) => {
  const [isLiked,setIsLiked] = useState(false);
  const [likes,setLikes] = useState(1000)

  const handleLike = ()=>{
    if(isLiked){
      setIsLiked(false);
      setLikes(likes +1);
    }else{
      setIsLiked(true);
      setLikes(likes -1);
    }
  }
  return (
    <Box mb={10}>
      <Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={2} mt={4}> 
        <Box onClick={handleLike} cursor={'pointer'} fontSize={18}>
          {isLiked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
        </Box>
        <Box cursor={'pointer'} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={'sm'}>
        {likes} likes 
      </Text>
      <Text fontSize={'sm'} fontWeight={700}>
        {username} {" "}
        <Text as={'span'} fontWeight={400}>Feeling Good</Text>
      </Text>
      <Text fontSize={'sm'} color={'gray'}>View all 1000 Comments</Text>
      <Flex alignItems={'center'} gap={2} justifyContent={'space-between'} w={'full'}>
        <InputGroup>
          <Input variant={'flushed'} placeholder={'Add a comment...'} fontSize={14} />
          <InputRightElement>
            <Button background={'transparent'} color={'blue.500'} fontSize={14} fontWeight={600} cursor={'pointer'} _hover={{color:"white"}}>Post</Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  )
}

export default PostFooter
