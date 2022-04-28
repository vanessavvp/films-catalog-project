import { Box, Divider, Heading } from '@chakra-ui/react'
import ItemCard from '../itemCard'

const FilmsDisplayer = ({ search = '', films }) => {
  return (
    <Box margin='20px' marginLeft='20px'>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='flex-start'
        alignContent='stretch'
        flexWrap='wrap'
        rowGap='12px'
        columnGap='12px'
      >
        { (search !== '') ? (<Heading as='h3' size='l'>Results for: {search}</Heading>) : null }
        { (search !== '') ? (<Divider w='95%'></Divider>) : null }
        {
          films.map((film, index) => {
            return (<ItemCard key={index} img={film.poster_path}></ItemCard>)
          })
        }
      </Box>
    </Box>

  )
}

export default FilmsDisplayer
