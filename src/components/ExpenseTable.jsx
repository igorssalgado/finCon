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

const ExpenseTable = (props) => {
  let list =
    props.expenses &&
    props.expenses.map((expense) => {
      return (
        <Tr key={Math.random()}>
          <Td>{expense.name}</Td>
          <Td>{expense.amount}</Td>
        </Tr>
      );
    });

  const genExpensesListTable = () => {
    return list;
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>{props.name}</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>amount</Th>
          </Tr>
        </Thead>
        <Tbody>{genExpensesListTable()}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default ExpenseTable;
