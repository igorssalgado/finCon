import { Box, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FormatCurrency } from "../../../utils/FormatCurrency";
import UpdateIncome from "../UpdateIncome/UpdateIncome";
import {
  addInputAction,
  deleteInputAction,
  setIncomeAction,
} from "../../../store/income/income-slice";
import {
  addIncomeDB,
  deleteItem,
  getAllIncomes,
} from "../../../database/database";

const CashIncome = () => {
  const dispatch = useDispatch();
  let income = useSelector((store) => store.INCOME.income);
  let incomeTotal = useSelector((store) => store.INCOME.incomeTotal);

  function AddIncome(item) {
    dispatch(addInputAction([...income, item]));
    addIncomeDB(item, "inputIncome");
  }

  function deleteIncome(id) {
    let array = [...income];
    const index = array.findIndex((item) => item.id === id);
    array.splice(index, 1);
    dispatch(deleteInputAction(array));
    deleteItem(id, "inputIncome");
    getIncome("inputIncome");
  }

  async function getIncome() {
    const allIncome = await getAllIncomes();

    dispatch(setIncomeAction(allIncome));
  }

  return (
    <Box pt={6} pb={2}>
      <HStack>
        Income Cash:
        <Text>{FormatCurrency(incomeTotal)}</Text>
        <UpdateIncome AddIncome={AddIncome} deleteIncome={deleteIncome} />
      </HStack>
    </Box>
  );
};

export default CashIncome;
