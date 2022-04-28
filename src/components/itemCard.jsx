import { Box, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ItemCard = ({ img }) => {
  const handleClick = (event) => {
    console.log('aqui')
  }
  return (
    <Box width='18%' borderRadius='xl' overflow='hidden' borderWidth='1px' onClick={handleClick}>
      {
        img !== null
          ? (<Image
            src={`http://image.tmdb.org/t/p/w500${img}`}
            alt='Film card' />)
          : null
      }
    </Box>
  )
}

export default ItemCard
