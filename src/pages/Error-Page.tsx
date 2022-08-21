import { Stack, Center, Heading } from '@chakra-ui/react'
import React from 'react'

function ErrorPage() {
  return (
    <Stack>
      <Center mt="48">
        <Heading> Error 404</Heading>
      </Center>
      <Center>
        <Heading>Page Not Found</Heading>
      </Center>
    </Stack >
  )
}

export default ErrorPage