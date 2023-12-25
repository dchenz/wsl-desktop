import {
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useDistros } from "../queries/wsl";

const DistroTable = () => {
  const { data: distros, isLoading } = useDistros();

  if (isLoading || !distros) {
    return <Skeleton height="100px" />;
  }

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
