import { Box, Center, Heading, Stack, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ThreadDetail() {

  const [thread, setThread] = useState<any>([]);
  const [comments, setComment] = useState<any>([]);
  const [users, setUser] = useState<any>([]);
  let token = document.cookie.replace('%20', ' ').slice(6)
  const id = useParams()

  useEffect(() => {
    getThread()
  }, [])

  const getThread = async () => {
    await axios.get(`http://localhost:8000/api/v1/thread/${id.id}`, {
      headers: {
        Authorization: token,
      }
    }).then((response) => {
      setThread(response.data.thread)
      setComment(response.data.thread.comments)
      let user: any = []

      response.data.thread.comments.forEach((element: any) => {
        user.push(element.user.username)
      });
      setUser(user)
    })
  }

  return (
    <Stack>
      <Box mb='10'>
        <Center>
          <Heading size='md'>
            {thread.title}
          </Heading>
        </Center>
        <Center p='4' textAlign='center'>
          <Text>
            {thread.question}
          </Text>
        </Center>
      </Box>
      <Box>
        <Box border='1px' borderRadius='lg' p='10' ms='36' me='36'>
          <Heading size='md' pb='4'>
            Comments
          </Heading>
          {
            comments.map((comment: any, index: number) => {
              return (
                <Text pb='4' key={comment.id}>
                  <Text as='u'>
                    {users[index]}
                  </Text>
                  <br />
                  {comment.content}
                  <br />
                  Posted at: {comment.createdAt.slice(0, 10)}
                </Text>
              )
            })
          }
        </Box>
      </Box>
    </Stack>
  )
}

export default ThreadDetail