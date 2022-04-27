import { Box, Divider, Heading, Stack } from '@chakra-ui/react'
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
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&release_date.gte=${querys}`)
    // fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&release_date.gte="1999-10-10"`)
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
    <Box >
      <Navbar></Navbar>
      <Stack p={10}>
        <Heading as='h3' size='xl'>Discover films</Heading>
        <Divider />
        <Box
          display='flex'
          justifyContent='flex-start'
          alignItems='flex-start'
          alignContent='stretch'
          flexWrap='wrap'
          rowGap='12px'
          columnGap='12px'
          w='50%'
        >
          <Box
            marginTop ='5px'
            borderRadius='lg'
            borderWidth='1px'
            bg='#8e94f2'
          ><FilmFilters handleClick={handleClick}></FilmFilters></Box>
          <Box marginTop ='5px'><FilmsDisplayer films={discoverResult}></FilmsDisplayer></Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default Discover
