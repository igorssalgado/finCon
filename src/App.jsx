import React from "react";

import { Grid, GridItem, Button } from "@chakra-ui/react";

import { fetchPost, addItem } from "./database/database";

import InputExpense from "./components/InputExpense";
import ExpensesTotal from "./components/ExpensesTotal";
import CashIncome from "./components/CashIncome";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [income, setIncome] = React.useState(0);
  const [allExpenses, setAllExpenses] = React.useState();
  const [currentExpense, setCurrentExpense] = React.useState();
  const [currentExpenseName, setCurrentExpenseName] = React.useState();
  const [buttonsColor, setButtonsColors] = React.useState({
    fixed: "",
    var: "",
    cap: "",
  });

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
    addItem(item, currentExpenseName);
  }

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
          {currentExpense && (
            <InputExpense
              addExpense={addExpense}
              currentExpenseName={currentExpenseName}
            />
          )}
        </GridItem>
        <GridItem pl="2" area={"main"} bg="blue.900">
          <Button
            bgColor={buttonsColor.fixed}
            onClick={() => {
              setCurrentExpense(allExpenses[0]);
              setCurrentExpenseName("fixedExpenses");
              setButtonsColors({ fixed: "green.300", var: "", cap: "" });
            }}
          >
            Fixed Expenses
          </Button>
          <Button
            onMouseOver={false}
            bgColor={buttonsColor.var}
            onClick={() => {
              setCurrentExpense(allExpenses[1]);
              setCurrentExpenseName("variableExpenses");
              setButtonsColors({ fixed: "", var: "green.300", cap: "" });
            }}
          >
            Variable Expenses
          </Button>
          <Button
            bgColor={buttonsColor.cap}
            onClick={() => {
              setCurrentExpense(allExpenses[2]);
              setCurrentExpenseName("capitalAccumulation");
              setButtonsColors({ fixed: "", var: "", cap: "green.300" });
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
