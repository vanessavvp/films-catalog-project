import { Button, ButtonGroup, Flex, Heading, Spacer, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <VStack p={10}>
      <Flex w='100%'>
        <Heading as='h1' size='3xl'>Films catalog.</Heading>
        <Spacer></Spacer>
        <ButtonGroup variant='outline' spacing='6'>
          <Button colorScheme='purple' size='lg'>
            <Link to='/'>Home</Link>
          </Button>
          <Button colorScheme='purple' size='lg'>
            <Link to='/favorites'>Favorites</Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </VStack>
  )
}

export default Navbar
