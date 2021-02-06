import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const VinTable = ({ docs, name }) => {
  return (
    <Table variant="striped" colorScheme="green" size="sm">
      <Thead>
        <Tr>{name}</Tr>
      </Thead>
      <Tbody>
        {docs.map((d) => (
          <Tr>
            <Td>{d["Variable"]}</Td>
            <Td>{d["Value"]}</Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot></Tfoot>
    </Table>
  );
};

export default VinTable;
