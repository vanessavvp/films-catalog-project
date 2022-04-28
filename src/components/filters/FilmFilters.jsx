import { Box, Button } from '@chakra-ui/react'
import { useState } from 'react'
import GenreFilter from './GenreFilter'
import RatingFilter from './RatingFilter'
import ReleaseDateFilter from './ReleaseDateFilter'

const FilmFilters = ({ handleClick }) => {
  const [releaseDate, setReleaseDate] = useState('yyyy-MM-dd')
  const [minimumRating, setMinimumRating] = useState('')
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

  return (
    <Box
      padding={7}
      flexWrap='wrap'
      borderRadius='xl'
      bg='#8e94f2'
    >
      <GenreFilter></GenreFilter>
      <RatingFilter handleOnChangeEnd={handleOnChangeEnd}></RatingFilter>
      <ReleaseDateFilter handleOnChange={handleOnChange}></ReleaseDateFilter>
      <Button variant='solid' color='black' value='search' onClick={handleOnClick}>Search</Button>
    </Box>
  )
}

export default FilmFilters
