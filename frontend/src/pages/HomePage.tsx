import { HStack } from "@chakra-ui/react";
import DistroTable from "../components/DistroTable";
import ImportDistroButton from "../components/ImportDistroButton";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <HStack mb={2}>
        <ImportDistroButton />
      </HStack>
      <DistroTable />
    </Layout>
  );
};

export default HomePage;
