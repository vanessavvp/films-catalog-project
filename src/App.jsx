import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Box } from '@chakra-ui/react'
import Discover from './pages/Discover'
import Details from './pages/Details'

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/discover" element={<Discover />}></Route>
        <Route path="/details/:filmId" element={<Details />}></Route>
      </Routes>
    </Box>
  )
}

export default App
