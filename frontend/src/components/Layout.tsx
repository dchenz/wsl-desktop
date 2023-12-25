import { Box, HStack } from "@chakra-ui/layout";
import React from "react";
import BackButton from "./BackButton";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box p={3} height="100vh">
      <HStack>
        <BackButton />
      </HStack>
      <Box p={3}>{children}</Box>
    </Box>
  );
};

export default Layout;
