import { Box, Checkbox, CheckboxGroup, Heading, Spacer, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const api_key = import.meta.env.VITE_MOVIEDB
const GenreFilter = () => {
  const [checkedItems, setCheckedItems] = useState([false])
  const [genres, setGenres] = useState([])

  const fetchGenres = () => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then(response => response.json())
      .then(data => setGenres(data.genres))
  }

  const handleClick = (event) => {
  }

  useEffect(() => {
    fetchGenres()
  }, [genres])

  return (
    <Box>
      <Heading as='h3' size='lg' color='white'>Genres</Heading>
      <CheckboxGroup>
        <Stack p={1} spacing={[2, 1]} direction={['row', 'column']}>
          <Checkbox value='0'><Text color='white'>Prueba</Text></Checkbox>)
          {
            genres.map((genre, index) => {
              return (<Checkbox key={index} value={genre.id}><Text color='white'>{genre.name}</Text></Checkbox>)
            })
          }
        </Stack>
      </CheckboxGroup>
    </Box>
  )
}

export default GenreFilter
