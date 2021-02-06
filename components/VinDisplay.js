import { Heading } from "@chakra-ui/react";
import VinTable from "../components/VinTable";

const processVinJson = (decodedVin) => {
  const newVin = decodedVin["Results"];
  const varsToErase = [143, 191];
  console.log(newVin);
  for (const index in newVin) {
    if (
      newVin[index]["Value"] === null ||
      newVin[index]["Value"] === "" ||
      newVin[index]["Value"] === "Not Applicable" ||
      varsToErase.includes(newVin[index]["VariableId"])
    )
      delete newVin[index];
  }
  console.log(newVin);
  return newVin;
};
const VinDisplay = ({ decodedVin, vin }) => {
  const vinInfo = [
    { Variable: "VIN", Value: vin },
    { Variable: "Squish VIN", Value: vin.slice(0, 8) + vin.slice(9, 11) },
    { Variable: "WMI", Value: vin.slice(0, 3) },
    { Variable: "VDS", Value: vin.slice(3, 11) },
    { Variable: "Year Identifier", Value: vin[9] },
    { Variable: "Year Identifier", Value: vin.slice(11, 17) },
  ];
  console.log(vinInfo);
  decodedVin = processVinJson(decodedVin);
  return (
    <>
      <Heading fontFamily="Archivo Black" color="green.700">
        {decodedVin[9]["Value"]} {decodedVin[6]["Value"].toUpperCase()}{" "}
        {decodedVin[8]["Value"].toUpperCase()}
      </Heading>
      <VinTable docs={vinInfo} name="VIN Info"></VinTable>
      <br />
      <br />
      <br />
      <br />
      <VinTable docs={decodedVin} name="Basic Info"></VinTable>
    </>
  );
};

export default VinDisplay;
