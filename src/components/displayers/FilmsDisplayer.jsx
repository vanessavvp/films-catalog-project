import { Box, Button, Divider, Heading } from '@chakra-ui/react'
import ItemCard from '../itemCard'

const FilmsDisplayer = ({ search = '', films }) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='flex-start'
      flexWrap='wrap'
      rowGap='12px'
      columnGap='12px'
      boxSize='100%'
    >
      { (search !== '') ? (<Heading as='h3' size='l'>Results for: {search}</Heading>) : null }
      { (search !== '') ? (<Divider w='95%'></Divider>) : null }
      {
        films?.map((film, index) => {
          return (<ItemCard key={index} img={film.poster_path} filmId={film.id}></ItemCard>)
        })
      }
    </Box>
  )
}

export default FilmsDisplayer
