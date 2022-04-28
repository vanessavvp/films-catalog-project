import { Box, Divider, Heading, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

const api_key = import.meta.env.VITE_MOVIEDB
const Details = () => {
  const { filmId } = useParams()
  const [filmInfo, setFilmInfo] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key={api_key}`)
      .then(response => response.json())
      .then(data => {
        setFilmInfo(data)
        console.log(data)
      })
  }, [filmId])
  return (
    <Box >
      <Navbar></Navbar>
      <Stack p={10}>
        <Heading as='h3' size='xl'>Film details {filmId}</Heading>
        <Divider />
      </Stack>
    </Box>
  )
}

export default Details
