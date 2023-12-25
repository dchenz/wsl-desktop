import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PAGES } from "./const";
import HomePage from "./pages/HomePage";
import ImportFromDockerPage from "./pages/ImportFromDockerPage";
import ImportFromTarballPage from "./pages/ImportFromTarballPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path={PAGES.home} element={<HomePage />} />
            <Route
              path={PAGES.importFromDocker}
              element={<ImportFromDockerPage />}
            />
            <Route
              path={PAGES.importFromTarball}
              element={<ImportFromTarballPage />}
            />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
