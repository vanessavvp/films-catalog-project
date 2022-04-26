import { Box } from '@chakra-ui/react'
import ItemCard from './itemCard'

const FilmsDisplayer = (props) => {
  return (
    <Box
      margin='20px'
      display='flex'
      justifyContent='center'
      alignItems='flex-start'
      alignContent='stretch'
      flexWrap='wrap'
      rowGap='10px'
      columnGap='10px'
    >
      {
        props.films.map((film, index) => {
          return (<ItemCard key={index} img={film.poster_path}></ItemCard>)
        })
      }
    </Box>
  )
}

export default FilmsDisplayer
