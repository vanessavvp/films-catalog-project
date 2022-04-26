import { Box, Input } from '@chakra-ui/react'

const Searchbar = (props) => {
  return (
    <Box
      margin='20px'
      marginLeft='20px'
      display='flex'
      justifyContent='center'
    >
      <Box w='95%'>
        <Input
          variant='filled'
          placeholder='Search film, cast or production companie'
          onChange={props.handleChange}
          onKeyDown={props.handleKeyDown}>
        </Input>

      </Box>
    </Box>
  )
}

export default Searchbar
