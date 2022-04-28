import { useEffect, useState } from 'react'
import { Box, Button, ButtonGroup, Divider, Heading, Spacer, Stack } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import FilmsDisplayer from '../components/displayers/FilmsDisplayer'
import CastDisplayer from '../components/displayers/CastDisplayer'
import CompaniesDisplayer from '../components/displayers/CompaniesDisplayer'

const api_key = import.meta.env.VITE_MOVIEDB
const Home = () => {
  const [cast, setCast] = useState([])
  const [films, setFilms] = useState([])
  const [companies, setCompanies] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [filterParameter, setFilterParameter] = useState('film')
  const [nowPlaying, setNowPlaying] = useState([])

  const handleSubmit = (input) => {
    setSearchInput(input)
  }

  const handleClick = (event) => {
    setFilterParameter(event.target.value)
  }

  const fetchNowPlaying = async () => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`)
      .then(response => response.json())
      .then(data => {
        setNowPlaying(data.results)
      })
  }

  const fetchFilms = async () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchInput}&include_adult=false`)
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
    if (searchInput === '') fetchNowPlaying()
    else if (filterParameter === 'film') fetchFilms()
    else if (filterParameter === 'cast') fetchCast()
    else if (filterParameter === 'companies') fetchCompanies()
  }

  useEffect(() => {
    fetchInfo()
  }, [nowPlaying])

  useEffect(() => {
    fetchInfo()
  }, [searchInput])

  useEffect(() => {
    fetchInfo()
  }, [filterParameter])

  return (
    <Box>
      <Navbar />
      <Stack p={10}>
        <Searchbar onHandleSubmit={handleSubmit} />
        <Box display='flex' justifyContent='center'>
          <ButtonGroup variant='outline' color='#6247aa'>
            <Button value='film' onClick={handleClick}>Films</Button>
            <Button value='cast' onClick={handleClick}>Cast</Button>
            <Button value='companies' onClick={handleClick}>Production companies</Button>
          </ButtonGroup>
        </Box>
        <Spacer></Spacer>
        {(searchInput === '') ? <FilmsDisplayer search="Now playing films" films={nowPlaying} /> : null}
        {(filterParameter === 'film') ? <FilmsDisplayer search={searchInput} films={films} /> : null }
        {(filterParameter === 'cast') ? <CastDisplayer search={searchInput} cast={cast} /> : null}
        {(filterParameter === 'companies') ? <CompaniesDisplayer search={searchInput} companies={companies} /> : null}
      </Stack>
    </Box>
  )
}

export default Home
