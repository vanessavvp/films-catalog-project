import { Box } from '@chakra-ui/react'
import CastCard from '../cards/CastCard'

const CastDetailsDisplayer = ({ search = '', cast }) => {
  return (
    <Box
      margin='20px'
      display='flex'
      flexWrap='wrap'
      rowGap='12px'
      columnGap='12px'
    >
      {
        cast?.map((person, index) => {
          return (<CastCard key={index} img={person.profile_path} castName={person.original_name}></CastCard>)
        })
      }
    </Box>
  )
}

export default CastDetailsDisplayer
