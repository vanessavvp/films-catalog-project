import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import FilmsDisplayer from '../components/FilmsDisplayer'
import { useEffect, useState } from 'react'
import CastDisplayer from '../components/CastDisplayer'
import CompaniesDisplayer from '../components/CompaniesDisplayer'

const api_key = import.meta.env.VITE_MOVIEDB
const Home = () => {
  const [films, setFilms] = useState([])
  const [cast, setCast] = useState([])
  const [companies, setCompanies] = useState([])
  const [filterParameter, setFilterParameter] = useState('film')
  const [displayer, setDisplayer] = useState(<FilmsDisplayer films={films}/>)
  const [searchInput, setSearchInput] = useState('harry potter')

  const handleSubmit = (input) => {
    setSearchInput(input)
  }

  const handleClick = (event) => {
    setFilterParameter(event.target.value)
  }

  const fetchFilms = async () => {
    console.log(searchInput) // FIX VARIABLE VALUE
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
        setCast(data.results)
      })
  }

  const fetchCompanies = async () => {
    fetch(`https://api.themoviedb.org/3/search/company?api_key=${api_key}&query=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        setCompanies(data.results)
      })
  }

  const fetchInfo = () => {
    if (filterParameter === 'film') {
      fetchFilms()
      // setDisplayer(<FilmsDisplayer films={films} />)
    } else if (filterParameter === 'cast') {
      fetchCast()
      // setDisplayer(<CastDisplayer cast={cast} />)
    } else if (filterParameter === 'companies') {
      fetchCompanies()
      // setCompanies(<CompaniesDisplayer companies={companies} />)
    }
  }

  useEffect(() => {
    fetchInfo()
  }, [searchInput])

  useEffect(() => {
    fetchInfo()
  }, [filterParameter])

  return (
    <Box>
      <Navbar />
      <Searchbar onHandleSubmit={handleSubmit} />
      <Box
        margin='20px'
        marginLeft='50px'
        display='flex'
        flexWrap='wrap'
        alignContent='space-around'
      >
        <ButtonGroup variant='outline'>
          <Button value='film' onClick={handleClick}>Films</Button>
          <Button value='cast' onClick={handleClick}>Cast</Button>
          <Button value='companies' onClick={handleClick}>Production companies</Button>
        </ButtonGroup>
      </Box>
      {(filterParameter === 'film') ? <FilmsDisplayer films={films} /> : null }
      {(filterParameter === 'cast') ? <CastDisplayer cast={cast} /> : null}
      {(filterParameter === 'companies') ? <CompaniesDisplayer companies={companies} /> : null}
    </Box>
  )
}

export default Home
