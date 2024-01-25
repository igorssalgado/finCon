import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

import { FormatCurrency } from "../../utils/FormatCurrency";

const CashIncome = () => {
  let incomeTotal = useSelector((store) => store.INCOME.incomeTotal);

  return (
    <Box pt={6} pb={2}>
      Income Cash:
      <Text>{FormatCurrency(incomeTotal)}</Text>
    </Box>
  );
};

export default CashIncome;
