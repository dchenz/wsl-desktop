import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { app } from "../../wailsjs/go/models";
import { useEffect, useState } from "react";
import { GetDistros } from "../../wailsjs/go/app/App";

const DistroTable = () => {
  const [distros, setDistros] = useState<app.Distro[]>([]);

  useEffect(() => {
    GetDistros().then(setDistros);
  }, []);

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
          {distros.map((item, i) => (
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
