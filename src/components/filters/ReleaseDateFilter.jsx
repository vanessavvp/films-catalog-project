import { Box, Heading, Input } from '@chakra-ui/react'
import { useState } from 'react'

const ReleaseDateFilter = ({ handleOnChange }) => {
  const [input, setInput] = useState('yyyy-MM-dd')

  const handleChange = (event) => {
    handleOnChange(event.target.value)
  }
  return (
    <Box>
      <Heading as='h3' size='sm' color='black'>Release date</Heading>
      <input type='date' defaultValue={input} onChange={handleChange}></input>
    </Box>
  )
}

export default ReleaseDateFilter
