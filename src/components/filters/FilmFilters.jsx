import { Box, Button, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import GenreFilter from './GenreFilter'
import RatingFilter from './RatingFilter'
import ReleaseDateFilter from './ReleaseDateFilter'

const FilmFilters = ({ handleClick }) => {
  const [releaseDate, setReleaseDate] = useState('yyyy-MM-dd')
  const [minimumRating, setMinimumRating] = useState(0)
  const [selectedGenres, setSelectedGenres] = useState([])

  const handleOnClick = () => {
    let query = ''
    if (releaseDate !== 'yyyy-MM-dd') query += `&release_date.gte=${releaseDate}`
    if (minimumRating !== '') query += `&vote_average.gte=${minimumRating}`
    if (selectedGenres.length > 0) query += `&with_genres=${selectedGenres}`
    handleClick(query)
  }

  const handleOnChange = (input) => {
    setReleaseDate(input)
  }

  const handleOnChangeEnd = (input) => {
    setMinimumRating(input)
  }
  // FIXXXXX FLEXXX
  return (<>
    <Box
      margin='20px'
      padding={7}
      borderRadius='xl'
      bg='#8e94f2'
      gap='20px'
      h='100%'
    >
      <GenreFilter></GenreFilter>
      <RatingFilter handleOnChangeEnd={handleOnChangeEnd}></RatingFilter>
      <ReleaseDateFilter handleOnChange={handleOnChange}></ReleaseDateFilter>
      <Box display='flex' justifyContent='center'>
        <Button w='100%' variant='solid' color='black' value='search' onClick={handleOnClick}>Search</Button>
      </Box>
    </Box>
  </>
  )
}

export default FilmFilters
