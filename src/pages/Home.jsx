import { Box } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import FilmsDisplayer from '../components/FilmsDisplayer'
import { useState } from 'react'

const prueba = ['hola', 'prueba', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const api_key = import.meta.env.VITE_MOVIEDB
const Home = () => {
  const [searchInput, setSearchInput] = useState('')
  const [films, setFilms] = useState([])
  const handleChange = (event) => {
    setSearchInput(event.target.value)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchInput}`)
        .then(response => response.json())
        .then(data => {
          setFilms(data.results)
          console.log(films)
        })
    }
  }
  return (
    <Box>
      <Navbar />
      <Searchbar handleChange={handleChange} handleKeyDown={handleKeyDown}/>
      <FilmsDisplayer movies={films}/>
    </Box>
  )
}

export default Home
