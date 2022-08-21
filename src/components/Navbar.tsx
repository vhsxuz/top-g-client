import { Box, Flex, Heading, Spacer, ButtonGroup, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';

function Navbar() {
  let token = document.cookie.slice(6);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const logout = () => {
    removeCookie('token')
    console.log(token);
  }

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' m='4'>
      <Box p='2'>
        <Heading size='md'>Top G</Heading>
      </Box>
      <Spacer />
      {
        token ?
          <Link to='/login'>
            <Button colorScheme='teal' size='sm' onClick={logout}>
              Logout
            </Button>
          </Link>
          :
          <ButtonGroup gap='2'>
            <Link to='/register'>
              <Button colorScheme='teal' size='sm'>
                Register
              </Button>
            </Link>
            <Link to="/login">
              <Button colorScheme='teal' size='sm'>
                Login
              </Button>
            </Link>
          </ButtonGroup>
      }

    </Flex>
  )
}

export default Navbar