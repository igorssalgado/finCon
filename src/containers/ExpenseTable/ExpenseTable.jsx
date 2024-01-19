import React from "react";
import { useSelector } from "react-redux";

import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const ExpenseTable = (props) => {
  const [list, setList] = React.useState();

  const expense = useSelector((store) => store.CURRENTEXPENSE.currentExpense);

  React.useEffect(() => {
    expense &&
      setList(
        expense.map((item) => {
          if (item.expenseName) {
            return (
              <Tr key={Math.random() * 5}>
                <Td>{item.expenseName}</Td>
                <Td>{item.amount}</Td>
                <Td>
                  <Button
                    variant="link"
                    onClick={() => props.deleteExpense(item.id)}
                  >
                    <DeleteIcon w={5} h={3} color={"white.500"} />
                  </Button>
                </Td>
              </Tr>
            );
          }
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
