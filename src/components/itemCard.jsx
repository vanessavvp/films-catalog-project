import { Box, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const ItemCard = ({ img = '', filmId = '' }) => {
  const navigate = useNavigate()

  return (
    <Box>
      {
        img &&
          (<Box display='flex' alignContent='center' width='300px' height='450px' cursor='pointer' boxShadow='2xl' borderRadius='xl' overflow='hidden' borderWidth='1px' onClick={() => filmId !== '' && navigate(`/details/${filmId}`) }>
            <Image
              src={`http://image.tmdb.org/t/p/w500${img}`}
              alt='Item card'
              objectFit='contain'
            />
          </Box>)
      }
    </Box>
  )
}

export default ItemCard
