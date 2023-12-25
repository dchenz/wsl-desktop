import { Box, HStack } from "@chakra-ui/layout";
import React from "react";
import BackButton from "./BackButton";

type LayoutProps = {
  children: React.ReactNode;
  headerContent?: React.ReactNode;
};

const Layout = ({ children, headerContent }: LayoutProps) => {
  return (
    <Box p={3} height="100vh">
      <HStack>
        <BackButton />
        <Box flexGrow={1}></Box>
        {headerContent}
      </HStack>
      <Box p={3}>{children}</Box>
    </Box>
  );
};

export default Layout;
