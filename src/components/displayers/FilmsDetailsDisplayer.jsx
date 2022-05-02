import { Box } from '@chakra-ui/react'
import FilmCard from '../cards/FilmCard'

const FilmsDetailsDisplayer = ({ films }) => {
  return (
    <Box
      margin='20px'
      display='flex'
      justifyContent='center'
      flexWrap='wrap'
      rowGap='12px'
      columnGap='12px'
    >
      {
        films?.map((film, index) => {
          return (<FilmCard key={index} img={film.poster_path} filmId={film.id}></FilmCard>)
        })
      }
    </Box>
  )
}

export default FilmsDetailsDisplayer
