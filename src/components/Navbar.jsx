import { Button, ButtonGroup, Flex, Heading, Spacer, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <VStack p={10}>
      <Flex w='100%'>
        <Heading as='h1' size='3xl'>Films catalog.</Heading>
        <Spacer></Spacer>
        <ButtonGroup variant='solid' spacing='6' color='#6247aa'>
          <Button size='lg'>
            <Link to='/'>Home</Link>
          </Button>
          <Button size='lg'>
            <Link to='/discover'>Discover</Link>
          </Button>
          <Button size='lg'>
            <Link to='/favorites'>Favorites</Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </VStack>
  )
}

export default Navbar
