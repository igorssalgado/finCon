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

const IncomeTable = (props) => {
  const [list, setList] = React.useState();

  const income = useSelector((store) => store.INCOME.income);

  React.useEffect(() => {
    income &&
      setList(
        income.map((item) => {
          if (item.incomeName) {
            return (
              <Tr key={Math.random() * 5}>
                <Td>{item.incomeName}</Td>
                <Td>{item.amount}</Td>
                <Td>
                  <Button
                    variant="link"
                    onClick={() => props.deleteIncome(item.id)}
                  >
                    <DeleteIcon w={5} h={3} color={"white.500"} />
                  </Button>
                </Td>
              </Tr>
            );
          }
        })
      );
  }, [income]);

  return (
    <>
      {income ? (
        <TableContainer>
          <Table size="sm" alignContent={"center"}>
            <Thead>
              <Tr>
                <Th>income Name</Th>
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

export default IncomeTable;
