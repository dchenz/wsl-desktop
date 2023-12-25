import { useNavigate } from "react-router-dom";
import { CreateDistroFromTarFile } from "../../wailsjs/go/app/App";
import { app } from "../../wailsjs/go/models";
import ImportTarballForm from "../components/Import/ImportTarballForm";
import Layout from "../components/Layout";
import { useErrorToast } from "../components/toast";
import { PAGES } from "../const";

const ImportFromTarballPage = () => {
  const reportError = useErrorToast();
  const navigate = useNavigate();

  const onSubmit = async (values: app.CreateDistroFromTarFileRequest) => {
    try {
      await CreateDistroFromTarFile(values);
      navigate(PAGES.home);
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

export default ImportFromTarballPage;
