import { Box, Divider, Heading, Spacer, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import FilmsDisplayer from '../components/displayers/FilmsDisplayer'
import FilmFilters from '../components/filters/FilmFilters'
import Navbar from '../components/Navbar'

const api_key = import.meta.env.VITE_MOVIEDB
const Discover = () => {
  const [querys, setQuerys] = useState('')
  const [discoverResult, setDiscoverResult] = useState([])

  const handleClick = (input) => {
    setQuerys(input)
  }

  const fetchDiscover = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}${querys}&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setDiscoverResult(data.results)
      })
  }

  useEffect(() => {
    fetchDiscover()
  }, [querys])

  return (
    <Box>
      <Navbar></Navbar>
      <Stack p={10} >
        <Heading as='h3' size='xl'>Discover films</Heading>
        <Divider />
        <Spacer></Spacer>
        <Stack direction='row'>
          <FilmFilters handleClick={handleClick}></FilmFilters>
          <FilmsDisplayer films={discoverResult}></FilmsDisplayer>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Discover
