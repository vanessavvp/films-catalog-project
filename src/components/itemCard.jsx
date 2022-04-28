import { Box, Image, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const ItemCard = ({ img, filmId = '' }) => {
  const navigate = useNavigate()

  return (
    <>
      {
        img !== null
          ? (<Box width='18%' borderRadius='xl' overflow='hidden' borderWidth='1px' onClick={() => navigate(`/details/${filmId}`)}>
            <Image
              src={`http://image.tmdb.org/t/p/w500${img}`}
              alt='Film card' />
          </Box>)
          : null
      }
    </>
  )
}

export default ItemCard
