import { Button, Center, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useCookies } from 'react-cookie';

function Login() {
  const [username, setUsername] = useState('')
  const handleUsernameChange = (e: any) => setUsername(e.target.value)
  const isErrorUsername = username === ''

  const [password, setPassword] = useState('')
  const handlePasswordChange = (e: any) => setPassword(e.target.value)
  const isErrorPassword = password === ''

  const [loginStatus, setLoginStatus] = useState(false)
  const navigate = useNavigate()


  const [cookies, setCookie] = useCookies(['token']);

  const login = async (e: any) => {
    e.preventDefault()
    await axios.post('http://localhost:8000/api/v1/auth/login', {
      username: username,
      password: password,
    }).then((response) => {
      setLoginStatus(true);
      const cookie = 'Bearer ' + response.data.token
      setCookie('token', cookie, { path: '/' })
      // document.cookie = `token=${cookie}`
      navigate("/");
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <Stack p='32'>
      <Center>
        <Heading pb='8'> Login </Heading>
      </Center>
      <FormControl isInvalid={isErrorUsername} mb='8'>
        <FormLabel>Username</FormLabel>
        <Input
          type='username'
          value={username}
          onChange={handleUsernameChange}
        />
        {!isErrorUsername ? (
          <FormHelperText>
            Enter the unique username
          </FormHelperText>
        ) : (
          <FormErrorMessage>Username is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={isErrorPassword}>
        <FormLabel>Password</FormLabel>
        <Input
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />
        {!isErrorPassword ? (
          <FormHelperText>
            Create strong password by combining words and letters
          </FormHelperText>
        ) : (
          <FormErrorMessage>Password is required.</FormErrorMessage>
        )}
      </FormControl>
      <Link to={loginStatus === true ? "/" : "/login"}>
        <Button colorScheme='teal' mt="4" onClick={login}>
          Login
        </Button>
      </Link>
    </Stack>
  )
}

export default Login;