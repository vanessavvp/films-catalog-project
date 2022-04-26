import { Box, Divider, Heading, Spacer } from '@chakra-ui/react'
import ItemCard from '../itemCard'

const FilmsDisplayer = ({ search = '', films }) => {
  return (
    <Box margin='20px' marginLeft='20px'>
      <Box
        marginTop='20px'
        display='flex'
        justifyContent='center'
        alignItems='flex-start'
        alignContent='stretch'
        flexWrap='wrap'
        rowGap='12px'
        columnGap='12px'
      >
        <Heading as='h3' size='l'>Results for: {search}</Heading>
        <Divider w='95%'></Divider>
        {
        // Temporal ternary
          films.length > 0
            ? films.map((film, index) => {
              return (<ItemCard key={index} img={film.poster_path}></ItemCard>)
            })
            : null
        }
      </Box>
    </Box>

  )
}

export default FilmsDisplayer
