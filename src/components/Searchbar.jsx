import { Box, Input } from '@chakra-ui/react'
import { useState } from 'react'

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState('')
  const api_key = import.meta.env.VITE_MOVIEDB
  console.log(api_key)
  const handleChange = (event) => setSearchInput(event.target.value)
  const handleSubmit = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchInput}`)
      .then(data => data.json())
      .then(data => console.log(data.results[0]))
  }
  handleSubmit()
  return (
    <Box maxW='lg' boxShadow='xl' rounded='md' justifyContent='center'>
      <Input
        variant='filled'
        placeholder='Search'
        onChange={handleChange}>
      </Input>
    </Box>
  )
}

export default Searchbar
