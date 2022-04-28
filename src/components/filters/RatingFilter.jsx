import { Box, Heading, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react'
import { useState } from 'react'

const RatingFilter = ({ handleOnChangeEnd }) => {
  const [sliderValue, setSliderValue] = useState(0)

  return (
    <Box>
      <Heading as='h3' size='lg' color='white'>Rating</Heading>
      <Slider aria-label='slider-ex-1' defaultValue={0} min={0} max={10} colorScheme='purple' onChangeEnd={value => handleOnChangeEnd(value)}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  )
}

export default RatingFilter
