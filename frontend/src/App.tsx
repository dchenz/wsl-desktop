import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PAGES } from "./const";
import DockerImportPage from "./pages/DockerImportPage";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PAGES.home} element={<HomePage />} />
          <Route path={PAGES.dockerImport} element={<DockerImportPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
