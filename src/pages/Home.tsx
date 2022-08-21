import { Button, Center, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Home() {
  // window.location.reload()
  return (
    <div>
      <Center>
        <Heading mt='36'>
          Welcome to Top G
        </Heading>
      </Center>
      <Center>
        <Text>
          Let's checkout what we got here
        </Text>
      </Center>
      <Center>
        <Link to='/gym-list'>
          <Button colorScheme='whatsapp' mt='4'>
            Explore
          </Button>
        </Link>
        <Link to='/thread-list'>
          <Button colorScheme='linkedin' mt='4' ms='4'>
            Checkout Our Threads
          </Button>
        </Link>
      </Center>
    </div >
  )
}

export default Home