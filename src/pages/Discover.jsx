import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Heading, Spacer, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import FilmsDisplayer from '../components/displayers/FilmsDisplayer'
import FilmFilters from '../components/filters/FilmFilters'
import Navbar from '../components/Navbar'
import { Pagination } from '../components/Pagination'
import apiKey from '../services/filmsAPI'

const Discover = () => {
  const [querys, setQuerys] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [discoverResult, setDiscoverResult] = useState([])

  const handleRightClick = () => {
    setCurrentPage(currentPage + 1)
  }

  const handleLeftClick = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleClick = (input) => {
    setQuerys(input)
  }

  const fetchDiscover = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}${querys}&include_adult=false&page=${currentPage}`)
      .then(response => response.json())
      .then(data => { setTotalPages(data.total_pages); setDiscoverResult(data.results) })
  }

  useEffect(() => {
    fetchDiscover()
  }, [querys, currentPage])

  return (
    <Box>
      <Navbar></Navbar>
      <Stack p={10} margin={10}>
        <Heading as='h3' size='xl'>Discover films</Heading>
        <Divider />
        <Spacer></Spacer>
        <Box display='flex' justifyContent='flex-start' p={5}>
          <FilmFilters handleClick={handleClick}></FilmFilters>
          <Box display='flex' flexDirection='column' gap='20px'>
            <Pagination currentPage={currentPage} totalPages={totalPages} handleLeft={handleLeftClick} handleRight={handleRightClick}/>
            <FilmsDisplayer films={discoverResult}></FilmsDisplayer>
            <Pagination currentPage={currentPage} totalPages={totalPages} handleLeft={handleLeftClick} handleRight={handleRightClick}/>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default Discover
