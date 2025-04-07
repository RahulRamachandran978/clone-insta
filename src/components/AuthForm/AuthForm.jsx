import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import { em } from 'framer-motion/client';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {

  const [isLogin,setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [input,setInput] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const hanldeAuth = ()=>{
    if( !input.email || !input.password) {
       alert('Please fill all the fields');
       return
    }else{
      navigate('/')
    }
  }
  return (
    <>
        <Box border={"1px solid gray"} borderRadius={4} padding={5} marginTop={2}>
            <VStack spacing={4}>
                <Image src='/logo.png' alt='logo' h={24} cursor={'pointer'} />
                <Input
                 placeholder='Email'
                 value={input.email}
                 onChange={(e)=> setInput({...input,email:e.target.value})}
                 fontSize={14}
                 type='email'
                 />
                 <Input 
                 placeholder='Password'
                 fontSize={14}
                 type='password'
                 value={input.password}
                 onChange={(e)=> setInput({...input,password:e.target.value})}
                 />
                 {! isLogin ? <Input 
                 placeholder='Confirm Password'
                 fontSize={14}
                 type='password'
                 value={input.confirmPassword}
                 onChange={(e)=>setInput({...input,confirmPassword:e.target.value})}
                 />: null}
                 <Button w={'full'} colorScheme='blue' size={'sm'} fontSize={14} onClick={hanldeAuth}>
                  {isLogin ? "Login" : "Sign Up"}
                  </Button>
                  {/* ---------------- OR ---------------- */}
                  <Flex alignItems={'center'} justifyContent={'center'} gap={1} my={4} w={'full'}>
                    <Box flex={2}  h={'1px'} bg={'gray.400'}/>
                    <Text mx={1}   color={'white'}>OR</Text>
                    <Box flex={2}  h={'1px'} bg={'gray.400'}/>
                  </Flex>
                  <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
                    <Image src='/google.png' alt='google-icon' w={5} />
                    <Text mx={2} color={'blue.500'}>Login with Google</Text>
                  </Flex>
            </VStack>
        </Box>
        <Box border={'1px solid gray'} borderRadius={4} padding={5}>
          <Flex alignItems={'center'} justifyContent={'center'}>
            <Box mx={2} fontSize={14}>
              {isLogin ? "Don't have an account ?" : "Alredy have an account?"}
            </Box>
            <Box onClick={()=> setIsLogin(!isLogin)} color={'blue.500'} cursor={'pointer'}>
              {isLogin ? 'Sign Up' : 'Login'}
            </Box>
          </Flex>
        </Box>
    </>
  )
}

export default AuthForm
