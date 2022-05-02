import { Box, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const FilmCard = ({ img = '', filmId = '' }) => {
  const navigate = useNavigate()

  return (
    <Box>
      {
        img !== null &&
          (<Box w='200px' cursor='pointer' boxShadow='2xl' borderRadius='xl' overflow='hidden' borderWidth='1px' onClick={() => filmId !== '' && navigate(`/details/${filmId}`) }>
            <Image
              src={`http://image.tmdb.org/t/p/w500${img}`}
              alt='Film card' />
          </Box>)
      }
    </Box>
  )
}

export default FilmCard
