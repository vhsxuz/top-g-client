import { FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Stack, Heading, Center, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const [username, setUsername] = useState('')
  const handleUsernameChange = (e: any) => setUsername(e.target.value)
  const isErrorUsername = username === ''

  const [password, setPassword] = useState('')
  const handlePasswordChange = (e: any) => setPassword(e.target.value)
  const isErrorPassword = password === ''

  const navigate = useNavigate()

  const register = async (e: any) => {
    e.preventDefault()
    await axios.post("http://localhost:8000/api/v1/auth/register", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response)
      navigate("/login")
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <Stack p='32'>
      <Center>
        <Heading pb='8'> Register </Heading>
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
      <Link to='/login'>
        <Button colorScheme='teal' mt='4' onClick={register}>
          Register
        </Button>
      </Link>
    </Stack>
  )
}

export default Register