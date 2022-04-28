import { Box, Checkbox, CheckboxGroup, Heading, Radio, Spacer, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const api_key = import.meta.env.VITE_MOVIEDB
const GenreFilter = ({ handleOnChange }) => {
  const [checkedItems, setCheckedItems] = useState([])
  const [genres, setGenres] = useState([])

  const fetchGenres = () => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then(response => response.json())
      .then(data => setGenres(data.genres))
  }

  const handleChange = (value) => {
    const currentIndex = checkedItems.indexOf(value)
    const newChecked = [...checkedItems]

    currentIndex === -1
      ? newChecked.push(value)
      : newChecked.splice(currentIndex, 1)

    setCheckedItems(newChecked)
    handleOnChange(newChecked)
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
          {
            genres.map((genre, index) => {
              return (<Checkbox
                key={index}
                value={genre.id}
                checked={checkedItems.indexOf(genre.id) !== -1}
                onChange={() => handleChange(genre.id)}
              >
                <Text color='white'>{genre.name}</Text>
              </Checkbox>)
            })
          }
        </Stack>
      </CheckboxGroup>
    </Box>
  )
}

export default GenreFilter
/* <Checkbox value='28'onChange={handleChange}><Text color='white' >Action</Text></Checkbox>
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
          <Checkbox value='37'><Text color='white'>Western</Text></Checkbox> */
