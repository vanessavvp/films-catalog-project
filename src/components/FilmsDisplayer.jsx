import { Box, Flex } from '@chakra-ui/react'
import FilmCard from './FilmCard'

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
        props.movies.map((movie, index) => {
          return (<FilmCard key={index} img={movie.poster_path}></FilmCard>)
        })
      }
    </Box>

  )
}

export default FilmsDisplayer
