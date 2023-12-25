import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CreateDistroFromDockerImage } from "../../../wailsjs/go/app/App";
import { app } from "../../../wailsjs/go/models";
import DockerDaemonStatus from "../../components/DockerDaemonStatus";
import Layout from "../../components/Layout";
import { useErrorToast } from "../../components/toast";
import { PAGES } from "../../const";
import ImportDockerContainerForm from "./ImportDockerContainerForm";
import ImportDockerImageForm from "./ImportDockerImageForm";

const ImportDocker = () => {
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
            <ImportDockerContainerForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default ImportDocker;
