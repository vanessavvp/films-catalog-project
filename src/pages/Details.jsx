import { Badge, Box, Button, Divider, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { BiHeart, BiMoviePlay } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCard from '../components/itemCard'
import Navbar from '../components/Navbar'
import apiKey from '../services/filmsAPI'
import FilmsDisplayer from '../components/displayers/FilmsDisplayer'
import CastDisplayer from '../components/displayers/CastDisplayer'

const Details = () => {
  const { filmId } = useParams()
  const [filmInfo, setFilmInfo] = useState([])
  const [cast, setCast] = useState([])
  const [trailer, setTrailer] = useState([])

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  const fetchFilmInfo = async () => {
    fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setFilmInfo(data)
      })
  }

  const fetchCast = async () => {
    fetch(`https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setCast(data.cast.slice(0, 10))
      })
  }

  const fetchTrailer = async () => {
    fetch(`https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const trailers = data.results?.filter(video => video.type === 'Trailer')
        trailers && setTrailer(trailers[0].key)
      })
  }

  const handleTrailerClick = () => {
    const path = `https://www.youtube.com/watch?v=${trailer}`
    window.location.href = path
  }

  useEffect(() => {
    fetchFilmInfo()
    fetchCast()
    fetchTrailer()
  }, [])

  return (
    <Box >
      <Navbar></Navbar>
      <Stack p={10} gap='20px'>
        <Box display='flex' justifyContent='center' gap='40px'>
          <Box display='flex' flexDirection='column' wrap='wrap' gap='10px'>
            <ItemCard img={filmInfo.poster_path}></ItemCard>
            { trailer && <Button bg='black' w='300px' onClick={handleTrailerClick} rightIcon={<BiMoviePlay color='white'/>}><Text color='white'>Watch trailer</Text></Button> }
            <Button w='300px' rightIcon={<BiHeart />}>Add to favorites</Button>
          </Box>
          <Box display='flex' flexDirection='column'alignItems='flex-start'gap='20px' h='30%' w='70%'>
            <Heading as='h3' size='xl'>{filmInfo.original_title}</Heading>
            <Text fontSize='l'>{filmInfo.overview}</Text>
            <Divider />
            <Box display='flex' alignItems='center'gap='10px' h='30%'>
              {filmInfo.genres?.map((genre, id) => <Badge p={2} variant='solid' borderRadius='lg' colorScheme='purple' key={id}>{genre.name}</Badge>)}
            </Box>
            <Box gap='20px' w='100%' >
              <Box
                display='flex'
                flexDirection='column'
                padding={7}
                borderRadius='lg'
                bg='gray.100'
                gap='20px'
              >
                <Box display='flex' alignItems='center'>
                  <Text fontWeight='bold' size='sm'>Status:</Text>
                  <Text marginLeft='10px'size='sm'><Badge p={2} variant='outline' borderRadius='lg' colorScheme='green'>{filmInfo.status}</Badge></Text>
                </Box>
                <Box display='flex' alignItems='center'>
                  <Text fontWeight='bold' size='sm'>Release date:</Text>
                  <Text marginLeft='10px'size='sm'>{filmInfo.release_date}</Text>
                </Box>
                <Box display='flex' alignItems='center'>
                  <Text fontWeight='bold' size='sm'>Production companies:</Text>
                  <Text marginLeft='10px'size='sm'>{filmInfo.production_companies?.map(company => ' ' + company.name + ' -')}</Text>
                </Box>
                <Box display='flex' alignItems='center'>
                  <Text fontWeight='bold' size='sm'>Budget:</Text>
                  <Text marginLeft='10px'size='sm'>{formatter.format(parseInt(filmInfo.budget))}</Text>
                </Box>
                <Box display='flex' alignItems='center'>
                  <Text fontWeight='bold' size='sm'>Revenue:</Text>
                  <Text marginLeft='10px'size='sm'>{formatter.format(parseInt(filmInfo.revenue))}</Text>
                </Box>
              </Box>
            </Box>
            <Tabs size='lg'align='start' variant='enclosed' colorScheme='purple'>
              <TabList >
                <Tab>Cast</Tab>
                <Tab>Similar films</Tab>
                <Tab>Reviews</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <CastDisplayer cast={cast}></CastDisplayer>
                </TabPanel>
                <TabPanel>
                pelis parecidas
                </TabPanel>
                <TabPanel>
                reviews
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>

      </Stack>
    </Box>
  )
}

export default Details
