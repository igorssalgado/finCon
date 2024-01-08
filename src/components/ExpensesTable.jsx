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

const ExpensesTable = (props) => {
  return (
    <TableContainer>
      <Table variant="striped" size="sm">
        <TableCaption placement="top">{props.name}</TableCaption>
        <Thead>
          <Tr>
            <Th>expense name</Th>
            <Th>amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>coisa</Td>
            <Td>amount</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ExpensesTable;
