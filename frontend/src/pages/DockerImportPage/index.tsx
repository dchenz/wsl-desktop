import { Box, HStack, Heading } from "@chakra-ui/layout";
import Layout from "../../components/Layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import DockerDaemonStatus from "../../components/DockerDaemonStatus";
import FromImage from "./FromImage";

const DockerImportPage = () => {
  return (
    <Layout>
      <HStack>
        <Heading size="sm">Import Distro with Docker</Heading>
        <Box flexGrow={1}></Box>
        <DockerDaemonStatus />
      </HStack>
      <Tabs>
        <TabList>
          <Tab>From Image</Tab>
          <Tab>From Container</Tab>
          <Tab>From Tarball</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FromImage />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default DockerImportPage;
