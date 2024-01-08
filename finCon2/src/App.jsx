import React from "react";

import { HStack, VStack, Grid, GridItem } from "@chakra-ui/react";
import ExpensesTable from "../src/components/ExpensesTable";
import InputExpense from "./components/InputExpense";
import { BarChart } from "./components/BarChart";
import { fetchData } from "./database/firebase";

function App() {
  const [fixedExpenses, setFixedExpenses] = React.useState([]);
  const [varExpenses, setVarExpenses] = React.useState([]);
  const [capitalAccumulation, setCapitalAccumulation] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Grid
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
            <ExpensesTable name="Fixed Expenses" />
            <ExpensesTable name="Variable Expenses" />
            <ExpensesTable name="Capital Accumulation" />
          </HStack>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
