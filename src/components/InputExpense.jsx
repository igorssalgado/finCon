import React from "react";
import {
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const InputExpense = (props) => {
  const [inputDetails, setInputDetails] = React.useState({
    name: "",
    amount: 0,
  });

  const clearInputs = () => {
    setInputDetails({
      name: "",
      amount: 0,
    });
  };

  return (
    <>
      <Input
        htmlSize={4}
        width="sm"
        id="expenseName"
        inputMode="text"
        placeholder="Name"
        value={inputDetails.name}
        onChange={(e) => {
          setInputDetails({ ...inputDetails, name: e.target.value });
        }}
      />
      <NumberInput size="md" maxW={110} min={0} value={inputDetails.amount}>
        <NumberInputField
          id="expenseAmount"
          placeholder="Amount"
          onFocus={(e) =>
            setInputDetails({ ...inputDetails, amount: undefined })
          }
          onChange={(e) => {
            setInputDetails({ ...inputDetails, amount: e.target.value });
          }}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <ButtonGroup size="sm" isAttached variant="outline">
        <IconButton
          size="sm"
          onClick={() => {
            props.addExpense(expenseName.value, expenseAmount.value);
            clearInputs();
          }}
          icon={<AddIcon />}
        />
      </ButtonGroup>
    </>
  );
};

export default InputExpense;
