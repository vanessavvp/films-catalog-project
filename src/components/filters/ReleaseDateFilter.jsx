import { Box, Heading, Input } from '@chakra-ui/react'

const ReleaseDateFilter = () => {
  return (
    <Box>
      <Heading as='h3' size='sm' color='black'>Release date</Heading>
      <Input type='date' defaultValue='yyyy-mm-dd' ></Input>
    </Box>
  )
}

export default ReleaseDateFilter
