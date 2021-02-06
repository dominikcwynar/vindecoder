import Head from "next/head";
import { useState } from "react";
import VinDisplay from "../components/VinDisplay";
// import useUrl from "../hooks/useUrl";
import { Spacer, Input, Button, HStack, VStack } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
// import Mode from "../components/Mode";
// import { Select } from "@chakra-ui/react";

export default function Home() {
  const [vin, setVin] = useState("");
  const [decodedVin, setDecodedVin] = useState({});
  const [mode, setMode] = useState("DecodeVinExtended");
  const toast = useToast();
  // const [mfr, setMfr] = useState({});
  // console.log(mode);
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // console.log(vin);
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/${mode}/${vin}?format=json`)
      .then((res) => res.json())
      .then((result) => {
        result["Results"][1]["Value"] !== "0"
          ? toast({
              title: "Error",
              description: `Incorrect VIN: ${vin}`,
              status: "error",
              duration: 9000,
              isClosable: true,
              position: "bottom-right",
            })
          : //  !== 0
            // console.log(result);
            [
              setDecodedVin(result),
              toast({
                title: "Success",
                description: `VIN: ${vin}`,
                status: "success",
                duration: 9000,
                isClosable: true,
                position: "bottom-right",
              }),
            ];

        // console.error("incorrect vin");
      })
      .catch((error) => console.error(error));
    // setMfr(decodedVin[])
    // console.log("21");
    // const mfrId = decodedVin["Results"][21]["Value"];
    // const mfrId = decodedVin[21]["Value"];
    // console.log("mfrId " + mfrId);
    // fetch(
    //   `https://vpic.nhtsa.dot.gov/api/vehicles/GetManufacturerDetails/${mfrId}?format=json`
    // )
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setMfr(result);
    //     console.log(result);
    //   })
    //   .catch((error) => console.log("error"));

    // console.log(mfr);
    // setVin("");
  };
  return (
    <VStack>
      <Spacer></Spacer>
      <form onSubmit={handleSubmit}>
        <HStack w="100%">
          <Input
            w="500px"
            size="lg"
            placeholder="Enter VIN Number..."
            type="text"
            onChange={(e) => setVin(e.target.value)}
            focusBorderColor="green.200"
          />
          <Spacer />
          <Button type="submit" colorScheme="green" size="lg">
            Decode
          </Button>
        </HStack>
      </form>
      {decodedVin["Results"] && (
        <VinDisplay decodedVin={decodedVin} vin={vin} />
      )}
    </VStack>
  );
}
