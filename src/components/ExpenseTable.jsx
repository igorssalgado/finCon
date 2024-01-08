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
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const ExpenseTable = (props) => {
  let BRCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const genExpensesListTable = () => {
    return list;
  };

  let list =
    props.expenses &&
    props.expenses.map((expense) => {
      return (
        <Tr
          key={
            expense.name + "-" + (Math.random() + 1).toString(36).substring(7)
          }
        >
          <Td>{expense.name}</Td>
          <Td isNumeric>{BRCurrency.format(expense.amount)}</Td>
          <Td>
            <Button background={false} onClick={(e) => console.log("delete")}>
              <DeleteIcon boxSize={3} />
            </Button>
          </Td>
        </Tr>
      );
    });

  return (
    <TableContainer>
      <Table variant="striped" size="sm">
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
