import React from "react";
import {
  Input,
  NumberInput,
  NumberInputField,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const InputExpense = () => {
  return (
    <>
      <Input
        htmlSize={4}
        width="sm"
        id="expenseName"
        inputMode="text"
        placeholder="Name"
      />
      <NumberInput size="md" maxW={110} min={0}>
        <NumberInputField id="expenseAmount" placeholder="Amount" />
      </NumberInput>
      <ButtonGroup
        size="sm"
        isAttached
        variant="outline"
        colorScheme="green"
        color="green"
      >
        <IconButton size="sm" icon={<AddIcon />} />
      </ButtonGroup>
    </>
  );
};

export default InputExpense;
