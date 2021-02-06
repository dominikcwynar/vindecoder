import { Box, Heading, Flex } from "@chakra-ui/react";
const Header = () => {
  return (
    <Flex>
      <Heading fontFamily="Archivo Black" size="3xl" color="green.200">
        VIN
      </Heading>
      <Heading fontFamily="Archivo Black" size="3xl" color="green.700">
        DECODER
      </Heading>
    </Flex>
  );
};

export default Header;
