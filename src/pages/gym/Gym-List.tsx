import { Stack, Center, Box, Heading, Image, Button, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards';
import axios from 'axios';
import { Link } from 'react-router-dom';

function GymList() {
  const [gyms, setGyms] = useState<any>([]);
  let token = document.cookie.replace('%20', ' ');
  token = token.slice(6);

  useEffect(() => {
    getAllGym()
  }, [])

  const getAllGym = async () => {
    console.log(token)
    await axios.get('http://localhost:8000/api/v1/gym', {
      headers: {
        Authorization: token,
      }
    }).then((response) => {
      setGyms(response.data.gymList)
      console.log(response.data.gymList)
    })
  }

  return (
    <Stack align='center'>
      {
        !token ?
          <Stack>
            <Center mt="48">
              <Heading> Error 401</Heading>
            </Center>
            <Center>
              <Heading>Please Login First</Heading>
            </Center>
          </Stack >
          :
          gyms.map((gym: any) => {
            return (
              <VStack>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' mt='8' overflow='hidden' key={gym.id} >
                  <Image src={gym.imageLink} alt={gym.name} />
                  <Box p='4'>
                    <Heading as='h4' size='md'>
                      {gym.name}
                    </Heading>
                  </Box>
                  <Link to={`/gym-details/${gym.id}`}>
                    <Button m='4' colorScheme='teal'>
                      Details
                    </Button>
                  </Link>
                </Box>
              </VStack>
            )
          })
      }
      {/* <Cards /> */}
    </Stack >
  )
}

export default GymList