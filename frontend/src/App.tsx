import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PAGES } from "./const";
import HomePage from "./pages/HomePage";
import { ImportDocker } from "./pages/Import";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PAGES.home} element={<HomePage />} />
          <Route path={PAGES.importFromDocker} element={<ImportDocker />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
