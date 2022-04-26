import { Box, Image } from '@chakra-ui/react'

const ItemCard = (props) => {
  return (
    <Box w='15%' h='25%' borderRadius='lg' overflow='hidden'>
      {
        props.img !== null
          ? <Image
            borderRadius='lg'
            src={`http://image.tmdb.org/t/p/w500${props.img}`}
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
