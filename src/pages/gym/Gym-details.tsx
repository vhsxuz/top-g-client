import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Button, Center, Heading, Image, Stack, Text } from '@chakra-ui/react';

function GymDetails() {

  const [gym, setGym] = useState<any>([]);
  let token = document.cookie.replace('%20', ' ').slice(6);
  const id = useParams()

  useEffect(() => {
    getGym()
  }, [])

  const getGym = async () => {
    await axios.get(`http://localhost:8000/api/v1/gym/${id.id}`, {
      headers: {
        Authorization: token,
      }
    }).then((response) => {
      setGym(response.data.gymInfo)
    })
  }

  const checkIn = async (e: any) => {
    e.preventDefault();
    await axios({
      method: 'patch', //you can set what request you want to be
      url: `http://localhost:8000/api/v1/gym/${id.id}`,
      data: {
        opt: 'checkIn',
      },
      headers: {
        Authorization: token
      }
    })
  }
  const checkOut = async (e: any) => {
    e.preventDefault();
    await axios({
      method: 'patch', //you can set what request you want to be
      url: `http://localhost:8000/api/v1/gym/${id.id}`,
      data: {
        opt: 'checkOut',
      },
      headers: {
        Authorization: token
      }
    })
  }

  return (
    <Stack>
      <Center>
        <Heading>
          {gym.name}
        </Heading>
      </Center>
      <Center pt='4'>
        <Image src={gym.imageLink} w='50%' />
      </Center>
      <Center>
        <Text>
          {gym.address}
        </Text>
      </Center>
      <Center>
        <Text>
          capacity: {gym.currentCapacity} / {gym.maxCapacity}
        </Text>
      </Center>
      <Center>
        <Button colorScheme='whatsapp' onClick={checkIn}>
          Check In
        </Button>
        <Button colorScheme='red' onClick={checkOut} ms='4'>
          Check Out
        </Button>
      </Center>
    </Stack>
  )
}

export default GymDetails