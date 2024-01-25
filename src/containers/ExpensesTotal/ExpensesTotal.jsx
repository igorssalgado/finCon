import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

import { FormatCurrency } from "../../utils/FormatCurrency";
import { useSelector } from "react-redux";

const ExpensesTotal = (props) => {
  let sumFixed = 0;
  let sumVariable = 0;
  let sumCapital = 0;

  const allExpenses = useSelector((store) => store.ALLEXPENSES.allExpenses);

  let incomeTotal = useSelector((store) => store.INCOME.incomeTotal);

  if (allExpenses) {
    allExpenses[0].map((item) => {
      sumFixed += item.amount;
    });

    allExpenses[1].map((item) => {
      sumVariable += item.amount;
    });

    allExpenses[2].map((item) => {
      sumCapital += item.amount;
    });
  }

  function expensePercent(total, income) {
    return Math.ceil((total / income) * 100);
  }

  return (
    <>
      <StatGroup>
        <HStack>
          <Stat>
            <StatLabel>Fixed Expenses</StatLabel>
            <StatNumber>{FormatCurrency(sumFixed)}</StatNumber>
            <StatHelpText>
              {expensePercent(sumFixed, incomeTotal) > 50 ? (
                <WarningIcon color={"red"} />
              ) : (
                <CheckCircleIcon color={"green"} />
              )}
              {Math.floor(expensePercent(sumFixed, incomeTotal))}%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Variable Expenses</StatLabel>
            <StatNumber>{FormatCurrency(sumVariable)}</StatNumber>
            <StatHelpText>
              {expensePercent(sumVariable, incomeTotal) > 30 ? (
                <WarningIcon color={"red"} />
              ) : (
                <CheckCircleIcon color={"green"} />
              )}
              {Math.floor(expensePercent(sumVariable, incomeTotal))}%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Capital Accumulation</StatLabel>
            <StatNumber>{FormatCurrency(sumCapital)}</StatNumber>
            <StatHelpText>
              {expensePercent(sumCapital, incomeTotal) < 20 ? (
                <WarningIcon color={"red"} />
              ) : (
                <CheckCircleIcon color={"green"} />
              )}
              {Math.floor(expensePercent(sumCapital, incomeTotal))}%
            </StatHelpText>
          </Stat>
        </HStack>
      </StatGroup>
    </>
  );
};

export default ExpensesTotal;
