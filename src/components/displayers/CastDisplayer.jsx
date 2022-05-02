import { Box, Divider, Heading } from '@chakra-ui/react'
import ItemCard from '../itemCard'

const CastDisplayer = ({ search = '', cast }) => {
  return (
    <Box margin='20px' marginLeft='20px'>
      <Box
        margin='20px'
        display='flex'
        justifyContent='center'
        alignItems='flex-start'
        alignContent='stretch'
        flexWrap='wrap'
        rowGap='12px'
        columnGap='12px'
      >
        { (search !== '') && (<Heading as='h3' size='l'>Results for: {search}</Heading>) }
        { (search !== '') && (<Divider w='95%'></Divider>) }
        {
          cast?.map((person, index) => {
            return (<ItemCard key={index} img={person.profile_path}></ItemCard>)
          })
        }
      </Box>
    </Box>
  )
}

export default CastDisplayer
