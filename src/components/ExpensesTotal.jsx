import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
  StatArrow,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { FormatCurrency } from "../utils/FormatCurrency";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

const ExpensesTotal = (props) => {
  function totalExpenses() {
    let sum = 0;
    props.totalsArray.map((prevAmount) => (sum += prevAmount));

    return sum;
  }

  console.log(props.income - totalExpenses());

  function expensePercent(total, income) {
    return (total / income) * 100;
  }

  return (
    <>
      <StatGroup>
        <Text color={props.income - totalExpenses() < 0 ? "red" : "green"}>
          Cash Flow: {FormatCurrency(props.income - totalExpenses())}
        </Text>
        <HStack>
          <Stat>
            <StatLabel>Fixed Expenses</StatLabel>
            <StatNumber>{FormatCurrency(props.totalsArray[1])}</StatNumber>
            <StatHelpText>
              {expensePercent(props.totalsArray[1], props.income) > 50 ? (
                <WarningIcon color={"red"} />
              ) : (
                <CheckCircleIcon color={"green"} />
              )}
              {Math.floor(expensePercent(props.totalsArray[1], props.income))}%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Variable Expenses</StatLabel>
            <StatNumber>{FormatCurrency(props.totalsArray[2])}</StatNumber>
            <StatHelpText>
              {expensePercent(props.totalsArray[2], props.income) > 30 ? (
                <WarningIcon color={"red"} />
              ) : (
                <CheckCircleIcon color={"green"} />
              )}
              {Math.floor(expensePercent(props.totalsArray[2], props.income))}%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Capital Accumulation</StatLabel>
            <StatNumber>{FormatCurrency(props.totalsArray[0])}</StatNumber>
            <StatHelpText>
              {expensePercent(props.totalsArray[0], props.income) < 20 ? (
                <WarningIcon color={"red"} />
              ) : (
                <CheckCircleIcon color={"green"} />
              )}
              {Math.floor(expensePercent(props.totalsArray[0], props.income))}%
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
