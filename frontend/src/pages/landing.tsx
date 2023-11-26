import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetDistros } from "../../wailsjs/go/main/App";
import { main } from "../../wailsjs/go/models";
import DistroTable from "../components/DistroTable";

const LandingPage: React.FC = () => {
  const [distros, setDistros] = useState<main.Distro[]>([]);

  useEffect(() => {
    GetDistros().then(setDistros);
  }, []);

  return (
    <Box p={3}>
      <Heading>WSL Desktop</Heading>
      <DistroTable items={distros} />
    </Box>
  );
};

export default LandingPage;
