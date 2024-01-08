import React from "react";
import {
  Input,
  NumberInput,
  NumberInputField,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const InputExpense = (props) => {
  const [inputDetails, setInputDetails] = React.useState({
    name: "",
    amount: undefined,
  });

  const [addButtonDisable, setAddButtonDisable] = React.useState(true);

  const clearInputs = () => {
    setInputDetails({
      name: "",
      amount: "",
    });
    setAddButtonDisable(true);
  };

  const handleAddClick = () => {
    props.currentExpenseTable(expenseName.value, expenseAmount.value);
    clearInputs();
  };

  const buttonDisable = () => {
    if (inputDetails.name.length >= 0 && inputDetails.amount) {
      setAddButtonDisable(false);
    } else {
      setAddButtonDisable(true);
    }
  };

  React.useEffect(() => {
    buttonDisable();
  }, [inputDetails]);

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
          onChange={(e) => {
            setInputDetails({ ...inputDetails, amount: e.target.value });
          }}
        />
      </NumberInput>
      <ButtonGroup
        size="sm"
        isAttached
        variant="outline"
        onClick={handleAddClick}
        isDisabled={addButtonDisable}
        colorScheme="green"
        color="green"
      >
        <IconButton size="sm" icon={<AddIcon />} />
      </ButtonGroup>
    </>
  );
};

export default InputExpense;
