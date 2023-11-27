import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PAGES } from "./const";
import ImportPage from "./pages/ImportPage";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PAGES.home} element={<HomePage />} />
          <Route path={PAGES.importDistro} element={<ImportPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
