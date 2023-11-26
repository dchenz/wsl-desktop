import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetDistros } from "../../wailsjs/go/app/App";
import { app } from "../../wailsjs/go/models";
import DistroTable from "../components/DistroTable";

const ListPage: React.FC = () => {
  const [distros, setDistros] = useState<app.Distro[]>([]);

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

export default ListPage;
