import { Box, Button } from '@chakra-ui/react'
import { useState } from 'react'
import GenreFilter from './GenreFilter'
import RatingFilter from './RatingFilter'
import ReleaseDateFilter from './ReleaseDateFilter'

const FilmFilters = ({ handleClick }) => {
  const [releaseDate, setReleaseDate] = useState('yyyy-MM-dd')

  const handleOnClick = () => {
    // AQUI SI TAL HACER EL STRING QUE DEVUELVE PARA EL FETCH
    handleClick(releaseDate)
  }

  const handleOnChange = (input) => {
    setReleaseDate(input)
    console.log(input)
  }

  return (
    <Box>
      <GenreFilter></GenreFilter>
      <RatingFilter></RatingFilter>
      <ReleaseDateFilter handleOnChange={handleOnChange}></ReleaseDateFilter>
      <Button variant='solid' color='black' value='search' onClick={handleOnClick}>Search</Button>
    </Box>
  )
}

export default FilmFilters
