import { Box } from '@chakra-ui/react'
import ItemCard from './itemCard'

const CompanieDisplayer = (props) => {
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
        props.companies.map((companie, index) => {
          return (<ItemCard key={index} img={companie.logo_path}></ItemCard>)
        })
      }
    </Box>
  )
}

export default CompanieDisplayer
