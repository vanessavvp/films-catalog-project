import { Box, Checkbox, CheckboxGroup, Heading, Stack, Text } from '@chakra-ui/react'
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
    const newCheckedItems = [...checkedItems]

    currentIndex === -1
      ? newCheckedItems.push(value)
      : newCheckedItems.splice(currentIndex, 1)

    setCheckedItems(newCheckedItems)
    handleOnChange(newCheckedItems)
  }

  useEffect(() => {
    fetchGenres()
  }, [genres])

  return (
    <Box>
      <Heading as='h3' size='lg' color='white'>Genres</Heading>
      <CheckboxGroup>
        <Stack p={1} spacing={[2, 1]} direction={['row', 'column']}>
          {
            genres.map(({ id, name }) => {
              return (<Checkbox
                key={id}
                value={name}
                checked={checkedItems.indexOf(id) !== -1}
                onChange={() => handleChange(id)}
              >
                <Text color='white'>{name}</Text>
              </Checkbox>)
            })
          }
        </Stack>
      </CheckboxGroup>
    </Box>
  )
}

export default GenreFilter
