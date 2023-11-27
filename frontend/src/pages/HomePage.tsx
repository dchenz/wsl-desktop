import ActionToolbar from "../components/ActionToolbar";
import DistroTable from "../components/DistroTable";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <ActionToolbar />
      <DistroTable />
    </Layout>
  );
};

export default HomePage;
