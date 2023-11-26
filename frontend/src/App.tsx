import { ChakraProvider } from "@chakra-ui/react";
import LandingPage from "./pages/landing";

function App() {
  return (
    <ChakraProvider>
      <LandingPage />
    </ChakraProvider>
  );
}

export default App;
