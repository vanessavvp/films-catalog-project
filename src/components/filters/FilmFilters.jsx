import { Box } from '@chakra-ui/react'
import GenreFilter from './GenreFilter'
import RatingFilter from './RatingFilter'
import ReleaseDateFilter from './ReleaseDateFilter'

const FilmFilters = () => {
  return (
    <Box>
      <GenreFilter></GenreFilter>
      <RatingFilter></RatingFilter>
      <ReleaseDateFilter></ReleaseDateFilter>
    </Box>
  )
}

export default FilmFilters
