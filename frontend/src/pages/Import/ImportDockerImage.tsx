import { CreateDistroFromDockerImage } from "../../../wailsjs/go/app/App";
import { app } from "../../../wailsjs/go/models";
import Layout from "../../components/Layout";
import { useErrorToast } from "../../components/toast";
import ImportDockerImageForm from "./ImportDockerImageForm";

const ImportDockerImage = () => {
  const reportError = useErrorToast();

  const onSubmit = async (values: app.CreateDistroFromImageRequest) => {
    try {
      await CreateDistroFromDockerImage(values);
    } catch (e) {
      reportError(e);
    }
  };

  return (
    <Layout>
      <ImportDockerImageForm onSubmit={onSubmit} />
    </Layout>
  );
};

export default ImportDockerImage;
