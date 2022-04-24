import { Box, Image } from '@chakra-ui/react'

const FilmCard = (props) => {
  return (
    <Box maxW='sm' borderRadius='lg'>
      <Image
        borderRadius='lg'
        src={`http://image.tmdb.org/t/p/w185${props.img}`}
        alt='Dan Abramov' />
    </Box>
  )
}

export default FilmCard
