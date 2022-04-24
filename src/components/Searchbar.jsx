import { Box, Center, Input } from '@chakra-ui/react'

const Searchbar = (props) => {
  return (
    <Center>
      <Box w="80%">
        <Input
          variant='filled'
          placeholder='Search'
          onChange={props.handleChange}
          onKeyDown={props.handleKeyDown}>
        </Input>
      </Box>
    </Center>
  )
}

export default Searchbar
