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
  VStack,
} from "@chakra-ui/react";

import { fetchPost, addItem, deleteItem } from "./database/database";

import InputExpense from "./containers/InputExpense/InputExpense";
import ExpensesTotal from "./containers/ExpensesTotal/ExpensesTotal";
import CashIncome from "./components/CashIncome";
import ExpenseTable from "./containers/ExpenseTable/ExpenseTable";
import ToogleColorMode from "./components/ToogleColorMode";

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
    console.log("entrou");
    getData("fixedExpenses");
  }, []);

  async function getData(currentExpenseName) {
    const allData = await fetchPost();
    console.log(allData);

    let currentData;
    if (currentExpenseName === "fixedExpenses") {
      currentData = allData[0];
    } else if (currentExpenseName === "variableExpenses") {
      currentData = allData[1];
    } else {
      currentData = allData[2];
    }

    dispatch(addAllExpensesAction(allData));
    setTab(currentExpenseName, currentData);
  }

  function updateIncome(value) {
    dispatch(setIncomeAction(value));
  }

  function addExpense(item) {
    dispatch(addExpenseAction([...currentExpense, item]));
    addItem(item, currentExpenseName);
    getData(currentExpenseName);
  }

  function setTab(expenseName, expenses) {
    dispatch(updateCurrentExpenseNameAction(expenseName, expenses));
    dispatch(updateCurrentExpenseAction(expenses));
  }

  function deleteExpense(id) {
    let array = [...currentExpense];
    const index = array.findIndex((item) => item.id === id);
    array.splice(index, 1);
    dispatch(updateCurrentExpenseAction(array));
    deleteItem(id, currentExpenseName);
    getData(currentExpenseName);
  }

  return (
    <>
      {currentExpense && (
        <Grid
          templateAreas={`"header header2"
                  "nav main"
                  "nav main"`}
          gridTemplateRows={"150px 1fr 500px"}
          gridTemplateColumns={"400px 1fr"}
          gap="1"
          // color="whiteAlpha.800"
          fontWeight="bold"
        >
          <GridItem padding={3} area={"header"} bgColor={"gray.700"}>
            <ExpensesTotal income={income} />
          </GridItem>
          <GridItem padding={5} area={"header2"} bgColor={"gray.700"}>
            <ToogleColorMode />
            <CashIncome updateIncome={updateIncome} />
          </GridItem>
          <GridItem pl="2" area={"nav"} bgColor={"gray.700"}>
            qlqrcoisa
          </GridItem>
          <GridItem pl="2" area={"main"} bgColor={"gray.700"}>
            <VStack>
              <Tabs size="md" variant="enclosed">
                <TabList>
                  <Tab
                    onClick={() => {
                      setTab("fixedExpenses", allExpenses[0]);
                    }}
                  >
                    Fixed Expenses
                  </Tab>
                  <Tab
                    onClick={() => {
                      setTab("variableExpenses", allExpenses[1]);
                    }}
                  >
                    Variable Expenses
                  </Tab>
                  <Tab
                    onClick={() => {
                      setTab("capitalAccumulation", allExpenses[2]);
                    }}
                  >
                    Capital Accumulation
                  </Tab>
                </TabList>
                <TabPanels>
                  <VStack>
                    <InputExpense addExpense={addExpense} />
                    <ExpenseTable deleteExpense={deleteExpense} />
                  </VStack>
                </TabPanels>
              </Tabs>
            </VStack>
          </GridItem>
        </Grid>
      )}
    </>
  );
}

export default App;
