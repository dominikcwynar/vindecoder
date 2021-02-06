import Head from "next/head";
import Header from "./Header";
import TopNav from "./TopNav";
import { Center, VStack } from "@chakra-ui/react";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
        <title>VIN DECODER</title>
      </Head>
      <div>
        <TopNav></TopNav>
        <Center marginLeft="10%" marginRight="10%">
          <VStack width="100%">
            <Header></Header>
            {children}
          </VStack>
        </Center>
      </div>
    </>
  );
};

export default Layout;
