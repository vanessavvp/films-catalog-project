import { Box, Heading, Input } from '@chakra-ui/react'

const ReleaseDateFilter = ({ handleOnChange }) => {
  const handleChange = (event) => {
    handleOnChange(event.target.value)
  }

  return (
    <Box>
      <Heading as='h3' size='lg' color='white'>Release date</Heading>
      <Input type='date' defaultValue='yyyy-MM-dd' onChange={handleChange} color='white'></Input>
    </Box>
  )
}

export default ReleaseDateFilter
