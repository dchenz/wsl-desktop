import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PAGES } from "./const";
import HomePage from "./pages/HomePage";
import { ImportDockerImage, ImportTarball } from "./pages/Import";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PAGES.home} element={<HomePage />} />
          <Route
            path={PAGES.importFromDocker}
            element={<ImportDockerImage />}
          />
          <Route path={PAGES.importFromTarball} element={<ImportTarball />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
