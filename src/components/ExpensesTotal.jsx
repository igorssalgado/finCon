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
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

import { FormatCurrency } from "../utils/FormatCurrency";

const ExpensesTotal = (props) => {
  let sumFixed = 0;
  let sumVariable = 0;
  let sumCapital = 0;
  let income = props.income;

  props.allExpenses.map((expense) => {
    expense.fixedExpenses.map((item) => {
      sumFixed += item.amount;
    });
  });

  props.allExpenses.map((expense) => {
    expense.variableExpenses.map((item) => {
      sumVariable += item.amount;
    });
  });

  props.allExpenses.map((expense) => {
    expense.capitalAccumulation.map((item) => {
      sumCapital += item.amount;
    });
  });

  function expensePercent(total, income) {
    return (total / income) * 100;
  }

  return (
    <>
      <StatGroup>
        Cash Flow:
        <Text>income</Text>
        <HStack>
          <Stat>
            <StatLabel>Fixed Expenses</StatLabel>
            <StatNumber>{FormatCurrency(sumFixed)}</StatNumber>
            <StatHelpText>
              {expensePercent(sumFixed, income) > 50 ? (
                <WarningIcon color={"red"} />
              ) : (
                <CheckCircleIcon color={"green"} />
              )}
              {Math.floor(expensePercent(sumFixed, income))}%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Variable Expenses</StatLabel>
            <StatNumber>{FormatCurrency(sumVariable)}</StatNumber>
            <StatHelpText>
              {expensePercent(sumVariable, income) > 30 ? (
                <WarningIcon color={"red"} />
              ) : (
                <CheckCircleIcon color={"green"} />
              )}
              {Math.floor(expensePercent(sumVariable, income))}%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Capital Accumulation</StatLabel>
            <StatNumber>{FormatCurrency(sumCapital)}</StatNumber>
            <StatHelpText>
              {expensePercent(sumCapital, income) < 20 ? (
                <WarningIcon color={"red"} />
              ) : (
                <CheckCircleIcon color={"green"} />
              )}
              {Math.floor(expensePercent(sumCapital, income))}%
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
