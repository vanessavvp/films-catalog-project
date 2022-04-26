import { Box, Image } from '@chakra-ui/react'

const ItemCard = ({ img }) => {
  return (
    <Box w='10%' borderRadius='lg' borderColor='gray' overflow='hidden'>
      {
        img !== null
          ? <Image
            borderRadius='lg'
            src={`http://image.tmdb.org/t/p/w500${img}`}
            alt='Film card' />
          : <Image
            borderRadius='lg'
            src={'https://freepikpsd.com/file/2019/10/image-not-found-png-4-Transparent-Images.png'}
            alt='Film card' />
      }

    </Box>
  )
}

export default ItemCard
