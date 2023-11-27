import { Box, HStack, Heading } from "@chakra-ui/layout";
import Layout from "../../components/Layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import DockerDaemonStatus from "../../components/DockerDaemonStatus";
import FromImage from "./FromImage";
import FromTarball from "./FromTarball";

const ImportPage = () => {
  return (
    <Layout>
      <HStack>
        <Heading size="sm">Import Distro</Heading>
        <Box flexGrow={1}></Box>
        <DockerDaemonStatus />
      </HStack>
      <Tabs>
        <TabList>
          <Tab>From Docker Image</Tab>
          <Tab>From Docker Container</Tab>
          <Tab>From Tarball</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FromImage />
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel>
            <FromTarball />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default ImportPage;
