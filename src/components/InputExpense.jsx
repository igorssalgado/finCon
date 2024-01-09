import React from "react";
import {
  Input,
  NumberInput,
  NumberInputField,
  ButtonGroup,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { addExpense } from "../database/firebase";

const InputExpense = (props) => {
  function handleAddButtonClick() {
    console.log(props.currentExpense);
    // addExpense(props.currentExpense.expenseName, {
    //   expenseName: expenseName.value,
    //   amount: 0,
    // });
  }

  return (
    <>
      <Input
        width="sm"
        id="expenseName"
        inputMode="text"
        placeholder="Name"
        maxW={"97%"}
        margin={1}
      />
      <HStack justifyContent="space-between">
        <NumberInput size="md" maxW={"40%"} min={0} margin={1}>
          <NumberInputField id="expenseAmount" placeholder="Amount" />
        </NumberInput>
        <ButtonGroup
          size="sm"
          isAttached
          variant="outline"
          colorScheme="green"
          color="green"
          margin={1}
          onClick={() => handleAddButtonClick()}
        >
          <IconButton size="sm" icon={<AddIcon />} />
        </ButtonGroup>
      </HStack>
    </>
  );
};

export default InputExpense;
