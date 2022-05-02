import { Button, ButtonGroup, Flex, Heading, Spacer, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { BiUser } from 'react-icons/bi'
import apiKey from '../services/filmsAPI'

const Navbar = () => {
  const [isUserLogged, setIsUserLogged] = useState(false)
  const navigate = useNavigate()

  const handleLogIn = async () => {
    await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => window.localStorage.setItem('request-token', data.request_token))
    const path = `https://www.themoviedb.org/authenticate/${window.localStorage.getItem('request-token')}?redirect_to=${window.location.origin}/logged`
    window.location.href = path
  }

  const handleLogOut = () => {
    window.localStorage.removeItem('session-ID')
    navigate('/')
    setIsUserLogged(false)
  }

  useEffect(() => {
    const isLogged = Boolean(window.localStorage.getItem('session-ID'))
    setIsUserLogged(isLogged)
  }, [])

  return (
    <VStack p={10} margin={10}>
      <Flex w='100%' alignItems='center'>
        <Heading as='h1' size='3xl'><Link to='/'>Films catalog.</Link></Heading>
        <Spacer></Spacer>
        <ButtonGroup variant='solid' spacing='6' color='#6247aa' size='lg'>
          <Button><Link to='/'>Home</Link></Button>
          <Button><Link to='/discover'>Discover</Link></Button>
          { isUserLogged && <Button><Link to='/favorites'>Favorites</Link></Button> }
          {
            isUserLogged ? <Button variant='outline' colorScheme='purple' rightIcon={<BiUser />} onClick={handleLogOut}>Log out</Button> : <Button variant='outline' colorScheme='purple' rightIcon={<BiUser />} onClick={handleLogIn}>Log in</Button>
          }
        </ButtonGroup>
      </Flex>
    </VStack>
  )
}

export default Navbar
