import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { CheckIcon } from "@chakra-ui/icons";

import { FormatCurrency } from "../utils/FormatCurrency";

const CashIncome = (props) => {
  const [sliderValue, setSliderValue] = React.useState(5300);

  const [mouseOver, setMouseOver] = React.useState(false);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  React.useEffect(() => {
    props.updateIncome(sliderValue);
  }, [sliderValue]);

  return (
    <Box
      pt={6}
      pb={2}
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      Salary:
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
        >
          $
        </InputLeftElement>
        <Input
          type="number"
          placeholder="Enter amount"
          value={sliderValue}
          onChange={(e) => setSliderValue(e.target.value)}
        />
        <InputRightElement>
          <CheckIcon color="green.500" />
        </InputRightElement>
      </InputGroup>
      {mouseOver && (
        <Box>
          <Slider
            aria-label="slider-ex-6"
            defaultValue={sliderValue}
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
