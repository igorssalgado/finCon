import { Box, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FormatCurrency } from "../../utils/FormatCurrency";
import UpdateIncome from "../UpdateIncome/UpdateIncome";
import { addInputAction } from "../../store/income/income-slice";
import { addIncomeDB } from "../../database/database";

const CashIncome = () => {
  const dispatch = useDispatch();
  let income = useSelector((store) => store.INCOME.income);
  let incomeTotal = useSelector((store) => store.INCOME.incomeTotal);

  function AddIncome(item) {
    dispatch(addInputAction([...income, item]));
    addIncomeDB(item, "inputIncome");
  }

  return (
    <Box pt={6} pb={2}>
      <HStack>
        Income Cash:
        <Text>{FormatCurrency(incomeTotal)}</Text>
        <UpdateIncome AddIncome={AddIncome} />
      </HStack>
    </Box>
  );
};

export default CashIncome;
