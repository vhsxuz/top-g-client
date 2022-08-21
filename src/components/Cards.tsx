import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
function Cards() {

  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    title: 'Top G West Jakarta',
  }

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Box p='4'>
        <Heading as='h4' size='md'>
          {property.title}
        </Heading>
      </Box>
    </Box>
  )
}

export default Cards