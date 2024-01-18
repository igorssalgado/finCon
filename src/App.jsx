import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  updateCurrentExpenseAction,
  addExpenseAction,
} from "./store/currentExpense/currentExpense-slice";
import { updateCurrentExpenseNameAction } from "./store/currentExpenseName/currentExpenseName-slice";
import { addAllExpensesAction } from "./store/allExpenses/allExpenses-slice";
import { setIncomeAction } from "./store/income/currentExpenseName-slice";

import {
  Grid,
  GridItem,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import { fetchPost, addItem } from "./database/database";

import InputExpense from "./containers/InputExpense/InputExpense";
import ExpensesTotal from "./containers/ExpensesTotal/ExpensesTotal";
import CashIncome from "./components/CashIncome";
import ExpenseTable from "./containers/ExpenseTable/ExpenseTable";

function App() {
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
  }, []);

  async function getData() {
    const data = await fetchPost();
    dispatch(addAllExpensesAction(data));
    setTab("fixedExpenses", allExpenses[0]);
  }

  function updateIncome(value) {
    dispatch(setIncomeAction(value));
  }

  function addExpense(item) {
    dispatch(addExpenseAction([...currentExpense, item]));
    addItem(item, currentExpenseName);
  }

  function setTab(expenseName, expenses) {
    dispatch(updateCurrentExpenseNameAction(expenseName, expenses));
    dispatch(updateCurrentExpenseAction(expenses));
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
        {currentExpenseName && (
          <GridItem pl="2" area={"main"} bg="blue.900">
            <Tabs size="md" variant="enclosed">
              <TabList>
                <Tab
                  onClick={() => {
                    setTab("fixedExpenses", allExpenses[0]);
                  }}
                >
                  fixedExpenses
                </Tab>
                <Tab
                  onClick={() => {
                    setTab("variableExpenses", allExpenses[1]);
                  }}
                >
                  variableExpenses
                </Tab>
                <Tab
                  onClick={() => {
                    setTab("capitalAccumulation", allExpenses[2]);
                  }}
                >
                  capitalAccumulation
                </Tab>
              </TabList>
              <TabPanels>{currentExpenseName && <ExpenseTable />}</TabPanels>
            </Tabs>
          </GridItem>
        )}
      </Grid>
    </>
  );
}

export default App;
