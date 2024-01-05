import React from "react";
import ExpenseTable from "./components/ExpenseTable";
import { Box, HStack } from "@chakra-ui/react";
import InputExpense from "./components/InputExpense";

function App() {
  const [fixedExpenses, setFixedExpenses] = React.useState([]);
  const [varExpenses, setVarExpenses] = React.useState([
    { name: "coiso", amount: "25" },
    { name: "coiso2", amount: "5" },
    { name: "coiso3", amount: "15" },
  ]);
  const [capitalAccumulation, setCapitalAccumulation] = React.useState([
    { name: "coiso", amount: "25" },
    { name: "coiso2", amount: "5" },
    { name: "coiso3", amount: "15" },
  ]);

  const handleAddExpense = (name, amount) => {
    setFixedExpenses([...fixedExpenses, { name: name, amount: amount }]);
  };

  return (
    <>
      <HStack>
        <InputExpense
          addExpense={handleAddExpense}
          setFixedExpenses={setFixedExpenses}
        />
      </HStack>
      <HStack>
        <Box maxW="sm">
          <ExpenseTable name={"Fixed Expenses"} expenses={fixedExpenses} />
        </Box>
        {/* <Box maxW="sm">
          <ExpenseTable name={"Variable Expenses"} expenses={varExpenses} />
        </Box>
        <Box maxW="sm">
          <ExpenseTable
            name={"Capital Accumulation"}
            expenses={capitalAccumulation}
          />
        </Box> */}
      </HStack>
    </>
  );
}

export default App;
