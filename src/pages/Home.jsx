import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import FilmsDisplayer from '../components/FilmsDisplayer'
import { useEffect, useState } from 'react'
import CastDisplayer from '../components/CastDisplayer'
import CompanieDisplayer from '../components/CompanieDisplayer'

const api_key = import.meta.env.VITE_MOVIEDB
let displayer = <></>
const Home = () => {
  const [searchInput, setSearchInput] = useState('')
  const [films, setFilms] = useState([]) // TODO: Create use state for each film, cast and companie
  const [filterParameter, setFilterParameter] = useState('film')

  const handleChange = (event) => {
    setSearchInput(event.target.value)
  }

  const handleKeyDown = (event) => {
    if ((event.key === 'Enter') && (searchInput !== '') && (filterParameter === 'film')) {
      fetchFilm()
      displayer = <FilmsDisplayer films={films}/>
    } else if ((event.key === 'Enter') && (searchInput !== '') && (filterParameter === 'cast')) {
      fetchCast()
      displayer = <CastDisplayer cast={films}/>
    } else if ((event.key === 'Enter') && (searchInput !== '') && (filterParameter === 'companie')) {
      fetchCompanie()
      displayer = <CompanieDisplayer companies={films}/>
    }
  }

  const handleClick = (event) => {
    setFilterParameter(event.target.value)
  }

  const fetchFilm = async () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        setFilms(data.results)
      })
  }

  const fetchCast = async () => {
    fetch(`https://api.themoviedb.org/3/search/person?api_key=${api_key}&query=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        setFilms(data.results)
        console.log(films)
      })
  }

  const fetchCompanie = async () => {
    fetch(`https://api.themoviedb.org/3/search/company?api_key=${api_key}&query=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        setFilms(data.results)
      })
  }

  useEffect(() => {
    if (searchInput !== '') {
      if (filterParameter === 'film') {
        fetchFilm()
        displayer = <FilmsDisplayer films={films}/>
      } else if (filterParameter === 'cast') {
        fetchCast()
        displayer = <CastDisplayer cast={films}/>
      } else if (filterParameter === 'companie') {
        fetchCompanie()
        displayer = <CompanieDisplayer companies={films}/>
      }
    }
  }, [filterParameter])

  return (
    <Box>
      <Navbar />
      <Searchbar handleChange={handleChange} handleKeyDown={handleKeyDown} />
      <Box
        margin='20px'
        marginLeft='50px'
        display='flex'
        flexWrap='wrap'
        alignContent='space-around'
      >
        <ButtonGroup variant='outline'>
          <Button value='cast' onClick={handleClick}>Cast</Button>
          <Button value='film' onClick={handleClick}>Film</Button>
          <Button value='companie' onClick={handleClick}>Production companie</Button>
        </ButtonGroup>
      </Box>
      {displayer}
    </Box>
  )
}

export default Home
