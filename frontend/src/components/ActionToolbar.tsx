import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PAGES } from "../const";

const ActionToolbar = () => {
  return (
    <HStack>
      <Button as={Link} to={PAGES.importDistro}>
        Import Distro
      </Button>
    </HStack>
  );
};

export default ActionToolbar;
