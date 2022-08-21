import { Box, Button, Center, Heading, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ThreadList() {
  const [threads, setThread] = useState<any>([])
  let token = document.cookie.replace('%20', ' ').slice(6)

  useEffect(() => {
    getAllThread()
  }, [])

  const getAllThread = async () => {
    await axios.get('http://localhost:8000/api/v1/thread/', {
      headers: {
        Authorization: token,
      }
    }).then((response) => {
      setThread(response.data.threadsList)
      console.log(response.data.threadsList)
    })
  }

  return (
    <Stack>
      <Center>
        <Heading>
          Thread Lists
        </Heading>
      </Center>
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
          threads.map((thread: any) => {
            return (
              <Stack ps='16' pe='16' key={thread.id}>
                <Box border='1px' mt='8' p='4' borderRadius='lg'>
                  <Heading size='md' pb='4'>
                    {thread.title}
                  </Heading>
                  <Text>
                    Question: {thread.question}
                  </Text>
                  <Link to={`/thread-details/${thread.id}`}>
                    <Button mt='2' colorScheme='linkedin'>
                      View Comments
                    </Button>
                  </Link>
                </Box>
              </Stack>
            )
          }
          )
      }
    </Stack>
  )
}

export default ThreadList
