import { Box, Heading, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Tooltip } from '@chakra-ui/react'
import { useState } from 'react'

const RatingFilter = ({ handleOnChangeEnd }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)
  return (
    <Box marginTop='25px'>
      <Heading as='h3' size='lg' color='white'>Rating</Heading>
      <Slider
        aria-label='slider-ex-1'
        defaultValue={0} min={0} max={10}
        colorScheme='blackAlpha'
        onChange={(value) => setSliderValue(value)}
        onChangeEnd={value => { setSliderValue(value); handleOnChangeEnd(value) }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        margin='10px'
        marginBottom='25px'
        w='96%'>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg='black'
          color='white'
          placement='bottom'
          isOpen={showTooltip}
          label={sliderValue}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Box>
  )
}

export default RatingFilter
