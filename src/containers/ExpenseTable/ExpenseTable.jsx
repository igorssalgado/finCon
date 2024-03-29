import React from "react";

import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ExpenseTable = () => {
  const [list, setList] = React.useState();

  const expense = useSelector((store) => store.CURRENTEXPENSE.currentExpense);

  React.useEffect(() => {
    expense &&
      setList(
        expense.map((item) => {
          return (
            <Tr key={Math.random() * 5}>
              <Td>{item.expenseName}</Td>
              <Td>{item.amount}</Td>
            </Tr>
          );
        })
      );
  }, [expense]);

  return (
    <>
      {expense ? (
        <TableContainer>
          <Table size="sm" alignContent={"center"}>
            <Thead>
              <Tr>
                <Th>expense Name</Th>
                <Th>amount</Th>
              </Tr>
            </Thead>
            <Tbody>{list}</Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Text>Please select a type!</Text>
      )}
    </>
  );
};

export default ExpenseTable;
