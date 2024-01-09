import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
  StatArrow,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { FormatCurrency } from "../utils/FormatCurrency";

const ExpensesTotal = (props) => {
  function totalExpenses() {
    let sum = 0;
    props.totalsArray.map((prevAmount) => (sum += prevAmount));

    return sum;
  }

  function fixedExpenses() {
    return props.totalsArray[0];
  }

  return (
    <>
      <StatGroup>
        <HStack>
          <Stat>
            <StatLabel>Capital Accumulation</StatLabel>
            <StatNumber>{FormatCurrency(props.totalsArray[0])}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Fixed Expenses</StatLabel>
            <StatNumber>{FormatCurrency(props.totalsArray[1])}</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Variable Expenses</StatLabel>
            <StatNumber>{FormatCurrency(props.totalsArray[2])}</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>
        </HStack>
      </StatGroup>
      {/*     
      <Stat>
        <StatLabel>Total expenses</StatLabel>
        <StatNumber>{FormatCurrency(totalExpenses())}</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat> */}
    </>
  );
};

export default ExpensesTotal;
