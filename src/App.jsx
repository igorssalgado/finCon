import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  updateCurrentExpenseAction,
  addExpenseAction,
} from "./store/currentExpense/currentExpense-slice";
import { updateCurrentExpenseNameAction } from "./store/currentExpenseName/currentExpenseName-slice";
import { addAllExpensesAction } from "./store/allExpenses/allExpenses-slice";
import {
  setIncomeAction,
  setIncomeTotalAction,
} from "./store/income/income-slice";

import {
  Grid,
  GridItem,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  VStack,
} from "@chakra-ui/react";

import {
  fetchPost,
  addItem,
  deleteItem,
  getAllIncomes,
} from "./database/database";

import InputExpense from "./containers/InputExpense/InputExpense";
import ExpensesTotal from "./containers/ExpensesTotal/ExpensesTotal";
import CashIncome from "./containers/CashIncome/CashIncome";
import ExpenseTable from "./containers/ExpenseTable/ExpenseTable";
import ToogleColorMode from "./components/ToogleColorMode";

function App() {
  const dispatch = useDispatch();

  const allExpenses = useSelector((store) => store.ALLEXPENSES.allExpenses);

  const currentExpenseName = useSelector(
    (store) => store.CURRENTEXPENSENAME.currentExpenseName
  );

  const currentExpense = useSelector(
    (store) => store.CURRENTEXPENSE.currentExpense
  );

  const AllIncomes = useSelector((store) => store.INCOME.income);

  React.useEffect(() => {
    getData("fixedExpenses");
    getIncome();
  }, []);

  async function getData(currentExpenseName) {
    const allData = await fetchPost();

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

  async function getIncome() {
    const allIncome = await getAllIncomes();

    dispatch(setIncomeAction(allIncome));
    setIncomeTotal();
  }

  function setIncomeTotal() {
    let incomeSum = 0;

    if (AllIncomes) {
      AllIncomes[0].map((income) => {
        incomeSum += income.amount;
      });
    }

    dispatch(setIncomeTotalAction(incomeSum));
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
          templateAreas={`"header input"
                  "main main"`}
          gridTemplateRows={"150px 100%"}
          gridTemplateColumns={"50% 50%"}
          gap="1"
          fontWeight="bold"
        >
          <GridItem padding={3} area={"header"}>
            <ExpensesTotal />
          </GridItem>
          <GridItem padding={5} area={"input"}>
            <ToogleColorMode />
            <CashIncome />
          </GridItem>
          <GridItem pl="2" area={"main"}>
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
