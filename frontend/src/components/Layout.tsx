import { Box } from "@chakra-ui/layout";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box p={3} height="100vh">
      {children}
    </Box>
  );
};

export default Layout;
