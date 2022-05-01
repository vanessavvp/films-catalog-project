import { Box, Heading, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react'

const RatingFilter = ({ handleOnChangeEnd }) => {
  return (
    <Box marginTop='25px'>
      <Heading as='h3' size='lg' color='white'>Rating</Heading>
      <Slider
        aria-label='slider-ex-1'
        defaultValue={0} min={0} max={10}
        colorScheme='black'
        onChangeEnd={value => handleOnChangeEnd(value)}
        margin='10px'
        w='96%'>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  )
}

export default RatingFilter
