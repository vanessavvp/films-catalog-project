import { Box, Image } from '@chakra-ui/react'

const ItemCard = ({ img }) => {
  return (<>
    {
      img !== null
        ? (<Box w='10%' borderRadius='xl' overflow='hidden'>
          <Image
            borderRadius='lg'
            src={`http://image.tmdb.org/t/p/w500${img}`}
            alt='Film card' />
        </Box>)
        : <></>
    }
  </>
  )
}

export default ItemCard
