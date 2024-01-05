import React from "react";
import ExpenseTable from "./components/ExpenseTable";
import { Box, Button, HStack, PinInputField, VStack } from "@chakra-ui/react";
import InputExpense from "./components/InputExpense";
import { addToDataBase, getFromDataBase } from "./database/firebase";

function App() {
  const [fixedExpenses, setFixedExpenses] = React.useState([]);

  const [varExpenses, setVarExpenses] = React.useState([]);

  const [capitalAccumulation, setCapitalAccumulation] = React.useState([]);

  const handleCurrentExpenseTable = (name, amount) => {
    if (currentExpenseTable.expenseName === "Fixed Expenses") {
      setFixedExpenses([...fixedExpenses, { name: name, amount: amount }]);
    } else if (currentExpenseTable.expenseName === "Varliable Expenses") {
      setVarExpenses([...varExpenses, { name: name, amount: amount }]);
    } else {
      setCapitalAccumulation([
        ...capitalAccumulation,
        { name: name, amount: amount },
      ]);
    }

    addToDataBase(currentExpenseTable, { name: name, amount: amount });
  };

  const [currentExpenseTable, setCurrentExpenseTable] = React.useState({
    expenseName: "Fixed Expenses",
    show: {
      fixed: true,
      variable: false,
      capital: false,
    },
  });

  const currentExpenseToShow = () => {
    if (currentExpenseTable.show.fixed) {
      return fixedExpenses;
    } else if (currentExpenseTable.show.variable) {
      return varExpenses;
    } else if (currentExpenseTable.show.capital) {
      return capitalAccumulation;
    }
  };

  React.useEffect(() => {
    let expensesObject = getFromDataBase();
    setFixedExpenses(expensesObject.currentFixedExpenses);
    setVarExpenses(expensesObject.currentVariableExpenses);
    setCapitalAccumulation(expensesObject.currentCapitalAccumulation);
    // setFixedExpenses();
  }, []);

  return (
    <>
      <HStack>
        <Button
          onClick={() =>
            setCurrentExpenseTable({
              ...currentExpenseTable,
              expenseName: "Fixed Expenses",
              show: { fixed: true, variable: false, capital: false },
            })
          }
        >
          Fixed
        </Button>
        <Button
          onClick={() =>
            setCurrentExpenseTable({
              ...currentExpenseTable,
              expenseName: "Varliable Expenses",
              show: { fixed: false, variable: true, capital: false },
            })
          }
        >
          Variable
        </Button>
        <Button
          onClick={() =>
            setCurrentExpenseTable({
              ...currentExpenseTable,
              expenseName: "Capital",
              show: { fixed: false, variable: false, capital: true },
            })
          }
        >
          Capital
        </Button>
      </HStack>
      <HStack>
        <InputExpense currentExpenseTable={handleCurrentExpenseTable} />
      </HStack>
      <HStack>
        <Box maxW="sm">
          <ExpenseTable
            name={currentExpenseTable.expenseName}
            expenses={currentExpenseToShow()}
          />
        </Box>
      </HStack>
    </>
  );
}

export default App;
