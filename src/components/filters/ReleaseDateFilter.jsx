import { Box, Heading, Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const api_key = import.meta.env.VITE_MOVIEDB
const ReleaseDateFilter = ({ handleOnChange }) => {
  const fetch = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&release_date.gte=${releaseDate}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
      })
  }

  return (
    <Box>
      <Heading as='h3' size='sm' color='black'>Release date</Heading>
      <Input type='date' value='yyyy-MM-dd' ></Input>
    </Box>
  )
}

export default ReleaseDateFilter
