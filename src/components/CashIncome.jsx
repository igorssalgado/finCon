import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { FormatCurrency } from "../utils/FormatCurrency";

const CashIncome = () => {
  const [sliderValue, setSliderValue] = React.useState(2000);

  const [mouseOver, setMouseOver] = React.useState(false);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <Box
      pt={6}
      pb={2}
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <Text>Income: {FormatCurrency(sliderValue)}</Text>
      {mouseOver && (
        <Box>
          <Slider
            aria-label="slider-ex-6"
            defaultValue={2000}
            onChange={(val) => setSliderValue(val)}
            max={9000}
          >
            <SliderMark value={1200} {...labelStyles}>
              {FormatCurrency(2000)}
            </SliderMark>
            <SliderMark value={5000} {...labelStyles}>
              {FormatCurrency(6000)}
            </SliderMark>
            {/* <SliderMark
              value={sliderValue}
              textAlign="center"
              bg="blue.500"
              color="white"
              mt="-10"
              ml="-7"
              w="auto"
              paddingRight={1}
              paddingLeft={1}
            >
              {FormatCurrency(sliderValue)}
            </SliderMark> */}
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      )}
    </Box>
  );
};

export default CashIncome;
