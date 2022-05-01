import { Box, Input } from '@chakra-ui/react'
import { useState } from 'react'

const Searchbar = ({ onHandleSubmit }) => {
  const [searchInput, setSearchInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (searchInput.length > 0) onHandleSubmit(searchInput)
  }

  const handleChange = (event) => {
    setSearchInput(event.target.value)
  }

  return (
    <Box
      p={3}
      display='flex'
      justifyContent='center'
    >
      <Box w='800px'>
        <form onSubmit={handleSubmit}>
          <Input
            variant='filled'
            placeholder='Search films, cast or production companies'
            onChange={handleChange}>
          </Input>
        </form>
      </Box>
    </Box>
  )
}

export default Searchbar
