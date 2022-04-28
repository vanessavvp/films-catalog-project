import { Box, Image } from '@chakra-ui/react'

const ItemCard = ({ img }) => {
  return (<>
    {
      img !== null
        ? (<Box w='18%' borderRadius='xl' overflow='hidden' borderWidth='1px'>
          <Image
            src={`http://image.tmdb.org/t/p/w500${img}`}
            alt='Film card' />
        </Box>)
        : <></>
    }
  </>
  )
}

export default ItemCard
