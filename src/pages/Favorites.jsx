import { Box, Divider, Heading, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import FilmsDisplayer from '../components/displayers/FilmsDisplayer'
import Navbar from '../components/Navbar'
import apiKey from '../services/filmsAPI'

const Favorites = () => {
  const [favFilms, setFavFilms] = useState([])

  const fetchSessionID = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/account?api_key=${apiKey}&session_id=${window.localStorage.getItem('session-ID')}`)
    const data = response.json()
    return data.id
  }

  useEffect(() => {
    const fetchFavFilms = async () => {
      const sessionID = await fetchSessionID()
      await fetch(`https://api.themoviedb.org/3/account/${sessionID}/favorite/movies?api_key=${apiKey}&sort_by=created_at&session_id=${window.localStorage.getItem('session-ID')}`)
        .then(response => response.json())
        .then(data => setFavFilms(data.results))
    }
    fetchFavFilms()
  }, [])

  return (
    <Box >
      <Navbar></Navbar>
      <Stack p={10} margin={10}>
        <Heading as='h3' size='xl'>Favorites films</Heading>
        <Divider />
        <FilmsDisplayer films={favFilms}></FilmsDisplayer>
      </Stack>
    </Box>
  )
}

export default Favorites
