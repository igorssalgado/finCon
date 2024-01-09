import React from "react";

import {
  HStack,
  VStack,
  Grid,
  GridItem,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Wrap,
  Button,
} from "@chakra-ui/react";
import ExpensesTable from "../src/components/ExpensesTable";
import InputExpense from "./components/InputExpense";
import { BarChart } from "./components/BarChart";
import { addExpense, getData } from "./database/firebase";
import ExpensesTotal from "./components/ExpensesTotal";
import CashIncome from "./components/CashIncome";

function App() {
  const [currentExpense, setCurrentExpense] = React.useState({
    expenseName: "",
    expensesFromDB: getData(),
  });

  function getAmountTotals() {
    let total = [0, 0, 0];
    let db = currentExpense.expensesFromDB;

    JSON.parse(db).capitalAccumulation.map((item) => {
      total[0] += item.amount;
    });

    JSON.parse(db).fixedExpenses.map((item) => {
      total[1] += item.amount;
    });

    JSON.parse(db).varExpenses.map((item) => {
      total[2] += item.amount;
    });

    return total;
  }

  return (
    <>
      <Grid
        templateAreas={`"header header2"
                  "nav main"
                  "nav main"`}
        gridTemplateRows={"120px 1fr 500px"}
        gridTemplateColumns={"400px 1fr"}
        gap="1"
        color="whiteAlpha.800"
        fontWeight="bold"
      >
        <GridItem padding={3} area={"header"} bg="red.900">
          <ExpensesTotal totalsArray={getAmountTotals()} />
        </GridItem>
        <GridItem padding={5} area={"header2"} bg="orange.900">
          <CashIncome />
        </GridItem>
        <GridItem pl="2" area={"nav"} bg="green.900">
          <InputExpense currentExpense={currentExpense} />
        </GridItem>
        <GridItem pl="2" area={"main"} bg="blue.900">
          <Button
            onClick={() =>
              setCurrentExpense({
                ...currentExpense,
                expenseName: "fixedExpenses",
              })
            }
          >
            Fixed Expenses
          </Button>
          <Button
            onClick={() =>
              setCurrentExpense({
                ...currentExpense,
                expenseName: "varExpenses",
              })
            }
          >
            Variable Expenses
          </Button>
          <Button
            onClick={() =>
              setCurrentExpense({
                ...currentExpense,
                expenseName: "capitalAccumulation",
              })
            }
          >
            Capital Accumulation
          </Button>

          {currentExpense.expenseName && (
            <ExpensesTable currentExpense={currentExpense} />
          )}
        </GridItem>
      </Grid>
      {/* <Grid
        templateAreas={`"header header"
                  "chart main"`}
        gridTemplateRows={"50px 30px 30px"}
        gridTemplateColumns={"1fr 12fr"}
        h="200px"
        gap="1"
      >
        <GridItem padding="2" area={"header"}>
          <HStack>
            <InputExpense />
          </HStack>
        </GridItem>
        <GridItem area={"chart"} width={500}>
          <BarChart />
        </GridItem>
        <GridItem pl="2" area={"main"}>
          <HStack>
            <Tabs>
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <ExpensesTable name="Fixed Expenses" />
                </TabPanel>
                <TabPanel>
                  <ExpensesTable name="Variable Expenses" />
                </TabPanel>
                <TabPanel>
                  <ExpensesTable name="Capital Accumulation" />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </HStack>
        </GridItem>
      </Grid> */}
    </>
  );
}

export default App;
