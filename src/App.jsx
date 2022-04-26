import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Box } from '@chakra-ui/react'
import Discover from './pages/Discover'

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/discover" element={<Discover />}></Route>
      </Routes>
    </Box>
  )
}

export default App
