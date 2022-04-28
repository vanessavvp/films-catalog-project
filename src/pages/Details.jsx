import { Box, Divider, Heading, Stack } from '@chakra-ui/react'
import Navbar from '../components/Navbar'

const Details = () => {
  return (
    <Box >
      <Navbar></Navbar>
      <Stack p={10}>
        <Heading as='h3' size='xl'>Favorites films</Heading>
        <Divider />
      </Stack>
    </Box>
  )
}

export default Details