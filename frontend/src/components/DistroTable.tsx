import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { main } from "../../wailsjs/go/models";

type DistroTableProps = {
  items: main.Distro[];
};

const DistroTable = ({ items }: DistroTableProps) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>State</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item, i) => (
            <Tr key={i}>
              <Td>{item.name}</Td>
              <Td>{item.state}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DistroTable;
