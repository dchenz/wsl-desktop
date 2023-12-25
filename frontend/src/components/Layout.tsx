import { Box, HStack } from "@chakra-ui/layout";
import React from "react";
import BackButton from "./BackButton";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box p={3} height="100vh">
      <HStack mb={2}>
        <BackButton />
      </HStack>
      {children}
    </Box>
  );
};

export default Layout;
