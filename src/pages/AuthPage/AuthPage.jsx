import { Box, Center, Container, Flex, Image, VStack } from '@chakra-ui/react'
import AuthForm from '../../components/AuthForm/AuthForm'
import React from 'react'

const AuthPage = () => {
  return (
    <Flex minH={'100vh'} justifyContent={'Center'} alignItems={'Center'} px={4}>
        <Container maxW={'container.md'} padding={0}>
            <Flex justifyContent={'center'} alignContent={'center'} gap={10}>
                {/* left side  */}
            <Box display={{base:'none',md:'block'}}> 
                <Image src='/auth.png' h={600} alt='phone img' />
            </Box>
            
            {/* right side  */}
            <VStack spacing={4} align={'stretch'}>
                <AuthForm />
                <Box textAlign={'center'}>Get the app.</Box>
                <Flex gap={5} justifyContent={'center'}>
                    <Image src='/playstore.png' alt='playstore'  h={10}/>
                    <Image src='/microsoft.png' alt='microsoft'  h={10}/>
                </Flex>
            </VStack>
            </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage
