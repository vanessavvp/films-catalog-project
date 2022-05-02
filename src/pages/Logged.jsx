import { Box, Button, Divider, Flex, Heading, Spacer, Stack, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import apiKey from '../services/filmsAPI'

const Logged = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const [isApproved, setIsApproved] = useState(false)

  const init = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: `{"request_token": "${query.get('request_token')}"}`
  }

  useEffect(() => {
    const fetchPostCreateSessionID = async () => {
      await fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`, init)
        .then(response => response.json())
        .then(data => {
          if (data.success) window.localStorage.setItem('session-ID', data.session_id)
          window.localStorage.removeItem('request-token')
        })
    }
    fetchPostCreateSessionID()
  }, [])

  return (<Box >
    <VStack p={10}>
      <Flex w='100%' direction='column'>
        <Heading as='h1' size='3xl'>Films catalog.</Heading>
        <Spacer></Spacer>
        <Box display='flex' flexDirection='row' justifyContent='center' marginTop={10} gap='20px'>
          <Heading as='h3' size='xl'>Sucessful login!</Heading>
          <Button colorScheme='purple'><Link to='/'>Find more films</Link>
          </Button>
        </Box>
      </Flex>
    </VStack>
  </Box>)
}

export default Logged
