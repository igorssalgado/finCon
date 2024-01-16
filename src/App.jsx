import React from "react";

import { Grid, GridItem, Button } from "@chakra-ui/react";

import { fetchPost, addThing } from "./database/database";

import InputExpense from "./components/InputExpense";
import ExpensesTotal from "./components/ExpensesTotal";
import CashIncome from "./components/CashIncome";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [income, setIncome] = React.useState(0);
  const [allExpenses, setAllExpenses] = React.useState();
  const [currentExpense, setCurrentExpense] = React.useState();
  const [currentExpenseName, setCurrentExpenseName] = React.useState();

  React.useEffect(() => {
    getData();
  }, [currentExpense]);

  //inicializa allExpenses e a primeira currentExpense como as fixed do database
  async function getData() {
    const data = await fetchPost();
    setAllExpenses(data);
  }

  function updateIncome(value) {
    setIncome(value);
  }

  function addExpense(item) {
    setCurrentExpense([...currentExpense, item]);
    addThing(item, currentExpenseName);
  }

  // console.log(currentExpense);

  return (
    <>
      <Grid
        templateAreas={`"header header2"
                  "nav main"
                  "nav main"`}
        gridTemplateRows={"150px 1fr 500px"}
        gridTemplateColumns={"400px 1fr"}
        gap="1"
        color="whiteAlpha.800"
        fontWeight="bold"
      >
        <GridItem padding={3} area={"header"} bg="red.900">
          {allExpenses && (
            <ExpensesTotal allExpenses={allExpenses} income={income} />
          )}
        </GridItem>
        <GridItem padding={5} area={"header2"} bg="orange.900">
          <CashIncome updateIncome={updateIncome} />
        </GridItem>
        <GridItem pl="2" area={"nav"} bg="green.900">
          <InputExpense addExpense={addExpense} />
        </GridItem>
        <GridItem pl="2" area={"main"} bg="blue.900">
          <Button
            onClick={() => {
              setCurrentExpense(allExpenses[0]);
              setCurrentExpenseName("fixedExpenses");
            }}
          >
            Fixed Expenses
          </Button>
          <Button
            onClick={() => {
              setCurrentExpense(allExpenses[1]);
              setCurrentExpenseName("variableExpenses");
            }}
          >
            Variable Expenses
          </Button>
          <Button
            onClick={() => {
              setCurrentExpense(allExpenses[2]);
              setCurrentExpenseName("capitalAccumulation");
            }}
          >
            Capital Accumulation
          </Button>

          {allExpenses && <ExpenseTable expense={currentExpense} />}
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
