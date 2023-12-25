import { CreateDistroFromTarFile } from "../../../wailsjs/go/app/App";
import { app } from "../../../wailsjs/go/models";
import Layout from "../../components/Layout";
import { useErrorToast } from "../../components/toast";
import ImportTarballForm from "./ImportTarballForm";

const ImportTarball = () => {
  const reportError = useErrorToast();

  const onSubmit = async (values: app.CreateDistroFromTarFileRequest) => {
    try {
      await CreateDistroFromTarFile(values);
    } catch (e) {
      reportError(e);
    }
  };

  return (
    <Layout>
      <ImportTarballForm onSubmit={onSubmit} />
    </Layout>
  );
};

export default ImportTarball;
