import { Box, Image, Text } from '@chakra-ui/react'

const CastCard = ({ img = '', castName = '' }) => {
  return (
    <Box>
      {
        img !== null &&
          (<Box maxWidth='200px' boxShadow='2xl' borderRadius='xl' overflow='hidden' borderWidth='1px' >
            <Image
              src={`http://image.tmdb.org/t/p/w500${img}`}
              alt='Cast card' /><Text p='2px'align='center'>{castName}</Text>
          </Box>)
      }
    </Box>
  )
}

export default CastCard
