import { Box } from '@chakra-ui/react'
import ItemCard from './itemCard'

const CastDisplayer = (props) => {
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
        props.cast.map((person, index) => {
          return (<ItemCard key={index} img={person.profile_path}></ItemCard>)
        })
      }
    </Box>
  )
}

export default CastDisplayer
