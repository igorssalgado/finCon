import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { FormatCurrency } from "../utils/FormatCurrency";

const ExpensesTable = (props) => {
  const [tableItem, setTableItem] = React.useState();

  function createTdComponent(name, amount) {
    return (
      <Tbody>
        <Tr key={Math.random()}>
          <Td>{name}</Td>
          <Td>{FormatCurrency(amount)}</Td>
        </Tr>
      </Tbody>
    );
  }

  let currentExpense = props.currentExpense.expensesFromDB;

  React.useEffect(() => {
    switch (props.currentExpense.expenseName) {
      case "fixedExpenses":
        setTableItem(
          JSON.parse(currentExpense).fixedExpenses.map((item) => {
            return createTdComponent(item.name, item.amount);
          })
        );

        break;
      case "variableExpenses":
        setTableItem(
          JSON.parse(currentExpense).variableExpenses.map((item) => {
            return createTdComponent(item.name, item.amount);
          })
        );
        break;
      case "capitalAccumulation":
        setTableItem(
          JSON.parse(currentExpense).capitalAccumulation.map((item) => {
            return createTdComponent(item.name, item.amount);
          })
        );
        break;

      default:
        console.log("default");
        break;
    }
  }, [props.currentExpense.expenseName]);

  return (
    <TableContainer>
      <Table variant="striped" size="sm">
        <TableCaption placement="top">
          {props.currentExpense.expenseName}
        </TableCaption>
        <Thead>
          <Tr key={Math.random()}>
            <Th>expense name</Th>
            <Th>amount</Th>
          </Tr>
        </Thead>
        {tableItem}
      </Table>
    </TableContainer>
  );
};

export default ExpensesTable;
