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

const ExpenseTable = (props) => {
  const [list, setList] = React.useState();

  // console.log(props.expense);

  React.useEffect(() => {
    props.expense &&
      setList(
        props.expense.map((item) => {
          return (
            <Tr key={Math.random() * 5}>
              <Td>{item.expenseName}</Td>
              <Td>{item.amount}</Td>
            </Tr>
          );
        })
      );
  }, [props.expense]);

  return (
    <>
      {props.expense ? (
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
