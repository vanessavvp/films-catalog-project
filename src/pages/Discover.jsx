import { Box, Divider, Heading, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import FilmsDisplayer from '../components/displayers/FilmsDisplayer'
import FilmFilters from '../components/filters/FilmFilters'
import Navbar from '../components/Navbar'

const Discover = () => {
  const [genres, setGenres] = useState([])
  const [rating, setRating] = useState(0)
  const [releaseDate, setReleaseDate] = useState('') // "2010-08-30"

  const handleSubmit = () => {

  }

  useEffect(() => {
  }, [genres])

  useEffect(() => {
  }, [rating])

  useEffect(() => {
  }, [releaseDate])

  return (
    <Box >
      <Navbar></Navbar>
      <Stack p={10}>
        <Heading as='h3' size='xl'>Discover films</Heading>
        <Divider />
        <Box
          display='flex'
          direction='column'
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
          ><FilmFilters handleSubmit={handleSubmit}></FilmFilters></Box>
          <Box marginTop ='5px'><FilmsDisplayer films={[]}></FilmsDisplayer></Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default Discover
