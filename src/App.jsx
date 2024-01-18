import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  addCurrentExpenseAction,
  addExpenseAction,
} from "./store/currentExpense/currentExpense-slice";
import { updateCurrentExpenseNameAction } from "./store/currentExpenseName/currentExpenseName-slice";
import { addAllExpensesAction } from "./store/allExpenses/allExpenses-slice";
import { setIncomeAction } from "./store/income/currentExpenseName-slice";

import { Grid, GridItem, Button } from "@chakra-ui/react";

import { fetchPost, addItem } from "./database/database";

import InputExpense from "./containers/InputExpense/InputExpense";
import ExpensesTotal from "./containers/ExpensesTotal/ExpensesTotal";
import CashIncome from "./components/CashIncome";
import ExpenseTable from "./containers/ExpenseTable/ExpenseTable";

function App() {
  const [buttonsColor, setButtonsColors] = React.useState({
    fixed: "",
    var: "",
    cap: "",
  });

  const dispatch = useDispatch();

  const income = useSelector((store) => store.INCOME.income);

  const allExpenses = useSelector((store) => store.ALLEXPENSES.allExpenses);

  const currentExpenseName = useSelector(
    (store) => store.CURRENTEXPENSENAME.currentExpenseName
  );

  const currentExpense = useSelector(
    (store) => store.CURRENTEXPENSE.currentExpense
  );

  React.useEffect(() => {
    getData();
  }, [currentExpense]);

  async function getData() {
    const data = await fetchPost();
    dispatch(addAllExpensesAction(data));
  }

  function updateIncome(value) {
    dispatch(setIncomeAction(value));
  }

  function addExpense(item) {
    dispatch(addExpenseAction([...currentExpense, item]));
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
          {allExpenses && <ExpensesTotal income={income} />}
        </GridItem>
        <GridItem padding={5} area={"header2"} bg="orange.900">
          <CashIncome updateIncome={updateIncome} />
        </GridItem>
        <GridItem pl="2" area={"nav"} bg="green.900">
          {currentExpenseName && <InputExpense addExpense={addExpense} />}
        </GridItem>
        <GridItem pl="2" area={"main"} bg="blue.900">
          <Button
            bgColor={buttonsColor.fixed}
            onClick={() => {
              dispatch(updateCurrentExpenseNameAction("fixedExpenses"));
              dispatch(addCurrentExpenseAction(allExpenses[0]));
              setButtonsColors({ fixed: "green.300", var: "", cap: "" });
            }}
          >
            Fixed Expenses
          </Button>
          <Button
            bgColor={buttonsColor.var}
            onClick={() => {
              dispatch(updateCurrentExpenseNameAction("variableExpenses"));
              dispatch(addCurrentExpenseAction(allExpenses[1]));
              setButtonsColors({ fixed: "", var: "green.300", cap: "" });
            }}
          >
            Variable Expenses
          </Button>
          <Button
            bgColor={buttonsColor.cap}
            onClick={() => {
              dispatch(updateCurrentExpenseNameAction("capitalAccumulation"));
              dispatch(addCurrentExpenseAction(allExpenses[2]));
              setButtonsColors({ fixed: "", var: "", cap: "green.300" });
            }}
          >
            Capital Accumulation
          </Button>
          {currentExpenseName && <ExpenseTable />}
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
