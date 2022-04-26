import { Box, Button } from '@chakra-ui/react'
import GenreFilter from './GenreFilter'
import RatingFilter from './RatingFilter'
import ReleaseDateFilter from './ReleaseDateFilter'

const FilmFilters = ({ handleSubmit }) => {
  return (
    <Box>
      <GenreFilter></GenreFilter>
      <RatingFilter></RatingFilter>
      <ReleaseDateFilter></ReleaseDateFilter>
      <Button variant='solid' color='black' value='search'>Search</Button>
    </Box>
  )
}

export default FilmFilters
