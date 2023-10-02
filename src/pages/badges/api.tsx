import {
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";
import OpacityContent from "~/components/global/content";

import BadgeExample from "~/examples/badges";

const BadgesAPI = () => {
  return (
    <OpacityContent>
      <div className="container mx-auto lg:px-40 lg:pt-20 w-full">
        <Heading>Request a Badge</Heading>
        <hr className="my-5" />
        <Text>
          The following table shows request parameters you can use in a badge
          API call.
        </Text>
        <TableContainer className="my-5">
          <Table variant="striped" className="border">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Details</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Code</Td>
                <Td>Allows you to search via code.</Td>
              </Tr>
              <Tr>
                <Td>Name</Td>
                <Td>Allows you to search via name.</Td>
              </Tr>
              <Tr>
                <Td>Hotel</Td>
                <Td>
                  You may specify a hotel to fetch badges from (default is all).
                  <br />
                  <small>
                    options: 'com', 'com.br', 'com.tr', 'it', 'nl', 'es', 'fi',
                    'de', 'fr' or 'all'.
                  </small>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Heading>Response a Badge</Heading>
        <hr className="my-5" />

        <SyntaxHighlighter language="json" style={arta}>
          {BadgeExample}
        </SyntaxHighlighter>
      </div>
    </OpacityContent>
  );
};

export default BadgesAPI;
