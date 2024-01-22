import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

import { FormatCurrency } from "../utils/FormatCurrency";

const CashIncome = (props) => {
  const [sliderValue, setSliderValue] = React.useState(5022);

  React.useEffect(() => {
    props.updateIncome(sliderValue);
  }, [sliderValue]);

  return (
    <Box pt={6} pb={2}>
      Income Cash:
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
          w={"20%"}
        />
      </InputGroup>
    </Box>
  );
};

export default CashIncome;
