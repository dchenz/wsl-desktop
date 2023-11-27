import { Box, ChakraProvider } from "@chakra-ui/react";
import DistroTable from "./components/DistroTable";
import ActionToolbar from "./components/ActionToolbar";

function App() {
  return (
    <ChakraProvider>
      <Box p={3} height="100vh">
        <ActionToolbar />
        <DistroTable />
      </Box>
    </ChakraProvider>
  );
}

export default App;
