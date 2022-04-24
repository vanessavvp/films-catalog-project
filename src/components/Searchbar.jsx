import { Box, Input } from '@chakra-ui/react'
import { useState } from 'react'
import FilmsDisplayer from './FilmsDisplayer'
import './searchBar.css'

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState('')
  const api_key = import.meta.env.VITE_MOVIEDB
  const handleChange = (event) => {
    setSearchInput(event.target.value)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchInput}`)
        .then(response => response.json())
        .then(data => console.log(data.results))
    }
  }
  return (
    <>
      <div className="searchBar">
        <Box w="80%">
          <Input
            variant='filled'
            placeholder='Search'
            onChange={handleChange}
            onKeyDown={handleKeyDown}>
          </Input>
        </Box>
      </div>
      <Box display='flex'>
        <FilmsDisplayer></FilmsDisplayer>
      </Box>
    </>
  )
}

export default Searchbar
