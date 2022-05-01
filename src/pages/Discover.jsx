import { Box, Button, Divider, Heading, Spacer, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import FilmsDisplayer from '../components/displayers/FilmsDisplayer'
import FilmFilters from '../components/filters/FilmFilters'
import Navbar from '../components/Navbar'
import apiKey from '../services/filmsAPI'

const Discover = () => {
  const [querys, setQuerys] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [discoverResult, setDiscoverResult] = useState([])
  let displayer = <FilmsDisplayer films={discoverResult}></FilmsDisplayer>

  const handlePages = () => {
    setCurrentPage(currentPage + 1)
  }

  const handleClick = (input) => {
    setQuerys(input)
  }

  const fetchDiscover = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}${querys}&include_adult=false&page=${currentPage}`)
      .then(response => response.json())
      .then(data => setDiscoverResult(data.results))
  }
  // if oage 1, flecha delante
  // if page igual a la ultima fecha atras
  // if page not ninguno de los dos, ambas flechas
  useEffect(() => {
    fetchDiscover()
    displayer = <FilmsDisplayer films={discoverResult}></FilmsDisplayer>
  }, [querys])
  // ID POR PÁGINA EN EL FILMSDISPLAYER
  return (
    <Box>
      <Navbar></Navbar>
      <Stack p={10} >
        <Heading as='h3' size='xl'>Discover films</Heading>
        <Divider />
        <Spacer></Spacer>
        <Box display='flex' justifyContent='flex-start' p={5}>
          <FilmFilters handleClick={handleClick}></FilmFilters>
          <Box display='flex' flexDirection='column' gap='20px'>
            {displayer}
            <Button variant='solid'onClick={handlePages}>Search more</Button></Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default Discover
