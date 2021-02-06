import { HStack, Flex, Button, IconButton, Spacer } from "@chakra-ui/react";
// import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
const TopNav = () => {
  const router = useRouter();

  return (
    <Flex marginRight="20px" marginTop="10px">
      <Spacer></Spacer>
      <HStack spacing="10px">
        <Button
          colorScheme="green"
          size="sm"
          onClick={() => router.push("/about")}
        >
          About
        </Button>
        <IconButton
          colorScheme="green"
          variant="outline"
          size="sm"
          icon={<FaGithub />}
          onClick={() => window.open("https://github.com")}
        />
      </HStack>
    </Flex>
  );
};

export default TopNav;
