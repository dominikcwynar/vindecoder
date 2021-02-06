import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Button,
  Container,
  Text,
  VStack,
  Spacer,
  HStack,
} from "@chakra-ui/react";
const about = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>ABOUT VIN DECODER</title>
      </Head>
      <Container maxW="2xl">
        <VStack>
          <br></br>
          <Text fontSize="xl" textAlign="justify">
            {" "}
            App performing extended VIN decoding made using Next.js and The
            NHTSA Product Information Catalog Vehicle Listing (vPIC) API.{" "}
            <br></br>
            <br></br>Decodes VINs for US market vehicles.
          </Text>
          <Spacer></Spacer>
          <HStack>
            <Button
              onClick={() => window.open("http://vpic.nhtsa.dot.gov/api/")}
              colorScheme="green"
            >
              API
            </Button>
            <Spacer></Spacer>
            <Button
              align="center"
              onClick={() => router.push("/")}
              colorScheme="green"
              variant="outline"
            >
              Go back
            </Button>
          </HStack>
        </VStack>
      </Container>
    </div>
  );
};
export default about;
