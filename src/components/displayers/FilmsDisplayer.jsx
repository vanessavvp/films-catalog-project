import { Box, Divider, Heading } from '@chakra-ui/react'
import ItemCard from '../itemCard'

const FilmsDisplayer = ({ search = '', films }) => {
  return (
    <Box
      p={1}
      display='flex'
      justifyContent='center'
      alignItems='flex-start'
      alignContent='stretch'
      flexWrap='wrap'
      rowGap='12px'
      columnGap='12px'
    >
      { (search !== '') && (<Heading as='h3' size='l'>Results for: {search}</Heading>) }
      { (search !== '') && (<Divider w='95%' />) }

      {
        films?.map((film, index) => {
          return (<ItemCard key={index} img={film?.poster_path} filmId={film.id}></ItemCard>)
        })
      }
    </Box>
  )
}

export default FilmsDisplayer
