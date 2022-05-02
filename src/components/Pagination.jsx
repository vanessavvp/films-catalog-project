import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'

export const Pagination = ({ currentPage = 1, totalPages = 1, handleLeft, handleRight }) => {
  return (
    <Box display='flex' flexDirection=''flexWrap='wrap' justifyContent='center' gap='20px' p='20px'>
      { currentPage === 1 && <ArrowForwardIcon h={10} w={8} onClick={handleRight} />}
      { currentPage > 1 && currentPage < totalPages && <><ArrowBackIcon h={10} w={8} onClick={handleLeft} /><ArrowForwardIcon h={10} w={8} onClick={handleRight} /></> }
      { currentPage === totalPages && <ArrowBackIcon h={10} w={8} onClick={handleLeft} />}
    </Box>
  )
}
