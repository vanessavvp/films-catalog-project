import { Box, Checkbox, CheckboxGroup, Heading, Spacer, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const api_key = import.meta.env.VITE_MOVIEDB
const GenreFilter = () => {
  const items = {
    28: false,
    12: false,
    16: false,
    35: false
  }
  const [checkedItems, setCheckedItems] = useState(items)
  const [genres, setGenres] = useState([])

  const fetchGenres = () => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then(response => response.json())
      .then(data => setGenres(data.genres))
  }

  const handleChange = (event) => {
    for (const [key, value] of Object.entries(items)) {
      console.log(event.target.value)
      if (event.target.value === key) {
        checkedItems[key] = true
      }
    }
    console.log(checkedItems)
  }

  useEffect(() => {
    fetchGenres()
  }, [genres])
  // REVISE THIS VIDEO FOR CHECKBOX CONTROL https://www.youtube.com/watch?v=ArvR-ddOO78
  return (
    <Box>
      <Heading as='h3' size='lg' color='white'>Genres</Heading>
      <CheckboxGroup>
        <Stack p={1} spacing={[2, 1]} direction={['row', 'column']}>
          <Checkbox value='28'onChange={handleChange}><Text color='white' >Action</Text></Checkbox>
          <Checkbox value='12'onChange={handleChange}><Text color='white' >Adventure</Text></Checkbox>
          <Checkbox value='16'><Text color='white'>Animation</Text></Checkbox>
          <Checkbox value='35'><Text color='white'>Comedy</Text></Checkbox>
          <Checkbox value='80'><Text color='white'>Crime</Text></Checkbox>
          <Checkbox value='99'><Text color='white'>Documentray</Text></Checkbox>
          <Checkbox value='18'><Text color='white'>Drama</Text></Checkbox>
          <Checkbox value='10751'><Text color='white'>Family</Text></Checkbox>
          <Checkbox value='14'><Text color='white'>Fantasy</Text></Checkbox>
          <Checkbox value='36'><Text color='white'>History</Text></Checkbox>
          <Checkbox value='27'><Text color='white'>Horror</Text></Checkbox>
          <Checkbox value='10402'><Text color='white'>Music</Text></Checkbox>
          <Checkbox value='9648'><Text color='white'>Mystery</Text></Checkbox>
          <Checkbox value='10749'><Text color='white'>Romance</Text></Checkbox>
          <Checkbox value='53'><Text color='white'>Thriller</Text></Checkbox>
          <Checkbox value='10752'><Text color='white'>War</Text></Checkbox>
          <Checkbox value='37'><Text color='white'>Western</Text></Checkbox>
        </Stack>
      </CheckboxGroup>
    </Box>
  )
}

export default GenreFilter
