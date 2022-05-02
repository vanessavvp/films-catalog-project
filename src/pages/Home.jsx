import { useEffect, useState } from 'react'
import { Box, Button, ButtonGroup, Spacer, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import FilmsDisplayer from '../components/displayers/FilmsDisplayer'
import CastDisplayer from '../components/displayers/CastDisplayer'
import CompaniesDisplayer from '../components/displayers/CompaniesDisplayer'
import apiKey from '../services/filmsAPI'

const Home = () => {
  const [cast, setCast] = useState([])
  const [films, setFilms] = useState([])
  const [companies, setCompanies] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [filterParameter, setFilterParameter] = useState('film')
  const [nowPlaying, setNowPlaying] = useState([])
  const [popularFilms, setPopularFilms] = useState([])

  const handleSubmit = (input) => {
    setSearchInput(input)
  }

  const handleClick = (event) => {
    setFilterParameter(event.target.value)
  }

  const fetchNowPlaying = async () => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setNowPlaying(data.results)
      })
  }

  const fetchPopularFilms = async () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setPopularFilms(data.results)
      })
  }

  const fetchFilms = async () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setFilms(data.results)
      })
  }

  const fetchCast = async () => {
    fetch(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        setCast(data.results)
      })
  }

  const fetchCompanies = async () => {
    fetch(`https://api.themoviedb.org/3/search/company?api_key=${apiKey}&query=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        setCompanies(data.results)
      })
  }

  const fetchInfo = () => {
    if (searchInput === '') {
      fetchNowPlaying()
      fetchPopularFilms()
    } else if (filterParameter === 'film') fetchFilms()
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
      <Stack p={5}>
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Searchbar onHandleSubmit={handleSubmit} />
          <ButtonGroup variant='solid' colorScheme='purple'>
            <Button value='film' onClick={handleClick}>Films</Button>
            <Button value='cast' onClick={handleClick}>Cast</Button>
            <Button value='companies' onClick={handleClick}>Production companies</Button>
          </ButtonGroup>
        </Box>
        <Spacer />
        <Spacer />

        {(searchInput === '')
          ? <Tabs size='lg'align='center' variant='soft-rounded' colorScheme='blackAlpha'>
            <TabList >
              <Tab>Now playing films</Tab>
              <Tab>Most popular films</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <FilmsDisplayer films={nowPlaying}></FilmsDisplayer>
              </TabPanel>
              <TabPanel>
                <FilmsDisplayer films={popularFilms}></FilmsDisplayer>
              </TabPanel>
            </TabPanels>
          </Tabs>
          : null}
        {(filterParameter === 'film') ? <FilmsDisplayer search={searchInput} films={films} /> : null }
        {(filterParameter === 'cast') ? <CastDisplayer search={searchInput} cast={cast} /> : null}
        {(filterParameter === 'companies') ? <CompaniesDisplayer search={searchInput} companies={companies} /> : null}
      </Stack>
    </Box>
  )
}

export default Home
