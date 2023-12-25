import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  CreateDistroFromDockerContainer,
  CreateDistroFromDockerImage,
} from "../../wailsjs/go/app/App";
import { app } from "../../wailsjs/go/models";
import DockerDaemonStatus from "../components/DockerDaemonStatus";
import ImportDockerContainerForm from "../components/Import/ImportDockerContainerForm";
import ImportDockerImageForm from "../components/Import/ImportDockerImageForm";
import Layout from "../components/Layout";
import { useErrorToast } from "../components/toast";
import { PAGES } from "../const";

const ImportFromDockerPage = () => {
  const reportError = useErrorToast();
  const navigate = useNavigate();

  const onDockerImageSubmit = async (
    values: app.CreateDistroFromImageRequest
  ) => {
    try {
      await CreateDistroFromDockerImage(values);
      navigate(PAGES.home);
    } catch (e) {
      reportError(e);
    }
  };

  const onDockerContainerSubmit = async (
    values: app.CreateDistroFromContainerRequest
  ) => {
    try {
      await CreateDistroFromDockerContainer(values);
      navigate(PAGES.home);
    } catch (e) {
      reportError(e);
    }
  };

  return (
    <Layout headerContent={<DockerDaemonStatus />}>
      <Tabs>
        <TabList>
          <Tab>From Image</Tab>
          <Tab>From Container</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ImportDockerImageForm onSubmit={onDockerImageSubmit} />
          </TabPanel>
          <TabPanel>
            <ImportDockerContainerForm onSubmit={onDockerContainerSubmit} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default ImportFromDockerPage;
